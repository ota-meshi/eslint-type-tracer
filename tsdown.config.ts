import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

const config: UserConfig = defineConfig([
  {
    clean: true,
    dts: true,
    outDir: "lib",
    entry: { index: "src/index.ts" },
    format: ["esm", "cjs"],
    treeshake: true,
  },
]);
export default config;
