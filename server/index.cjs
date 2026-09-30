const path = require("node:path");
const { createApp, text, HttpError } = require("./http.cjs");
function email(value) {
  const result = text(value, "Email", 254);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result))
    throw new HttpError(400, "Enter a valid email.");
  return result;
}
function buildServer(options = {}) {
  return createApp({
    workspace: require("./workspace.cjs"),
    spaFallback: true,
    root: path.resolve(__dirname, "../build"),
    database:
      options.database || path.resolve(__dirname, "../.data/demo.sqlite"),
    allowedOrigins: [
      "http://localhost:3000",
      "http://localhost:5173",
      "http://127.0.0.1:3000",
      "http://127.0.0.1:5173",
    ],
    resources: {
      employees: {
        writeOnly: false,
        validate: (body) => ({
          name: text(body.name, "Name", 80),
          role: text(body.role, "Role", 80),
          img:
            typeof body.img === "string" &&
            /^(https?:\/\/|\/photo\/)/.test(body.img)
              ? body.img.slice(0, 500)
              : "/photo/img (1).jpg",
        }),
      },
    },
  });
}
if (require.main === module) {
  const port = Number(process.env.PORT || 4000);
  buildServer().listen(port, "127.0.0.1", () =>
    console.log(`Demo server: http://localhost:${port}`),
  );
}
module.exports = { buildServer };
