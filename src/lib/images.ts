/** Build responsive src for optimized public images (pre-sized on disk) */
export function imageSrc(baseName: string, width: 400 | 800 | 1200 = 800) {
  return `/images/${baseName}-${width}w.jpg`;
}

export function imageSrcset(baseName: string) {
  const widths = [400, 800, 1200] as const;
  return widths.map((w) => `/images/${baseName}-${w}w.jpg ${w}w`).join(", ");
}

export function imageDefault(baseName: string) {
  return `/images/${baseName}.jpg`;
}

export function imageWebp(baseName: string, width?: 400 | 800 | 1200) {
  if (width) return `/images/${baseName}-${width}w.webp`;
  return `/images/${baseName}.webp`;
}

/** Warm off-white blur — perceived instant load while photo decodes */
export const IMAGE_BLUR_DATA_URL =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#ebe4da"/>
          <stop offset="1" stop-color="#d4c4b0"/>
        </linearGradient>
      </defs>
      <rect width="16" height="20" fill="url(#g)"/>
    </svg>`
  );

/** Extract base name from path like /images/hair-01.jpg */
export function baseFromPath(imagePath: string) {
  const file = imagePath.split("/").pop() ?? "";
  return file.replace(/-\d{3,4}w\.(jpg|webp|jpeg)$/i, "").replace(/\.(jpg|webp|jpeg)$/i, "");
}
