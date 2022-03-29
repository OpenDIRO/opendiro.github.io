/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "cloudflare-pages",
  server: "./src/server/index.ts",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: [".*"],
  appDirectory: "src/app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/server/index.js",
  publicPath: "/static/",
};
