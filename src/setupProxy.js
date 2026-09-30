const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    ["/api", "/account", "/workspace.js", "/workspace.css"],
    createProxyMiddleware({
      target: "http://127.0.0.1:4000",
      changeOrigin: true,
    }),
  );
};
