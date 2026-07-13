/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → Netlify publishes /out (avoids Vite "dist" leftover)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [96, 128, 256, 384, 400, 640, 800],
    remotePatterns: [],
  },
};

export default nextConfig;
