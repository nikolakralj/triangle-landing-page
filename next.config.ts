import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/triangle-landing-page',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
