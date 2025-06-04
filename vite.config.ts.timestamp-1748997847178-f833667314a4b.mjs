// vite.config.ts
import { defineConfig } from "file:///C:/Users/cicer/projects/public/portfolio/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.11/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///C:/Users/cicer/projects/public/portfolio/node_modules/.pnpm/@builder.io+qwik@1.14.1_vite@5.3.5_@types+node@20.14.11_/node_modules/@builder.io/qwik/dist/optimizer.mjs";
import { qwikCity } from "file:///C:/Users/cicer/projects/public/portfolio/node_modules/.pnpm/@builder.io+qwik-city@1.14._a68177619df33debe496ff02b0401618/node_modules/@builder.io/qwik-city/lib/vite/index.mjs";
import tsconfigPaths from "file:///C:/Users/cicer/projects/public/portfolio/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_t_26d4183010c681c57cdaf435cc30d6a3/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "my-qwik-empty-starter",
  description: "Blank project with routing included",
  engines: {
    node: "^18.17.0 || ^20.3.0 || >=21.0.0"
  },
  "engines-annotation": "Mostly required by sharp which needs a Node-API v9 compatible runtime",
  private: true,
  type: "module",
  scripts: {
    build: "qwik build",
    "build.client": "vite build",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.server": "vite build -c adapters/vercel-edge/vite.config.ts",
    "build.types": "tsc --incremental --noEmit",
    deploy: "vercel deploy",
    dev: "vite --mode ssr",
    "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
    fmt: "prettier --write .",
    "fmt.check": "prettier --check .",
    lint: 'eslint "src/**/*.ts*"',
    preview: "qwik build preview && vite preview --open",
    start: "vite --open --mode ssr --host",
    qwik: "qwik"
  },
  devDependencies: {
    "@builder.io/qwik": "^1.13.0",
    "@builder.io/qwik-city": "^1.13.0",
    "@types/eslint": "8.56.10",
    "@types/gsap": "^3.0.0",
    "@types/node": "20.14.11",
    "@typescript-eslint/eslint-plugin": "7.16.1",
    "@typescript-eslint/parser": "7.16.1",
    "@vanilla-extract/css": "^1.12.0",
    eslint: "8.57.0",
    "eslint-plugin-qwik": "^1.13.0",
    prettier: "3.3.3",
    "styled-vanilla-extract": "^0.5.4",
    typescript: "5.4.5",
    undici: "*",
    vercel: "^29.1.1",
    vite: "5.3.5",
    "vite-tsconfig-paths": "^4.2.1"
  },
  dependencies: {
    "@vanilla-extract/vite-plugin": "^5.0.1",
    "cm-glitch": "^1.0.2",
    "cm-typing-effect": "^1.0.8",
    gsap: "^3.13.0"
  }
};

