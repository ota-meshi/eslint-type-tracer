import type { TypeChecker, TypeTracer } from "./utils.ts";
import type { SourceCode } from "eslint";
import {
  buildTypeCheckerForTS,
  buildTypeTracerForTS,
} from "./type-tracer-for-ts.ts";
import {
  buildTypeCheckerForES,
  buildTypeTracerForES,
} from "./type-tracer-for-es.ts";

export type TypeCheckerOptions = {
  aggressive?: boolean;
};

/**
 * Build type tracer.
 * @param context The rule context.
 * @returns Returns a type tracer.
 */
export function buildTypeTracer(sourceCode: SourceCode): TypeTracer {
  return buildTypeTracerForTS(sourceCode) || buildTypeTracerForES(sourceCode);
}

/**
 * Build type checker.
 * @param context The rule context.
 * @param aggressiveResult The value to return if the type cannot be determined.
 * @returns Returns a type checker.
 */
export function buildTypeChecker(
  sourceCode: SourceCode,
  options?: TypeCheckerOptions,
): TypeChecker {
  const aggressiveResult = options?.aggressive ? "aggressive" : false;
  return (
    buildTypeCheckerForTS(sourceCode, aggressiveResult) ||
    buildTypeCheckerForES(sourceCode, aggressiveResult)
  );
}
