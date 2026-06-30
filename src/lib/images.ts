/** Build responsive src/srcset for optimized public images */
export function imageSrc(baseName: string, width = 800) {
  return `/images/${baseName}-${width}w.jpg`;
}

export function imageSrcset(baseName: string) {
  const widths = [400, 800, 1200];
  return widths.map((w) => `/images/${baseName}-${w}w.jpg ${w}w`).join(", ");
}

export function imageDefault(baseName: string) {
  return `/images/${baseName}.jpg`;
}

export function imageWebp(baseName: string) {
  return `/images/${baseName}.webp`;
}

/** Extract base name from path like /images/hair-01.jpg */
export function baseFromPath(imagePath: string) {
  const file = imagePath.split("/").pop() ?? "";
  return file.replace(/\.(jpg|webp|jpeg)$/i, "");
}
