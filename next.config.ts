import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/american-chiro",
  assetPrefix: "/american-chiro/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
