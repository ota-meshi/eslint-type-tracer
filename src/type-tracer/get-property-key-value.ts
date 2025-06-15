import { getStaticValue } from "@eslint-community/eslint-utils";
import type { TSESTree } from "@typescript-eslint/types";
import type { Scope } from "eslint";

/**
 * Get the property name/symbol from a MemberExpression node or a Property node.
 *
 * The difference from `@eslint-community/eslint-utils.getPropertyName()` is
 * that if key is a Symbol, this function returns a Symbol.
 * @param {Property|MemberExpression} node The node to get.
 * @param {Scope} [initialScope] The scope to start finding variable. Optional. If the node is a computed property node and this scope was given, this checks the computed property name by the `getStringIfConstant` function with the scope, and returns the value of it.
 * @returns {string|symbol|null}
 */
export function getPropertyKeyValue(
  node:
    | TSESTree.Property
    | TSESTree.MemberExpression
    | TSESTree.MethodDefinition
    | TSESTree.PropertyDefinition,
  initialScope?: Scope.Scope,
): string | symbol | null {
  switch (node.type) {
    case "MemberExpression":
      if (node.computed) {
        return getStaticKeyValue(node.property, initialScope);
      }
      if (node.property.type === "PrivateIdentifier") {
        return null;
      }
      return node.property.name;

    case "Property":
    case "MethodDefinition":
    case "PropertyDefinition":
      if (node.computed) {
        return getStaticKeyValue(node.key, initialScope);
      }
      if (node.key.type === "Literal") {
        return String(node.key.value);
      }
      if (node.key.type === "PrivateIdentifier") {
        return null;
      }
      return node.key.name;

    // no default
  }

  return null;
}

/**
 * @param {Expression|PrivateIdentifier} node
 * @param {Scope} initialScope
 */
function getStaticKeyValue(
  node: TSESTree.Expression | TSESTree.PrivateIdentifier,
  initialScope?: Scope.Scope,
) {
  const value = getStaticValue(node, initialScope);
  return (
    value &&
    (typeof value.value === "symbol" ? value.value : String(value.value))
  );
}
