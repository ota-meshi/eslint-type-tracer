# Introduction

[eslint-type-tracer](https://www.npmjs.com/package/eslint-type-tracer) is the type tracer for ESLint rules.

[![NPM license](https://img.shields.io/npm/l/eslint-type-tracer.svg)](https://www.npmjs.com/package/eslint-type-tracer)
[![NPM version](https://img.shields.io/npm/v/eslint-type-tracer.svg)](https://www.npmjs.com/package/eslint-type-tracer)
[![NPM downloads](https://img.shields.io/badge/dynamic/json.svg?label=downloads&colorB=green&suffix=/day&query=$.downloads&uri=https://api.npmjs.org//downloads/point/last-day/eslint-type-tracer&maxAge=3600)](http://www.npmtrends.com/eslint-type-tracer)
[![NPM downloads](https://img.shields.io/npm/dw/eslint-type-tracer.svg)](http://www.npmtrends.com/eslint-type-tracer)
[![NPM downloads](https://img.shields.io/npm/dm/eslint-type-tracer.svg)](http://www.npmtrends.com/eslint-type-tracer)
[![NPM downloads](https://img.shields.io/npm/dy/eslint-type-tracer.svg)](http://www.npmtrends.com/eslint-type-tracer)
[![NPM downloads](https://img.shields.io/npm/dt/eslint-type-tracer.svg)](http://www.npmtrends.com/eslint-type-tracer)
[![Build Status](https://github.com/ota-meshi/eslint-type-tracer/actions/workflows/NodeCI.yml/badge.svg?branch=main)](https://github.com/ota-meshi/eslint-type-tracer/actions/workflows/NodeCI.yml)

## 📛 Features

Trace and infer types of expression nodes for ESLint rules.

## 🚧 Limitations

This tool cannot always infer the complete or exact type of an expression. In particular, ESLint analyzes one file at a time, so types that are defined or imported from other files cannot be inferred. As a result, type inference is limited to what can be determined within the current file only.

## 💿 Installation

```bash
npm install eslint-type-tracer
```

> **Requirements**
>
> - ESLint v8.57.0 and above
> - Node.js v14.18.0, v16.0.0 and above

## 📖 Usage

### API

#### buildTypeTracer

```ts
import { buildTypeTracer } from "eslint-type-tracer";
```

Builds a type tracer function for use in ESLint rules. This function infers the type name of a given AST expression node.

**Signature:**

```ts
function buildTypeTracer(
  sourceCode: SourceCode
): (node: TSESTree.Expression) => TypeName[];
```

- `sourceCode`: The ESLint `SourceCode` object.

**Returns:**

A function that takes an expression node and returns an array of inferred type names (e.g., `["Array"]`). If the type cannot be determined, it returns an empty array `[]`。

**Example:**

```ts
const typeTrace = buildTypeTracer(context.sourceCode);
const typeNames = typeTrace(node);
if (typeNames.includes("Array")) {
  // node is inferred as Array
}
```

#### buildTypeChecker

```ts
import { buildTypeChecker } from "eslint-type-tracer";
```

Builds a type checker function for use in ESLint rules. This function helps you determine if a given AST node is of a specific type.

**Signature:**

```ts
function buildTypeChecker(
  sourceCode: SourceCode,
  options?: { aggressive?: boolean }
): (
  node: TSESTree.Expression,
  className: TypeName,
  memberAccessNode?: TSESTree.MemberExpression | TSESTree.Property
) => boolean | "aggressive";
```

- `sourceCode`: The ESLint `SourceCode` object.
- `options.aggressive`: If set to `true`, returns `"aggressive"` when the type cannot be determined. Default is `false`.

**Returns:**

A function that takes an expression node, a type name, and optionally a member access node, and returns `true` if the node is of the specified type, `false` if not, or `"aggressive"` if undetermined and the option is set.

**Example:**

```ts
const typeChecker = buildTypeChecker(context.sourceCode);
if (typeChecker(node, "Array")) {
  // node is an Array
}
```

## 🍻 Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

- `npm run test` runs tests.

## 🔒 License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
