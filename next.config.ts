import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const shouldUseBasePath = Boolean(process.env.GITHUB_ACTIONS && repositoryName);
const basePath = shouldUseBasePath ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  basePath,
  assetPrefix: shouldUseBasePath ? `${basePath}/` : undefined,
};

export default nextConfig;
