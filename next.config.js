/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS ? "/somei-gokaku.com" : "",
  trailingSlash: true,
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "/",
};

module.exports = nextConfig;
