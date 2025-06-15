import type { TypeChecker, TypeTracer } from "./utils.ts";
import { getSimpleExpressionType } from "./utils.ts";
import * as module from "module";
import type * as typescript from "typescript";
import type { TypeName } from "./types.ts";
import type { TSESTree } from "@typescript-eslint/types";
import type { SourceCode } from "eslint";

let ts: typeof typescript;
try {
  const require = module.createRequire(import.meta.url);
  ts = require("typescript");
} catch {
  // ignore
}

/**
 * Build type tracer.
 * @returns Returns a type tracer.
 */
export function buildTypeTracerForTS(
  sourceCode: SourceCode,
): TypeTracer | null {
  const trace = buildTypeTracer<boolean>(sourceCode);
  if (!trace) return null;

  return function (node) {
    const type = getSimpleExpressionType(node);
    if (type) {
      return [type];
    }
    const result: TypeName[] = [];
    trace(node, {
      visitTypeName(typeName) {
        result.push(typeName as TypeName);
        return true;
      },
      visitUnknown() {
        return false;
      },
      visitSymbol(symbol, checker) {
        const name = checker.getFullyQualifiedName(symbol);
        if (!name) return false;
        if (name.startsWith("Readonly")) {
          result.push(name.slice(8) as TypeName);
        } else if (name === "CallableFunction") result.push("Function");
        else if (name === "IteratorObject") result.push("Iterator");
        else result.push(name as TypeName);
        return false;
      },
    });
    return result;
  };
}
/**
 * Build object type checker for TypeScript.
 * @param context The rule context.
 * @param aggressiveResult The value to return if the type cannot be determined.
 * @returns Returns an object type checker. Returns null if TypeScript is not available.
 */
export function buildTypeCheckerForTS(
  sourceCode: SourceCode,
  aggressiveResult: false | "aggressive" = false,
): TypeChecker | null {
  const trace = buildTypeTracer<boolean | "aggressive">(sourceCode);
  if (!trace) return null;

  return function (node, className, memberAccessNode) {
    const type = getSimpleExpressionType(node);
    if (type) {
      return type === className;
    }
    return trace(
      node,
      {
        visitTypeName(typeName) {
          return typeName === className;
        },
        visitUnknown() {
          return aggressiveResult;
        },
        visitSymbol(symbol, checker) {
          if (!className.includes(".")) {
            const escapedName = symbol.escapedName;
            return (
              escapedName === className ||
              // ReadonlyArray, ReadonlyMap, ReadonlySet
              escapedName === `Readonly${className}` ||
              // CallableFunction
              (className === "Function" &&
                escapedName === "CallableFunction") ||
              // IteratorObject
              (className === "Iterator" && escapedName === "IteratorObject")
            );
          }
          return checker.getFullyQualifiedName(symbol) === className;
        },
      },
      memberAccessNode,
    );
  };
}

interface Context<R> {
  visitSymbol(
    symbol: typescript.Symbol,
    checker: typescript.TypeChecker,
  ): R | false;
  visitUnknown(): R;
  visitTypeName(typeName: string): R;
}

type Trace<R> = (
  node: TSESTree.Expression,
  ctx: Context<R>,
  memberAccessNode?: TSESTree.MemberExpression | TSESTree.Property,
) => R | false;

/**
 *
 */
