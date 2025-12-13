import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable image optimization caching in development for easier testing
    minimumCacheTTL: process.env.NODE_ENV === 'development' ? 0 : 60,
  },
};

export default nextConfig;
