import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const shouldUseBasePath = Boolean(process.env.GITHUB_ACTIONS && repositoryName);
const basePath = shouldUseBasePath ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: shouldUseBasePath ? `${basePath}/` : undefined,
};

export default nextConfig;
