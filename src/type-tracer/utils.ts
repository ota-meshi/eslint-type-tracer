import type { TSESTree } from "@typescript-eslint/types";
import type { TypeName } from "./types";

export type TypeTracer = (node: TSESTree.Expression) => TypeName[];

export type TypeChecker = (
  node: TSESTree.Expression,
  className: TypeName,
  memberAccessNode?: TSESTree.MemberExpression | TSESTree.Property,
) => boolean | "aggressive";

/**
 * Get the type of the given expression node.
 * @param node The expression node.
 * @returns `true` if should disallow it.
 */
export function getSimpleExpressionType(
  node: TSESTree.Expression | TSESTree.Super,
): TypeName | null {
  // If it's obvious, shortcut.
  if (node.type === "ArrayExpression") {
    return "Array";
  }
  if (node.type === "Literal") {
    if ("regex" in node && node.regex) {
      return "RegExp";
    }
    if ("bigint" in node && node.bigint) {
      return "BigInt";
    }
    if (node.value === null) {
      return "null";
    }
    if (typeof node.value === "string") {
      return "String";
    }
    if (typeof node.value === "number") {
      return "Number";
    }
    if (typeof node.value === "boolean") {
      return "Boolean";
    }
    if (typeof node.value === "bigint") {
      return "BigInt";
    }
    if (node.value instanceof RegExp) {
      return "RegExp";
    }
    return null;
  }
  if (node.type === "TemplateLiteral") {
    return "String";
  }
  if (node.type === "UpdateExpression") {
    return "Number";
  }

  return null;
}
