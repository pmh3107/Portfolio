import type { NextConfig } from "next";

/**
 * Hỗ trợ deploy cùng một source cho cả local/dev và GitHub Pages.
 * - Local: không cần basePath
 * - CI (GitHub Actions): tự suy ra repo name để set basePath/assetPrefix
 */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repoBasePath = isGithubActions && repository ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  trailingSlash: true,
};

export default nextConfig;
