/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "cloudflare-pages",
  server: "./src/server/index.ts",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["!*.tsx", ".*"],
  appDirectory: "src/app",
  assetsBuildDirectory: "public/static",
  publicPath: "/static/",
};
