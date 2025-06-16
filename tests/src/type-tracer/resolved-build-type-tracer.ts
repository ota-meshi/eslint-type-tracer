import type { TSESTree } from "@typescript-eslint/types";
import type { TypeName } from "../../../src/index.ts";
import type { SourceCode } from "eslint";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const libIndexPath = path.resolve(
  fileURLToPath(import.meta.url),
  "../../../../lib/index.js",
);

let buildTypeTracer:
  | ((sourceCode: SourceCode) => (node: TSESTree.Node) => TypeName[])
  | undefined;

export async function resolvedBuildTypeTracer(): Promise<
  (sourceCode: SourceCode) => (node: TSESTree.Node) => TypeName[]
> {
  if (buildTypeTracer) return buildTypeTracer;
  // eslint-disable-next-line no-process-env -- ignore
  if (process.env.CI) {
    if (fs.existsSync(libIndexPath)) {
      console.log("Resolving buildTypeTracer from lib/index.js");
      buildTypeTracer = (await import(libIndexPath)).buildTypeTracer;
    }
  }
  if (!buildTypeTracer) {
    buildTypeTracer = (await import("../../../src/index.ts"))
      .buildTypeTracer as any;
  }
  return buildTypeTracer!;
}
