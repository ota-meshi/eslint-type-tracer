import type { TypeChecker } from "./utils";
import type { SourceCode } from "eslint";
import { buildTypeCheckerForTS } from "./type-checker-for-ts";
import { buildTypeTracerForES } from "./type-tracer-for-es";

export type TypeCheckerOptions = {
  aggressiveResult?: false | "aggressive";
};

/**
 * Build object type checker.
 * @param context The rule context.
 * @param aggressiveResult The value to return if the type cannot be determined.
 * @returns Returns an object type checker.
 */
export function buildTypeChecker(
  sourceCode: SourceCode,
  options?: TypeCheckerOptions,
): TypeChecker {
  const aggressiveResult = options?.aggressiveResult ?? false;
  return (
    buildTypeCheckerForTS(sourceCode, aggressiveResult) ||
    buildTypeCheckerForES(sourceCode, aggressiveResult)
  );
}

/**
 * Build object type checker for TypeScript.
 */
function buildTypeCheckerForES(
  sourceCode: SourceCode,
  aggressiveResult: false | "aggressive",
): TypeChecker {
  const tracer = buildTypeTracerForES(sourceCode);
  return (node, className): boolean | "aggressive" => {
    const typeName = tracer(node);
    if (typeName == null) {
      return aggressiveResult;
    }
    return typeName === className;
  };
}
