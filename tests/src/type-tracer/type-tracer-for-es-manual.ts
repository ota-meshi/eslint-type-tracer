import { deepStrictEqual } from "assert";
import type { TypeName } from "../../../src/type-tracer/types.ts";
import type { Rule } from "eslint";
import { Linter } from "eslint";
import type { TSESTree } from "@typescript-eslint/types";
import { resolvedBuildTypeTracer } from "./resolved-build-type-tracer.ts";

describe("type-tracer-for-es", () => {
  describe("buildTypeTracerForES", () => {
    for (const { code, result, only } of [
      ...[
        "==",
        "!=",
        "===",
        "!==",
        "<",
        "<=",
        ">",
        ">=",
        "in",
        "instanceof",
      ].map((op) => ({
        code: `
                target(
                    foo ${op} bar,
                );
                `,
        result: ["Boolean"],
      })),
      ...["-", "*", "/", "%", "^", "**", "&", "|"].map((op) => ({
        code: `
                target(
                    foo ${op} bar,
                    42 ${op} bar,
                    foo ${op} 42,
                    42n ${op} bar,
                    foo ${op} 42n,
                );
                `,
        result: [null, "Number", "Number", "BigInt", "BigInt"],
      })),
      ...["-", "*", "/", "%", "^", "**", "&", "|"].map((op) => ({
        code: `
                target(
                    foo ${op}= bar,
                    foo ${op}= 42,
                    foo ${op}= 42n,
                );
                `,
        result: [null, "Number", "BigInt"],
      })),
      ...["&&", "||", "??"].map((op) => ({
        code: `
                    const a = 1
                    const b = 1
                    const c = 1n
                    const d = 1n
                    target(
                        a ${op} b,
                        c ${op} d,
                        foo ${op} bar,
                        42 ${op} bar,
                        foo ${op} 42,
                        42n ${op} bar,
                        foo ${op} 42n,
                    );
                    `,
        result: ["Number", "BigInt", null, null, null, null, null],
      })),
      ...["&&", "||", "??"].map((op) => ({
        code: `
                const a = 1
                const b = 1
                const c = 1n
                const d = 1n
                target(
                    a ${op}= b,
                    c ${op}= d,
                    foo ${op}= bar,
                    foo ${op}= 42,
                    foo ${op}= 42n,
                );
                `,
        result: ["Number", "BigInt", null, null, null],
      })),
      ...["<<", ">>", ">>>"].map((op) => ({
        code: `
                target(
                    foo ${op} bar,
                );
                `,
        result: ["Number"],
      })),
      ...["<<", ">>", ">>>"].map((op) => ({
        code: `
                target(
                    foo ${op}= bar,
                );
                `,
        result: ["Number"],
      })),
      ...["-", "~"].map((op) => ({
        code: `
                target(
                    ${op}foo,
                    ${op}42,
                    ${op}42n,
                );
                `,
        result: [null, "Number", "BigInt"],
      })),
      ...[
        "String",
        "Number",
        "BigInt",
        "Boolean",
        "Symbol",
        "Object",
        "Array",
        "Function",
        "RegExp",
        "Date",
      ].map((t) => ({
        code: `
                target(
                    ${t}(),
                    ${t}\`\`,
                );
                `,
        result: [t, t],
      })),
      ...[
        "String",
        "Number",
        "BigInt",
        "Boolean",
        "Symbol",
        "Object",
        "Array",
        "Function",
        "RegExp",
        "Date",
        "Promise",
        "Intl.Collator",
        "Intl.DateTimeFormat",
        "Intl.ListFormat",
        "Intl.NumberFormat",
        "Intl.PluralRules",
        "Intl.RelativeTimeFormat",
        "Intl.Segmenter",
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Uint16Array",
        "Int32Array",
        "Uint32Array",
        "Float16Array",
        "Float32Array",
        "Float64Array",
        "BigInt64Array",
        "BigUint64Array",
      ].map((t) => ({
        code: `
                target(
                    new ${t}(),
                );
                `,
        result: [t],
      })),
    ] as { code: string; result: (TypeName | null)[]; only?: boolean }[]) {
      (only ? it.only : it)(code, async () => {
        deepStrictEqual(await getResultOfBuildTypeTracerForES(code), result);
      });
    }
  });
});

async function getResultOfBuildTypeTracerForES(code: string) {
  const buildTypeTracer = await resolvedBuildTypeTracer();

  const linter = new Linter({ configType: "flat" });

  const result: (TypeName | null)[] = [];
  const linterResult = linter.verify(code, {
    plugins: {
      test: {
        rules: {
          "test-rule": {
            create(context: Rule.RuleContext) {
              const getType = buildTypeTracer(context.sourceCode);
              return {
                "CallExpression[callee.name = target]"(
                  node: TSESTree.CallExpression,
                ) {
                  result.push(
                    ...node.arguments.map(
                      (a) => getType(a as TSESTree.Expression)?.[0] || null,
                    ),
                  );
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
      globals: {
        Float16Array: "readonly",
        Intl: "readonly",
      },
    },
    rules: { "test/test-rule": "warn" },
  });
  deepStrictEqual(linterResult, []);
  return result;
}
