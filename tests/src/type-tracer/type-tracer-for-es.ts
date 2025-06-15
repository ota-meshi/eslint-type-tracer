import { deepStrictEqual } from "assert";
import { expect } from "@ota-meshi/test-snapshot";
import type { TypeName } from "../../../src/type-tracer/types.ts";
import type { Rule } from "eslint";
import { Linter } from "eslint";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { resolvedBuildTypeTracer } from "./resolved-build-type-tracer.ts";

const FIXTURES_ROOT = path.resolve(
  fileURLToPath(import.meta.url),
  "../../../fixtures/es",
);

function* extractFixtures(dir = FIXTURES_ROOT): Generator<{
  name: string;
  code: string;
  filename: string;
  only?: boolean;
}> {
  for (const dirent of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, dirent.name);
    if (dirent.isFile()) {
      if (dirent.name.endsWith(".js")) {
        yield {
          name: path.relative(FIXTURES_ROOT, filePath),
          code: fs.readFileSync(filePath, "utf8"),
          filename: filePath,
        };
      }
    } else if (dirent.isDirectory()) {
      yield* extractFixtures(filePath);
    }
  }
}

describe("type-tracer-for-es", () => {
  describe("buildTypeTracerForES", () => {
    for (const { name, code, filename, only } of extractFixtures()) {
      describe(name, () => {
        (only ? it.only : it)(code, async () => {
          expect(
            await getResultOfBuildTypeTracerForTS(code, filename),
          ).toMatchSnapshot();
        });
      });
    }
  });
});

async function getResultOfBuildTypeTracerForTS(code: string, filename: string) {
  const buildTypeTracer = await resolvedBuildTypeTracer();

  const linter = new Linter({ configType: "flat" });

  const result: {
    expr: string;
    types: (TypeName | null)[];
  }[] = [];
  const linterResult = linter.verify(
    code,
    {
      files: ["**/*.*"],
      plugins: {
        test: {
          rules: {
            "test-rule": {
              create(context: Rule.RuleContext) {
                const getType = buildTypeTracer(context.sourceCode);
                return {
                  "CallExpression[callee.name = target]"(node) {
                    result.push({
                      expr: context.sourceCode.getText(node),
                      types: node.arguments.map(getType),
                    });
                  },
                };
              },
            },
          },
        },
      },
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: { "test/test-rule": "warn" },
    },
    {
      filename,
    },
  );
  deepStrictEqual(linterResult, []);
  return result;
}
