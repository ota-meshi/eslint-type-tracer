import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

const config: UserConfig[] = defineConfig([
  {
    clean: true,
    dts: true,
    outDir: "lib",
    entry: { index: "src/index.ts" },
    format: ["esm", "cjs"],
    treeshake: true,
    external: ["@typescript-eslint/types"],
  },
]);
export default config;