// vite.config.ts
import { vanillaExtractPlugin } from "file:///C:/Users/cicer/projects/public/portfolio/node_modules/.pnpm/@vanilla-extract+vite-plugi_f5af0cec3e38da1a45ca9def961dedb9/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
var { dependencies = {}, devDependencies = {} } = package_default;
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
var vite_config_default = defineConfig(({}) => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), vanillaExtractPlugin()],
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: []
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev dependencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
function errorOnDuplicatesPkgDeps(devDependencies2, dependencies2) {
  let msg = "";
  const duplicateDeps = Object.keys(devDependencies2).filter((dep) => dependencies2[dep]);
  const qwikPkg = Object.keys(dependencies2).filter((value) => /qwik/i.test(value));
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcY2ljZXJcXFxccHJvamVjdHNcXFxccHVibGljXFxcXHBvcnRmb2xpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcY2ljZXJcXFxccHJvamVjdHNcXFxccHVibGljXFxcXHBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvY2ljZXIvcHJvamVjdHMvcHVibGljL3BvcnRmb2xpby92aXRlLmNvbmZpZy50c1wiOy8qKlxuICogVGhpcyBpcyB0aGUgYmFzZSBjb25maWcgZm9yIHZpdGUuXG4gKiBXaGVuIGJ1aWxkaW5nLCB0aGUgYWRhcHRlciBjb25maWcgaXMgdXNlZCB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYW5kIGV4dGVuZHMgaXQuXG4gKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZywgdHlwZSBVc2VyQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IHsgcXdpa1ZpdGUgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcXdpay9vcHRpbWl6ZXJcIlxuaW1wb3J0IHsgcXdpa0NpdHkgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcXdpay1jaXR5L3ZpdGVcIlxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIlxuaW1wb3J0IHBrZyBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIlxuaW1wb3J0IHsgdmFuaWxsYUV4dHJhY3RQbHVnaW4gfSBmcm9tIFwiQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpblwiXG50eXBlIFBrZ0RlcCA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbmNvbnN0IHsgZGVwZW5kZW5jaWVzID0ge30sIGRldkRlcGVuZGVuY2llcyA9IHt9IH0gPSBwa2cgYXMgYW55IGFzIHtcbiAgICBkZXBlbmRlbmNpZXM6IFBrZ0RlcFxuICAgIGRldkRlcGVuZGVuY2llczogUGtnRGVwXG4gICAgW2tleTogc3RyaW5nXTogdW5rbm93blxufVxuZXJyb3JPbkR1cGxpY2F0ZXNQa2dEZXBzKGRldkRlcGVuZGVuY2llcywgZGVwZW5kZW5jaWVzKVxuLyoqXG4gKiBOb3RlIHRoYXQgVml0ZSBub3JtYWxseSBzdGFydHMgZnJvbSBgaW5kZXguaHRtbGAgYnV0IHRoZSBxd2lrQ2l0eSBwbHVnaW4gbWFrZXMgc3RhcnQgYXQgYHNyYy9lbnRyeS5zc3IudHN4YCBpbnN0ZWFkLlxuICovXG5cbi8vIFwiY29tbWFuZFwiIGFuZCBcIm1vZGVcIiBjb21lIGluIHRoZSBvYmplY3QgYWJvdmVcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyB9KTogVXNlckNvbmZpZyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGx1Z2luczogW3F3aWtDaXR5KCksIHF3aWtWaXRlKCksIHRzY29uZmlnUGF0aHMoKSwgdmFuaWxsYUV4dHJhY3RQbHVnaW4oKV0sXG4gICAgICAgIC8vIFRoaXMgdGVsbHMgVml0ZSB3aGljaCBkZXBlbmRlbmNpZXMgdG8gcHJlLWJ1aWxkIGluIGRldiBtb2RlLlxuICAgICAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgICAgICAgIC8vIFB1dCBwcm9ibGVtYXRpYyBkZXBzIHRoYXQgYnJlYWsgYnVuZGxpbmcgaGVyZSwgbW9zdGx5IHRob3NlIHdpdGggYmluYXJpZXMuXG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSBbJ2JldHRlci1zcWxpdGUzJ10gaWYgeW91IHVzZSB0aGF0IGluIHNlcnZlciBmdW5jdGlvbnMuXG4gICAgICAgICAgICBleGNsdWRlOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaXMgYW4gYWR2YW5jZWQgc2V0dGluZy4gSXQgaW1wcm92ZXMgdGhlIGJ1bmRsaW5nIG9mIHlvdXIgc2VydmVyIGNvZGUuIFRvIHVzZSBpdCwgbWFrZSBzdXJlIHlvdSB1bmRlcnN0YW5kIHdoZW4geW91ciBjb25zdW1lZCBwYWNrYWdlcyBhcmUgZGVwZW5kZW5jaWVzIG9yIGRldiBkZXBlbmRlbmNpZXMuIChvdGhlcndpc2UgdGhpbmdzIHdpbGwgYnJlYWsgaW4gcHJvZHVjdGlvbilcbiAgICAgICAgICovXG4gICAgICAgIC8vIHNzcjpcbiAgICAgICAgLy8gICBjb21tYW5kID09PSBcImJ1aWxkXCIgJiYgbW9kZSA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgICAgLy8gICAgID8ge1xuICAgICAgICAvLyAgICAgICAgIC8vIEFsbCBkZXYgZGVwZW5kZW5jaWVzIHNob3VsZCBiZSBidW5kbGVkIGluIHRoZSBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgLy8gICAgICAgICBub0V4dGVybmFsOiBPYmplY3Qua2V5cyhkZXZEZXBlbmRlbmNpZXMpLFxuICAgICAgICAvLyAgICAgICAgIC8vIEFueXRoaW5nIG1hcmtlZCBhcyBhIGRlcGVuZGVuY3kgd2lsbCBub3QgYmUgYnVuZGxlZFxuICAgICAgICAvLyAgICAgICAgIC8vIFRoZXNlIHNob3VsZCBvbmx5IGJlIHByb2R1Y3Rpb24gYmluYXJ5IGRlcHMgKGluY2x1ZGluZyBkZXBzIG9mIGRlcHMpLCBDTEkgZGVwcywgYW5kIHRoZWlyIG1vZHVsZSBncmFwaFxuICAgICAgICAvLyAgICAgICAgIC8vIElmIGEgZGVwLW9mLWRlcCBuZWVkcyB0byBiZSBleHRlcm5hbCwgYWRkIGl0IGhlcmVcbiAgICAgICAgLy8gICAgICAgICAvLyBGb3IgZXhhbXBsZSwgaWYgc29tZXRoaW5nIHVzZXMgYGJjcnlwdGAgYnV0IHlvdSBkb24ndCBoYXZlIGl0IGFzIGEgZGVwLCB5b3UgY2FuIHdyaXRlXG4gICAgICAgIC8vICAgICAgICAgLy8gZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLCAnYmNyeXB0J11cbiAgICAgICAgLy8gICAgICAgICBleHRlcm5hbDogT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKSxcbiAgICAgICAgLy8gICAgICAgfVxuICAgICAgICAvLyAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIHNlcnZlcjoge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IGNhY2hlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaW4gZGV2IG1vZGVcbiAgICAgICAgICAgICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJwdWJsaWMsIG1heC1hZ2U9MFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlldzoge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC8vIERvIGNhY2hlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaW4gcHJldmlldyAobm9uLWFkYXB0ZXIgcHJvZHVjdGlvbiBidWlsZClcbiAgICAgICAgICAgICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJwdWJsaWMsIG1heC1hZ2U9NjAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbn0pXG4vLyAqKiogdXRpbHMgKioqXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGlkZW50aWZ5IGR1cGxpY2F0ZSBkZXBlbmRlbmNpZXMgYW5kIHRocm93IGFuIGVycm9yXG4gKiBAcGFyYW0ge09iamVjdH0gZGV2RGVwZW5kZW5jaWVzIC0gTGlzdCBvZiBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXBlbmRlbmNpZXMgLSBMaXN0IG9mIHByb2R1Y3Rpb24gZGVwZW5kZW5jaWVzXG4gKi9cbmZ1bmN0aW9uIGVycm9yT25EdXBsaWNhdGVzUGtnRGVwcyhkZXZEZXBlbmRlbmNpZXM6IFBrZ0RlcCwgZGVwZW5kZW5jaWVzOiBQa2dEZXApIHtcbiAgICBsZXQgbXNnID0gXCJcIlxuICAgIC8vIENyZWF0ZSBhbiBhcnJheSAnZHVwbGljYXRlRGVwcycgYnkgZmlsdGVyaW5nIGRldkRlcGVuZGVuY2llcy5cbiAgICAvLyBJZiBhIGRlcGVuZGVuY3kgYWxzbyBleGlzdHMgaW4gZGVwZW5kZW5jaWVzLCBpdCBpcyBjb25zaWRlcmVkIGEgZHVwbGljYXRlLlxuICAgIGNvbnN0IGR1cGxpY2F0ZURlcHMgPSBPYmplY3Qua2V5cyhkZXZEZXBlbmRlbmNpZXMpLmZpbHRlcigoZGVwKSA9PiBkZXBlbmRlbmNpZXNbZGVwXSlcbiAgICAvLyBpbmNsdWRlIGFueSBrbm93biBxd2lrIHBhY2thZ2VzXG4gICAgY29uc3QgcXdpa1BrZyA9IE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcykuZmlsdGVyKCh2YWx1ZSkgPT4gL3F3aWsvaS50ZXN0KHZhbHVlKSlcbiAgICAvLyBhbnkgZXJyb3JzIGZvciBtaXNzaW5nIFwicXdpay1jaXR5LXBsYW5cIlxuICAgIC8vIFtQTFVHSU5fRVJST1JdOiBJbnZhbGlkIG1vZHVsZSBcIkBxd2lrLWNpdHktcGxhblwiIGlzIG5vdCBhIHZhbGlkIHBhY2thZ2VcbiAgICBtc2cgPSBgTW92ZSBxd2lrIHBhY2thZ2VzICR7cXdpa1BrZy5qb2luKFwiLCBcIil9IHRvIGRldkRlcGVuZGVuY2llc2BcbiAgICBpZiAocXdpa1BrZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpXG4gICAgfVxuICAgIC8vIEZvcm1hdCB0aGUgZXJyb3IgbWVzc2FnZSB3aXRoIHRoZSBkdXBsaWNhdGVzIGxpc3QuXG4gICAgLy8gVGhlIGBqb2luYCBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlcHJlc2VudCB0aGUgZWxlbWVudHMgb2YgdGhlICdkdXBsaWNhdGVEZXBzJyBhcnJheSBhcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXG4gICAgbXNnID0gYFxuICAgIFdhcm5pbmc6IFRoZSBkZXBlbmRlbmN5IFwiJHtkdXBsaWNhdGVEZXBzLmpvaW4oXCIsIFwiKX1cIiBpcyBsaXN0ZWQgaW4gYm90aCBcImRldkRlcGVuZGVuY2llc1wiIGFuZCBcImRlcGVuZGVuY2llc1wiLlxuICAgIFBsZWFzZSBtb3ZlIHRoZSBkdXBsaWNhdGVkIGRlcGVuZGVuY2llcyB0byBcImRldkRlcGVuZGVuY2llc1wiIG9ubHkgYW5kIHJlbW92ZSBpdCBmcm9tIFwiZGVwZW5kZW5jaWVzXCJcbiAgYFxuICAgIC8vIFRocm93IGFuIGVycm9yIHdpdGggdGhlIGNvbnN0cnVjdGVkIG1lc3NhZ2UuXG4gICAgaWYgKGR1cGxpY2F0ZURlcHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKVxuICAgIH1cbn1cbiIsICJ7XG4gICAgXCJuYW1lXCI6IFwibXktcXdpay1lbXB0eS1zdGFydGVyXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkJsYW5rIHByb2plY3Qgd2l0aCByb3V0aW5nIGluY2x1ZGVkXCIsXG4gICAgXCJlbmdpbmVzXCI6IHtcbiAgICAgICAgXCJub2RlXCI6IFwiXjE4LjE3LjAgfHwgXjIwLjMuMCB8fCA+PTIxLjAuMFwiXG4gICAgfSxcbiAgICBcImVuZ2luZXMtYW5ub3RhdGlvblwiOiBcIk1vc3RseSByZXF1aXJlZCBieSBzaGFycCB3aGljaCBuZWVkcyBhIE5vZGUtQVBJIHY5IGNvbXBhdGlibGUgcnVudGltZVwiLFxuICAgIFwicHJpdmF0ZVwiOiB0cnVlLFxuICAgIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICAgIFwic2NyaXB0c1wiOiB7XG4gICAgICAgIFwiYnVpbGRcIjogXCJxd2lrIGJ1aWxkXCIsXG4gICAgICAgIFwiYnVpbGQuY2xpZW50XCI6IFwidml0ZSBidWlsZFwiLFxuICAgICAgICBcImJ1aWxkLnByZXZpZXdcIjogXCJ2aXRlIGJ1aWxkIC0tc3NyIHNyYy9lbnRyeS5wcmV2aWV3LnRzeFwiLFxuICAgICAgICBcImJ1aWxkLnNlcnZlclwiOiBcInZpdGUgYnVpbGQgLWMgYWRhcHRlcnMvdmVyY2VsLWVkZ2Uvdml0ZS5jb25maWcudHNcIixcbiAgICAgICAgXCJidWlsZC50eXBlc1wiOiBcInRzYyAtLWluY3JlbWVudGFsIC0tbm9FbWl0XCIsXG4gICAgICAgIFwiZGVwbG95XCI6IFwidmVyY2VsIGRlcGxveVwiLFxuICAgICAgICBcImRldlwiOiBcInZpdGUgLS1tb2RlIHNzclwiLFxuICAgICAgICBcImRldi5kZWJ1Z1wiOiBcIm5vZGUgLS1pbnNwZWN0LWJyayAuL25vZGVfbW9kdWxlcy92aXRlL2Jpbi92aXRlLmpzIC0tbW9kZSBzc3IgLS1mb3JjZVwiLFxuICAgICAgICBcImZtdFwiOiBcInByZXR0aWVyIC0td3JpdGUgLlwiLFxuICAgICAgICBcImZtdC5jaGVja1wiOiBcInByZXR0aWVyIC0tY2hlY2sgLlwiLFxuICAgICAgICBcImxpbnRcIjogXCJlc2xpbnQgXFxcInNyYy8qKi8qLnRzKlxcXCJcIixcbiAgICAgICAgXCJwcmV2aWV3XCI6IFwicXdpayBidWlsZCBwcmV2aWV3ICYmIHZpdGUgcHJldmlldyAtLW9wZW5cIixcbiAgICAgICAgXCJzdGFydFwiOiBcInZpdGUgLS1vcGVuIC0tbW9kZSBzc3IgLS1ob3N0XCIsXG4gICAgICAgIFwicXdpa1wiOiBcInF3aWtcIlxuICAgIH0sXG4gICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICBcIkBidWlsZGVyLmlvL3F3aWtcIjogXCJeMS4xMy4wXCIsXG4gICAgICAgIFwiQGJ1aWxkZXIuaW8vcXdpay1jaXR5XCI6IFwiXjEuMTMuMFwiLFxuICAgICAgICBcIkB0eXBlcy9lc2xpbnRcIjogXCI4LjU2LjEwXCIsXG4gICAgICAgIFwiQHR5cGVzL2dzYXBcIjogXCJeMy4wLjBcIixcbiAgICAgICAgXCJAdHlwZXMvbm9kZVwiOiBcIjIwLjE0LjExXCIsXG4gICAgICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCI3LjE2LjFcIixcbiAgICAgICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiNy4xNi4xXCIsXG4gICAgICAgIFwiQHZhbmlsbGEtZXh0cmFjdC9jc3NcIjogXCJeMS4xMi4wXCIsXG4gICAgICAgIFwiZXNsaW50XCI6IFwiOC41Ny4wXCIsXG4gICAgICAgIFwiZXNsaW50LXBsdWdpbi1xd2lrXCI6IFwiXjEuMTMuMFwiLFxuICAgICAgICBcInByZXR0aWVyXCI6IFwiMy4zLjNcIixcbiAgICAgICAgXCJzdHlsZWQtdmFuaWxsYS1leHRyYWN0XCI6IFwiXjAuNS40XCIsXG4gICAgICAgIFwidHlwZXNjcmlwdFwiOiBcIjUuNC41XCIsXG4gICAgICAgIFwidW5kaWNpXCI6IFwiKlwiLFxuICAgICAgICBcInZlcmNlbFwiOiBcIl4yOS4xLjFcIixcbiAgICAgICAgXCJ2aXRlXCI6IFwiNS4zLjVcIixcbiAgICAgICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI6IFwiXjQuMi4xXCJcbiAgICB9LFxuICAgIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICAgICAgXCJAdmFuaWxsYS1leHRyYWN0L3ZpdGUtcGx1Z2luXCI6IFwiXjUuMC4xXCIsXG4gICAgICAgIFwiY20tZ2xpdGNoXCI6IFwiXjEuMC4yXCIsXG4gICAgICAgIFwiY20tdHlwaW5nLWVmZmVjdFwiOiBcIl4xLjAuOFwiLFxuICAgICAgICBcImdzYXBcIjogXCJeMy4xMy4wXCJcbiAgICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBSUEsU0FBUyxvQkFBcUM7QUFDOUMsU0FBUyxnQkFBZ0I7QUFDekIsU0FBUyxnQkFBZ0I7QUFDekIsT0FBTyxtQkFBbUI7OztBQ1AxQjtBQUFBLEVBQ0ksTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLElBQ1AsTUFBUTtBQUFBLEVBQ1o7QUFBQSxFQUNBLHNCQUFzQjtBQUFBLEVBQ3RCLFNBQVc7QUFBQSxFQUNYLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULGdCQUFnQjtBQUFBLElBQ2hCLGlCQUFpQjtBQUFBLElBQ2pCLGdC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
