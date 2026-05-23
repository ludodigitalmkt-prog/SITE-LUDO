import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/SITE-LUDO",
  assetPrefix: "/SITE-LUDO/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;