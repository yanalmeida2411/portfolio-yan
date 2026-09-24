import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF primeiro (menor), WebP como fallback
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