function buildTypeTracer<R>(sourceCode: SourceCode): Trace<R> | null {
  const tsNodeMap: ReadonlyMap<unknown, typescript.Node> =
    sourceCode.parserServices.esTreeNodeToTSNodeMap;
  const checker: typescript.TypeChecker =
    sourceCode.parserServices.program &&
    sourceCode.parserServices.program.getTypeChecker();

  const isTS = Boolean(ts && tsNodeMap && checker);
  if (!isTS) {
    return null;
  }
  const hasFullType =
    sourceCode.parserServices.hasFullTypeInformation !== false;

  return (node, ctx, memberAccessNode) => {
    return (
      (memberAccessNode && checkByPropertyDeclaration(memberAccessNode, ctx)) ||
      checkByObjectExpressionType(node, ctx)
    );
  };

  /**
   * Check if the type of the given node by the declaration of `node.property`.
   * @param memberAccessNode The MemberExpression or Property node.
   * @param ctx The trace context.
   * @returns a truthy value, if the process is complete.
   */
  function checkByPropertyDeclaration(
    memberAccessNode: TSESTree.MemberExpression | TSESTree.Property,
    ctx: Context<R>,
  ): R | false {
    const tsNode = tsNodeMap.get(
      memberAccessNode.type === "MemberExpression"
        ? memberAccessNode.property
        : memberAccessNode,
    );
    const symbol = tsNode && checker.getSymbolAtLocation(tsNode);
    const declarations = symbol && symbol.declarations;

    if (declarations) {
      for (const declaration of declarations) {
        if (declaration.parent.kind === ts.SyntaxKind.SourceFile) {
          continue;
        }
        const type = checker.getTypeAtLocation(declaration.parent);
        const r = type && visitType(type, ctx);
        if (r) {
          return r;
        }
      }
    }

    return false;
  }

  /**
   * Check if the type of the given node by the type of `node.object`.
   * @param node The Expression node.
   * @param ctx The trace context.
   * @returns a truthy value, if the process is complete.
   */
  function checkByObjectExpressionType(
    node: TSESTree.Expression,
    ctx: Context<R>,
  ): R | false {
    const tsNode = tsNodeMap.get(node)!;
    const type = checker.getTypeAtLocation(tsNode);
    return visitType(type, ctx);
  }

  /**
   * Visit the type.
   * @param type The type to check.
   * @param ctx The trace context.
   * @returns a truthy value, if the process is complete.
   */
  function visitType(type: typescript.Type, ctx: Context<R>): R | false {
    // console.log(
    //     "typeEquals(%o, %o)",
    //     {
    //         name: isClassOrInterface(type)
    //             ? type.symbol.escapedName
    //             : checker.typeToString(type),
    //         flags: Object.entries(ts.TypeFlags)
    //             .filter(
    //                 ([_id, flag]) =>
    //                     typeof flag === "number" &&
    //                     (type.flags & flag) === flag,
    //             )
    //             .map(([id]) => id)
    //             .join("|"),
    //         objectFlags:
    //             type.objectFlags == null
    //                 ? undefined
    //                 : Object.entries(ts.ObjectFlags)
    //                       .filter(
    //                           ([_id, flag]) =>
    //                               typeof flag === "number" &&
    //                               (type.objectFlags & flag) === flag,
    //                       )
    //                       .map(([id]) => id)
    //                       .join("|"),
    //         "symbol.flags": !type.symbol
    //             ? undefined
    //             : Object.entries(ts.SymbolFlags)
    //                   .filter(
    //                       ([_id, flag]) =>
    //                           typeof flag === "number" &&
    //                           (type.symbol.flags & flag) === flag,
    //                   )
    //                   .map(([id]) => id)
    //                   .join("|"),
    //     },
    //     className,
    // )
    if (isFunction(type)) {
      return ctx.visitTypeName("Function");
    }
    if (isAny(type) || isUnknown(type)) {
      return ctx.visitUnknown();
    }
    if (isAnonymousObject(type)) {
      // In non full-type mode, array types (e.g. `any[]`) become anonymous object type.
      return hasFullType ? false : ctx.visitUnknown();
    }

    if (isStringLike(type)) {
      return ctx.visitTypeName("String");
    }
    if (isNumberLike(type)) {
      return ctx.visitTypeName("Number");
    }
    if (isBooleanLike(type)) {
      return ctx.visitTypeName("Boolean");
    }
    if (isBigIntLike(type)) {
      return ctx.visitTypeName("BigInt");
    }
    if (isSymbolLike(type)) {
      return ctx.visitTypeName("Symbol");
    }
    if (isArrayLikeObject(type)) {
      return ctx.visitTypeName("Array");
    }

    if (isReferenceObject(type) && type.target !== type) {
      return visitType(type.target, ctx);
    }
    if (isTypeParameter(type)) {
      const constraintType = getConstraintType(type);
      if (constraintType) {
        return visitType(constraintType, ctx);
      }
      return hasFullType ? false : ctx.visitUnknown();
    }
    if (isUnionOrIntersection(type)) {
      for (const t of type.types) {
        const r = visitType(t, ctx);
        if (r) {
          return r;
        }
      }
      return false;
    }

    if (isClassOrInterface(type)) {
      return typeSymbolEscapedNameEquals(type, ctx);
    }
    return ctx.visitTypeName(checker.typeToString(type));
  }

  /**
   * Check if the symbol.escapedName of the given type is expected or not.
   * @param type The type to check.
   * @param ctx The trace context.
   * @returns a truthy value, if the process is complete.
   */
  function typeSymbolEscapedNameEquals(
    type: typescript.InterfaceType,
    ctx: Context<R>,
  ): R | false {
    const symbol = type.symbol;
    return ctx.visitSymbol(symbol, checker);
  }

  /**
   * Get the constraint type of a given type parameter type if exists.
   *
   * `type.getConstraint()` method doesn't return the constraint type of the
   * type parameter for some reason. So this gets the constraint type via AST.
   *
   * @param type The type parameter type to get.
   * @returns The constraint type.
   */
  function getConstraintType(type: typescript.TypeParameter) {
    const declaration = type.symbol?.declarations?.[0];
    if (
      declaration &&
      ts.isTypeParameterDeclaration(declaration) &&
      declaration.constraint != null
    ) {
      return checker.getTypeFromTypeNode(declaration.constraint);
    }
    return undefined;
  }
}

