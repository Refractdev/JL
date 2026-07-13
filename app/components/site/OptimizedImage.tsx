import Image, { type ImageProps } from "next/image";
import { imageSrc, IMAGE_BLUR_DATA_URL } from "@/src/lib/images";
import { cn } from "@/src/lib/utils";

type OptimizedImageProps = Omit<ImageProps, "src" | "alt" | "placeholder" | "blurDataURL"> & {
  baseName: string;
  alt: string;
  /** Source file width on disk — use 400 for thumbs, 800 default, 1200 only for LCP/hero */
  widthHint?: 400 | 800 | 1200;
  className?: string;
  imgClassName?: string;
};

/**
 * Local responsive images from /public/images/{base}-{w}w.jpg
 * Uses blur placeholder + Next AVIF/WebP for fast mobile paint.
 */
export default function OptimizedImage({
  baseName,
  alt,
  widthHint = 800,
  className,
  imgClassName,
  fill,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  priority,
  quality,
  ...rest
}: OptimizedImageProps) {
  const src = imageSrc(baseName, widthHint);
  const q = quality ?? (priority ? 78 : 68);

  const imageProps = {
    src,
    alt,
    sizes,
    priority,
    quality: q,
    placeholder: "blur" as const,
    blurDataURL: IMAGE_BLUR_DATA_URL,
    ...rest,
  };

  if (fill) {
    return (
      <div className={cn("relative overflow-hidden bg-muted", className)}>
        <Image
          {...imageProps}
          fill
          className={cn(
            "object-cover transition-[opacity,filter] duration-500",
            imgClassName
          )}
        />
      </div>
    );
  }

  const width = widthHint;
  const height = Math.round((widthHint * 5) / 4);

  return (
    <Image
      {...imageProps}
      width={width}
      height={height}
      className={cn(imgClassName, className)}
    />
  );
}
