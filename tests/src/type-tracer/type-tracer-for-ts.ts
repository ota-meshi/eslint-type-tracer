import { deepStrictEqual } from "assert";
import { buildTypeTracerForTS } from "../../../src/type-tracer/type-tracer-for-ts";
import { expect } from "@ota-meshi/test-snapshot";
import type { TypeName } from "../../../src/type-tracer/types";
import type { Rule } from "eslint";
import { Linter } from "eslint";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import * as tsParser from "@typescript-eslint/parser";

const FIXTURES_ROOT = path.resolve(
  fileURLToPath(import.meta.url),
  "../../../fixtures/ts",
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
      if (dirent.name.endsWith(".ts")) {
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

describe("type-tracer-for-ts", () => {
  describe("buildTypeTracerForTS", () => {
    for (const { name, code, filename, only } of extractFixtures()) {
      describe(name, () => {
        (only ? it.only : it)(code, () => {
          expect(
            getResultOfBuildTypeTracerForTS(code, filename),
          ).toMatchSnapshot();
        });
      });
    }
  });
});

function getResultOfBuildTypeTracerForTS(code: string, filename: string) {
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
                const getType = buildTypeTracerForTS(context.sourceCode);
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
        parser: tsParser,
        parserOptions: {
          tsconfigRootDir: FIXTURES_ROOT,
          project: "tsconfig.test.json",
        },
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
