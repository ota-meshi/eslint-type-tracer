import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

export default defineConfig([
  {
    clean: true,
    dts: true,
    outDir: "lib",
    entry: { index: "src/index.ts" },
    format: ["esm", "cjs"],
    treeshake: true,
  },
]) as UserConfig;
