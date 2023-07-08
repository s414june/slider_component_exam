/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
let BASE_PATH = "/slider_component_exam";
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  output: "export",
  env: {
    BASE_PATH: isProd ? BASE_PATH : "",
  },
  basePath: isProd ? BASE_PATH : "",
  assetPrefix: isProd ? BASE_PATH : "",
  distDir: "docs",
};

module.exports = nextConfig;