/**
 * Check if a given type is an anonymous object type or not.
 * @param type The type to check.
 * @returns `true` if the type is an anonymous object type.
 */
function isAnonymousObject(type: typescript.Type) {
  return isObject(type) && (type.objectFlags & ts.ObjectFlags.Anonymous) !== 0;
}

/**
 * Check if a given type is `any` or not.
 * @param type The type to check.
 * @returns `true` if the type is `any`.
 */
function isAny(type: typescript.Type) {
  return (type.flags & ts.TypeFlags.Any) !== 0;
}

/**
 * Check if a given type is an array-like type or not.
 * @param type The type to check.
 * @returns `true` if the type is an array-like type.
 */
function isArrayLikeObject(type: typescript.Type) {
  return (
    isObject(type) &&
    (type.objectFlags &
      (ts.ObjectFlags.ArrayLiteral |
        ts.ObjectFlags.EvolvingArray |
        ts.ObjectFlags.Tuple)) !==
      0
  );
}

/**
 * Check if a given type is an interface type or not.
 * @param type The type to check.
 * @returns `true` if the type is an interface type.
 */
function isClassOrInterface(
  type: typescript.Type,
): type is typescript.InterfaceType {
  return (
    isObject(type) && (type.objectFlags & ts.ObjectFlags.ClassOrInterface) !== 0
  );
}

/**
 * Check if a given type is an object type or not.
 * @param type The type to check.
 * @returns `true` if the type is an object type.
 */
function isObject(type: typescript.Type): type is typescript.ObjectType {
  return (type.flags & ts.TypeFlags.Object) !== 0;
}

/**
 * Check if a given type is a reference type or not.
 * @param type The type to check.
 * @returns `true` if the type is a reference type.
 */
function isReferenceObject(
  type: typescript.Type,
): type is typescript.TypeReference {
  return isObject(type) && (type.objectFlags & ts.ObjectFlags.Reference) !== 0;
}

/**
 * Check if a given type is a string-like type or not.
 * @param type The type to check.
 * @returns `true` if the type is a string-like type.
 */
function isStringLike(type: typescript.Type) {
  return (type.flags & ts.TypeFlags.StringLike) !== 0;
}

/**
 * Check if a given type is a number-like type or not.
 * @param type The type to check.
 * @returns `true` if the type is a number-like type.
 */
function isNumberLike(type: typescript.Type) {
  return (type.flags & ts.TypeFlags.NumberLike) !== 0;
}

/**
 * Check if a given type is a boolean-like type or not.
 * @param type The type to check.
 * @returns `true` if the type is a boolean-like type.
 */
function isBooleanLike(type: typescript.Type) {
  return (type.flags & ts.TypeFlags.BooleanLike) !== 0;
}

/**
 * Check if a given type is a bigint-like type or not.
 * @param type The type to check.
 * @returns `true` if the type is a bigint-like type.
 */
function isBigIntLike(type: typescript.Type) {
  return (type.flags & ts.TypeFlags.BigIntLike) !== 0;
}

/**
 * Check if a given type is a symbol-like type or not.
 * @param type The type to check.
 * @returns `true` if the type is a symbol-like type.
 */
function isSymbolLike(type: typescript.Type) {
  return (type.flags & ts.TypeFlags.ESSymbolLike) !== 0;
}

/**
 * Check if a given type is a type parameter type or not.
 * @param type The type to check.
 * @returns `true` if the type is a type parameter type.
 */
function isTypeParameter(type: typescript.Type) {
  return (type.flags & ts.TypeFlags.TypeParameter) !== 0;
}

/**
 * Check if a given type is a union-or-intersection type or not.
 * @param type The type to check.
 * @returns `true` if the type is a union-or-intersection type.
 */
function isUnionOrIntersection(
  type: typescript.Type,
): type is typescript.UnionOrIntersectionType {
  return (type.flags & ts.TypeFlags.UnionOrIntersection) !== 0;
}

/**
 * Check if a given type is `unknown` or not.
 * @param type The type to check.
 * @returns `true` if the type is `unknown`.
 */
function isUnknown(type: typescript.Type) {
  return (type.flags & ts.TypeFlags.Unknown) !== 0;
}

/**
 * Check if a given type is `function` or not.
 * @param type The type to check.
 * @returns `true` if the type is `function`.
 */
function isFunction(type: typescript.Type) {
  if (
    type.symbol &&
    (type.symbol.flags & (ts.SymbolFlags.Function | ts.SymbolFlags.Method)) !==
      0
  ) {
    return true;
  }

  const signatures = type.getCallSignatures();
  return signatures.length > 0;
}
