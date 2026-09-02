import {
  imageSrc,
  imageSrcset,
  imageWebpSrcset,
  IMAGE_BLUR_DATA_URL,
  type ImageWidth,
} from "@/src/lib/images";
import { cn } from "@/src/lib/utils";

type OptimizedImageProps = {
  baseName: string;
  alt: string;
  /** Fallback width for the plain `src` — 400 thumbs, 800 default, 1200 LCP */
  widthHint?: ImageWidth;
  /** Stretch to fill a positioned parent */
  fill?: boolean;
  /** Aspect ratio for the non-fill variant, e.g. "4 / 5" */
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
};

/**
 * Serves the pre-generated WebP set with a JPEG fallback via <picture>.
 * The build is a static export (`images.unoptimized`), so next/image shipped
 * its runtime without ever optimizing — a plain picture element is lighter and
 * actually delivers the WebP files already sitting in /public/images.
 */
export default function OptimizedImage({
  baseName,
  alt,
  widthHint = 800,
  fill,
  ratio = "4 / 5",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  className,
  imgClassName,
}: OptimizedImageProps) {
  return (
    <div
      className={cn("frame", fill ? "absolute inset-0" : "w-full", className)}
      style={{
        backgroundImage: `url("${IMAGE_BLUR_DATA_URL}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...(fill ? null : { aspectRatio: ratio }),
      }}
    >
      <picture>
        <source type="image/webp" srcSet={imageWebpSrcset(baseName)} sizes={sizes} />
        <img
          src={imageSrc(baseName, widthHint)}
          srcSet={imageSrcset(baseName)}
          sizes={sizes}
          alt={alt}
          width={widthHint}
          height={Math.round(widthHint * 1.25)}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            fill ? "absolute inset-0 h-full w-full object-cover" : "",
            imgClassName
          )}
        />
      </picture>
    </div>
  );
}
