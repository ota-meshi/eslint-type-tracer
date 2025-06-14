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

#### buildTypeChecker

```ts
import { buildTypeChecker, type TypeName } from "eslint-type-tracer";
```

Builds a type checker function for use in ESLint rules. This function helps you determine if a given AST node is of a specific type.

**Signature:**

```ts
function buildTypeChecker(
  sourceCode: SourceCode,
  options?: { aggressiveResult?: false | "aggressive" }
): (
  node: TSESTree.Expression,
  className: TypeName,
  memberAccessNode?: TSESTree.MemberExpression | TSESTree.Property
) => boolean | "aggressive";
```

- `sourceCode`: The ESLint `SourceCode` object.
- `options.aggressiveResult`: If set to `"aggressive"`, returns this value when the type cannot be determined. Default is `false`.

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
