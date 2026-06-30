import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_ASSETS = path.join(ROOT, "src", "assets");
const OUT_IMAGES = path.join(ROOT, "public", "images");
const OUT_VIDEOS = path.join(ROOT, "public", "videos");

const IMAGE_WIDTHS = [400, 800, 1200];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function isUpToDate(input, outputs) {
  const inputStat = await fs.stat(input);
  for (const output of outputs) {
    try {
      const outStat = await fs.stat(output);
      if (outStat.mtimeMs < inputStat.mtimeMs) return false;
    } catch {
      return false;
    }
  }
  return true;
}

async function optimizeImage(file) {
  const input = path.join(SRC_ASSETS, file);
  const base = path.parse(file).name;

  const outputs = [
    ...IMAGE_WIDTHS.flatMap((w) => [
      path.join(OUT_IMAGES, `${base}-${w}w.jpg`),
      path.join(OUT_IMAGES, `${base}-${w}w.webp`),
    ]),
    path.join(OUT_IMAGES, `${base}.jpg`),
    path.join(OUT_IMAGES, `${base}.webp`),
  ];

  if (await isUpToDate(input, outputs)) {
    return;
  }

  const pipeline = sharp(input).rotate();
  const meta = await pipeline.metadata();

  for (const width of IMAGE_WIDTHS) {
    if (meta.width && meta.width < width) continue;

    const isThumb = width <= 400;
    const jpegQuality = isThumb ? 72 : 78;

    await pipeline
      .clone()
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: jpegQuality, mozjpeg: true })
      .toFile(path.join(OUT_IMAGES, `${base}-${width}w.jpg`));

    await pipeline
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: isThumb ? 72 : 78 })
      .toFile(path.join(OUT_IMAGES, `${base}-${width}w.webp`));
  }

  await pipeline
    .clone()
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OUT_IMAGES, `${base}.jpg`));

  await pipeline
    .clone()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(OUT_IMAGES, `${base}.webp`));

  process.stdout.write(`Optimized ${file}\n`);
}

async function copyVideos() {
  const files = (await fs.readdir(SRC_ASSETS)).filter((f) => f.endsWith(".mp4"));
  for (const file of files) {
    const src = path.join(SRC_ASSETS, file);
    const dest = path.join(OUT_VIDEOS, file);
    try {
      const [srcStat, destStat] = await Promise.all([fs.stat(src), fs.stat(dest)]);
      if (destStat.mtimeMs >= srcStat.mtimeMs) continue;
    } catch {
      // dest missing
    }
    await fs.copyFile(src, dest);
    process.stdout.write(`Copied ${file}\n`);
  }
}

async function main() {
  await ensureDir(OUT_IMAGES);
  await ensureDir(OUT_VIDEOS);

  const images = (await fs.readdir(SRC_ASSETS)).filter((f) =>
    /\.(jpe?g|png)$/i.test(f),
  );

  for (const file of images) {
    await optimizeImage(file);
  }

  await copyVideos();
  process.stdout.write("Assets ready.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
