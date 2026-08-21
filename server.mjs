import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
  ".avif": "image/avif",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".ico": "image/x-icon",
};

function localPath(rawUrl) {
  const pathname = decodeURIComponent((rawUrl || "/").split("?")[0]);
  const clean = normalize(pathname).replace(/^(\.\.[/\\])+/, "").replace(/^[/\\]+/, "");
  return join(root, clean);
}

createServer(async (req, res) => {
  try {
    let file = localPath(req.url);
    const info = await stat(file).catch(() => null);
    if (info?.isDirectory()) file = join(file, "index.html");
    if (!info && !extname(file)) file = join(file, "index.html");
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": mime[extname(file).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-cache" });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Page not mirrored");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Exact Meech213 mirror running at http://127.0.0.1:${port}`);
});
