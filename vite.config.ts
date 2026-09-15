import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
// vitest's re-export of Vite's defineConfig, so the `test` block below is typed.
// `Plugin` comes from the same place on purpose: vitest carries its own copy of
// Vite, and a `Plugin` imported straight from `vite` is a different type to the
// one this config's `plugins` field expects.
import { defineConfig, type Plugin } from "vitest/config";

/**
 * Hand the menu's framejs share button a single-file bundle.
 *
 * The pages below carry a two-line module that imports `src/**`, so there is no
 * inlined bundle for that export to lift the way a `to_html` page has one. This
 * serves the last `pixi run build` output instead, which is the only single-file
 * form of this project that exists while developing. Stale until rebuilt, which
 * the button says.
 *
 * Dev server only, and paired with `DEV_BUNDLE_URL` in `ts/src/shared/framejs.ts`.
 * Both go together when that export does.
 */
function devBundle(): Plugin {
  const bundle = resolve(import.meta.dirname, "python/alchemy_viz/_assets/alchemy-viz.js");
  return {
    name: "alchemy-dev-bundle",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/alchemy-dev-bundle.js", (_req, res) => {
        if (!existsSync(bundle)) {
          res.statusCode = 404;
          res.end("no bundle built yet - run `pixi run build`");
          return;
        }
        res.setHeader("Content-Type", "text/javascript");
        res.end(readFileSync(bundle));
      });
    },
  };
}

/**
 * The pages, listed above Vite's own URLs when the server starts.
 *
 * Vite prints the root URL and nothing else, which is the dropzone - the two
 * galleries are the pages actually wanted most mornings, and neither is
 * guessable. `printUrls` is the one hook that runs after the port is known, so
 * the list goes through it.
 */
const ROUTES: [string, string][] = [
  ["/gallery.html", "one example per view, the one worth looking at"],
  ["/gallery-all.html", "every payload in examples/, sizes and duplicates"],
  ["/", "drop a payload JSON on the page"],
  ["/parity.html", "our atom mapping beside gufe's own"],
];

function devRoutes(): Plugin {
  const bold = "\u001b[1m";
  const green = "\u001b[32m";
  const grey = "\u001b[90m";
  const off = "\u001b[0m";
  return {
    name: "alchemy-dev-routes",
    apply: "serve",
    configureServer(server) {
      const printUrls = server.printUrls.bind(server);
      server.printUrls = () => {
        const base = server.resolvedUrls?.local[0]?.replace(/\/$/, "") ?? "";
        const urls = ROUTES.map(([route]) => `${base}${route}`);
        const width = Math.max(...urls.map((url) => url.length));
        server.config.logger.info("");
        ROUTES.forEach(([, what], i) => {
          server.config.logger.info(
            `  ${bold}${green}${urls[i].padEnd(width)}${off}  ${grey}${what}${off}`,
          );
        });
        server.config.logger.info("");
        printUrls();
      };
    },
  };
}

/**
 * The dev app. Four pages, all served from `ts/`:
 *
 *   gallery.html      one example per view, the one worth looking at
 *   gallery-all.html  every payload in `examples/`, sizes and duplicates included
 *   index.html        drop a payload JSON anywhere on the page and it renders
 *   parity.html       our atom mapping beside gufe's own drawing of the same one
 *
 * `examples/` is exposed as an extra fs root so the gallery can fetch the same
 * fixture files pytest and vitest use.
 */
export default defineConfig({
  root: resolve(import.meta.dirname, "ts"),
  publicDir: false,
  plugins: [devBundle(), devRoutes()],
  server: {
    fs: { allow: [resolve(import.meta.dirname)] },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, "ts/index.html"),
        gallery: resolve(import.meta.dirname, "ts/gallery.html"),
        galleryAll: resolve(import.meta.dirname, "ts/gallery-all.html"),
        parity: resolve(import.meta.dirname, "ts/parity.html"),
      },
    },
  },
  test: {
    root: resolve(import.meta.dirname),
    environment: "jsdom",
    include: ["ts/tests/**/*.test.ts"],
    // Views persist their settings, so each test starts from a clean store.
    setupFiles: [resolve(import.meta.dirname, "ts/tests/setup.ts")],
    globals: true,
  },
});
