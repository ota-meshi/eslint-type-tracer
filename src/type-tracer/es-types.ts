import type {
  TypeInfo,
  BigIntProperty,
  BooleanProperty,
  NumberProperty,
  StringProperty,
  SymbolProperty,
  WellKnownGlobals,
  ObjectProperty,
  FunctionProperty,
  ArrayProperty,
  MapProperty,
  SetProperty,
  RegExpProperty,
  DateProperty,
  PromiseProperty,
  ObjectPrototypeProperty,
  TypeName,
  TypedArrayPrototypeProperty,
  ArrayPrototypeProperty,
  DataViewProperty,
  ArrayBufferProperty,
  SharedArrayBufferProperty,
  WeakMapProperty,
  WeakSetProperty,
  IntlProperty,
  IteratorProperty,
  DisposableStackProperty,
  AsyncDisposableStackProperty,
  WeakRefProperty,
  FinalizationRegistryProperty,
  MathProperty,
  ErrorProperty,
  RegExpArrayPrototypeProperty,
  WellKnownPrototypes,
  StringPrototypeProperty,
  NumberPrototypeProperty,
  BooleanPrototypeProperty,
  SymbolPrototypeProperty,
  BigIntPrototypeProperty,
  FunctionPrototypeProperty,
  MapPrototypeProperty,
  SetPrototypeProperty,
  RegExpPrototypeProperty,
  DatePrototypeProperty,
  PromisePrototypeProperty,
  DisposableStackPrototypeProperty,
  DataViewPrototypeProperty,
  ArrayBufferPrototypeProperty,
  SharedArrayBufferPrototypeProperty,
  WeakMapPrototypeProperty,
  WeakSetPrototypeProperty,
  IteratorPrototypeProperty,
  AsyncDisposableStackPrototypeProperty,
  WeakRefPrototypeProperty,
  FinalizationRegistryPrototypeProperty,
  TypedArrayProperty,
} from "./types";

const RETURN_STRING: TypeInfo = {
  type: "Function",
  return: { type: "String" },
};
const RETURN_NUMBER: TypeInfo = {
  type: "Function",
  return: { type: "Number" },
};
const RETURN_BOOLEAN: TypeInfo = {
  type: "Function",
  return: { type: "Boolean" },
};

export const WELLKNOWN_GLOBALS: WellKnownGlobals = {
  String: {
    ...RETURN_STRING,
    prototypeType: "String",
    properties: {
      fromCharCode: RETURN_STRING,
      fromCodePoint: RETURN_STRING,
      raw: RETURN_STRING,
    } satisfies Record<StringProperty, TypeInfo | undefined>,
  },
  Number: {
    ...RETURN_NUMBER,
    prototypeType: "Number",
    properties: {
      EPSILON: { type: "Number" },
      MAX_SAFE_INTEGER: { type: "Number" },
      MAX_VALUE: { type: "Number" },
      MIN_SAFE_INTEGER: { type: "Number" },
      MIN_VALUE: { type: "Number" },
      NaN: { type: "Number" },
      NEGATIVE_INFINITY: { type: "Number" },
      POSITIVE_INFINITY: { type: "Number" },
      isFinite: RETURN_BOOLEAN,
      isInteger: RETURN_BOOLEAN,
      isNaN: RETURN_BOOLEAN,
      isSafeInteger: RETURN_BOOLEAN,
      parseFloat: RETURN_NUMBER,
      parseInt: RETURN_NUMBER,
    } satisfies Record<NumberProperty, TypeInfo | undefined>,
  },
  Boolean: {
    ...RETURN_BOOLEAN,
    prototypeType: "Boolean",
    properties: {} satisfies Record<BooleanProperty, TypeInfo | undefined>,
  },
  Symbol: {
    type: "Function",
    return: { type: "Symbol" },
    prototypeType: "Symbol",
    properties: {
      for: { type: "Function", return: { type: "Symbol" } },
      keyFor: RETURN_STRING,
      asyncIterator: { type: "Symbol" },
      hasInstance: { type: "Symbol" },
      isConcatSpreadable: { type: "Symbol" },
      iterator: { type: "Symbol" },
      match: { type: "Symbol" },
      matchAll: { type: "Symbol" },
      replace: { type: "Symbol" },
      search: { type: "Symbol" },
      species: { type: "Symbol" },
      split: { type: "Symbol" },
      toPrimitive: { type: "Symbol" },
      toStringTag: { type: "Symbol" },
      unscopables: { type: "Symbol" },
      dispose: { type: "Symbol" },
      asyncDispose: { type: "Symbol" },
      metadata: { type: "Symbol" },
      observable: { type: "Symbol" },
    } satisfies Record<SymbolProperty, TypeInfo | undefined>,
  },
  BigInt: {
    type: "Function",
    return: { type: "BigInt" },
    prototypeType: "BigInt",
    properties: {
      asIntN: { type: "Function", return: { type: "BigInt" } },
      asUintN: { type: "Function", return: { type: "BigInt" } },
    } satisfies Record<BigIntProperty, TypeInfo | undefined>,
  },
  Object: {
    type: "Function",
    return: { type: "Object" },
    prototypeType: "Object",
    properties: {
      assign: { type: "Function", return: { type: "Object" } },
      create: { type: "Function", return: { type: "Object" } },
      defineProperties: { type: "Function", return: { type: "Object" } },
      defineProperty: { type: "Function", return: { type: "Object" } },
      entries: { type: "Function", return: { type: "Array" } },
      freeze: { type: "Function", return: { type: "Object" } },
      fromEntries: { type: "Function", return: { type: "Object" } },
      getOwnPropertyDescriptor: {
        type: "Function",
        return: { type: "Object" },
      },
      getOwnPropertyDescriptors: {
        type: "Function",
        return: { type: "Object" },
      },
      getOwnPropertyNames: {
        type: "Function",
        return: { type: "Array" },
      },
      getOwnPropertySymbols: {
        type: "Function",
        return: { type: "Array" },
      },
      getPrototypeOf: { type: "Function", return: { type: "Object" } },
      groupBy: { type: "Function", return: { type: "Object" } },
      hasOwn: RETURN_BOOLEAN,
      is: RETURN_BOOLEAN,
      isExtensible: RETURN_BOOLEAN,
      isFrozen: RETURN_BOOLEAN,
      isSealed: RETURN_BOOLEAN,
      keys: { type: "Function", return: { type: "Array" } },
      preventExtensions: { type: "Function", return: { type: "Object" } },
      seal: { type: "Function", return: { type: "Object" } },
      setPrototypeOf: { type: "Function", return: { type: "Object" } },
      values: { type: "Function", return: { type: "Array" } },
      prototype: { type: "Object" },
    } satisfies Record<ObjectProperty, TypeInfo | undefined>,
  },
  Function: {
    type: "Function",
    return: { type: "Function" },
    prototypeType: "Function",
    properties: {} satisfies Record<FunctionProperty, TypeInfo | undefined>,
  },
  Array: {
    type: "Function",
    return: { type: "Array" },
    prototypeType: "Array",
    properties: {
      from: { type: "Function", return: { type: "Array" } },
      fromAsync: { type: "Function", return: { type: "Promise" } },
      isArray: RETURN_BOOLEAN,
      of: { type: "Function", return: { type: "Array" } },
      get [Symbol.species]() {
        return WELLKNOWN_GLOBALS.Array;
      },
    } satisfies Record<ArrayProperty, TypeInfo | undefined>,
  },
  Map: {
    type: "Function",
    return: { type: "Map" },
    prototypeType: "Map",
    properties: {
      groupBy: { type: "Function", return: { type: "Map" } },
      get [Symbol.species]() {
        return WELLKNOWN_GLOBALS.Map;
      },
    } satisfies Record<MapProperty, TypeInfo | undefined>,
  },
  Set: {
    type: "Function",
    return: { type: "Set" },
    prototypeType: "Set",
    properties: {
      get [Symbol.species]() {
        return WELLKNOWN_GLOBALS.Set;
      },
    } satisfies Record<SetProperty, TypeInfo | undefined>,
  },
  RegExp: {
    type: "Function",
    return: { type: "RegExp" },
    prototypeType: "RegExp",
    properties: {
      escape: { type: "Function", return: { type: "String" } },

      "$&": { type: "String" },
      "$'": { type: "String" },
      "$`": { type: "String" },
      "$+": { type: "String" },
      $_: { type: "String" },
      $1: { type: "String" },
      $2: { type: "String" },
      $3: { type: "String" },
      $4: { type: "String" },
      $5: { type: "String" },
      $6: { type: "String" },
      $7: { type: "String" },
      $8: { type: "String" },
      $9: { type: "String" },
      input: { type: "String" },
      lastMatch: { type: "String" },
      lastParen: { type: "String" },
      leftContext: { type: "String" },
      rightContext: { type: "String" },
      get [Symbol.species]() {
        return WELLKNOWN_GLOBALS.RegExp;
      },
    } satisfies Record<RegExpProperty, TypeInfo | undefined>,
  },
  Date: {
    type: "Function",
    return: { type: "Date" },
    prototypeType: "Date",
    properties: {
      now: { type: "Function", return: { type: "Number" } },
      parse: { type: "Function", return: { type: "Number" } },
      UTC: { type: "Function", return: { type: "Number" } },
    } satisfies Record<DateProperty, TypeInfo | undefined>,
  },
  Promise: {
    type: "Function",
    return: { type: "Promise" },
    prototypeType: "Promise",
    properties: {
      all: { type: "Function", return: { type: "Promise" } },
      allSettled: { type: "Function", return: { type: "Promise" } },
      any: { type: "Function", return: { type: "Promise" } },
      race: { type: "Function", return: { type: "Promise" } },
      reject: { type: "Function", return: { type: "Promise" } },
      resolve: { type: "Function", return: { type: "Promise" } },
      try: { type: "Function", return: { type: "Promise" } },
      withResolvers: {
        type: "Function",
        return: {
          type: "Object",
          properties: {
            promise: { type: "Promise" },
            resolve: { type: "Function" },
            reject: { type: "Function" },
          },
        },
      },
      get [Symbol.species]() {
        return WELLKNOWN_GLOBALS.Promise;
      },
    } satisfies Record<PromiseProperty, TypeInfo | undefined>,
  },
  Int8Array: buildGlobalTypedArrayTypeInfo("Int8Array"),
  Uint8Array: buildGlobalTypedArrayTypeInfo("Uint8Array"),
  Uint8ClampedArray: buildGlobalTypedArrayTypeInfo("Uint8ClampedArray"),
  Int16Array: buildGlobalTypedArrayTypeInfo("Int16Array"),
  Uint16Array: buildGlobalTypedArrayTypeInfo("Uint16Array"),
  Int32Array: buildGlobalTypedArrayTypeInfo("Int32Array"),
  Uint32Array: buildGlobalTypedArrayTypeInfo("Uint32Array"),
  Float16Array: buildGlobalTypedArrayTypeInfo("Float16Array"),
  Float32Array: buildGlobalTypedArrayTypeInfo("Float32Array"),
  Float64Array: buildGlobalTypedArrayTypeInfo("Float64Array"),
  BigInt64Array: buildGlobalTypedArrayTypeInfo("BigInt64Array"),
  BigUint64Array: buildGlobalTypedArrayTypeInfo("BigUint64Array"),
  DataView: {
    type: "Function",
    return: { type: "DataView" },
    prototypeType: "DataView",
    properties: {} satisfies Record<DataViewProperty, TypeInfo | undefined>,
  },
  ArrayBuffer: {
    type: "Function",
    return: { type: "ArrayBuffer" },
    prototypeType: "ArrayBuffer",
    properties: {
      isView: RETURN_BOOLEAN,
      get [Symbol.species]() {
        return WELLKNOWN_GLOBALS.ArrayBuffer;
      },
    } satisfies Record<ArrayBufferProperty, TypeInfo | undefined>,
  },
  SharedArrayBuffer: {
    type: "Function",
    return: { type: "SharedArrayBuffer" },
    prototypeType: "SharedArrayBuffer",
    properties: {} satisfies Record<
      SharedArrayBufferProperty,
      TypeInfo | undefined
    >,
  },
  WeakMap: {
    type: "Function",
    return: { type: "WeakMap" },
    prototypeType: "WeakMap",
    properties: {} satisfies Record<WeakMapProperty, TypeInfo | undefined>,
  },
  WeakSet: {
    type: "Function",
    return: { type: "WeakSet" },
    prototypeType: "WeakSet",
    properties: {} satisfies Record<WeakSetProperty, TypeInfo | undefined>,
  },
  Intl: {
    type: "Object",
    properties: {
      Collator: {
        type: "Function",
        return: { type: "Intl.Collator" },
        prototypeType: "Intl.Collator",
      },
      DateTimeFormat: {
        type: "Function",
        return: { type: "Intl.DateTimeFormat" },
        prototypeType: "Intl.DateTimeFormat",
      },
      ListFormat: {
        type: "Function",
        return: { type: "Intl.ListFormat" },
        prototypeType: "Intl.ListFormat",
      },
      NumberFormat: {
        type: "Function",
        return: { type: "Intl.NumberFormat" },
        prototypeType: "Intl.NumberFormat",
      },
      PluralRules: {
        type: "Function",
        return: { type: "Intl.PluralRules" },
        prototypeType: "Intl.PluralRules",
      },
      RelativeTimeFormat: {
        type: "Function",
        return: { type: "Intl.RelativeTimeFormat" },
        prototypeType: "Intl.RelativeTimeFormat",
      },
      Segmenter: {
        type: "Function",
        return: { type: "Intl.Segmenter" },
        prototypeType: "Intl.Segmenter",
      },
      DisplayNames: {
        type: "Function",
        return: { type: "Intl.DisplayNames" },
        prototypeType: "Intl.DisplayNames",
      },
      DurationFormat: {
        type: "Function",
        return: { type: "Intl.DurationFormat" },
        prototypeType: "Intl.DurationFormat",
      },
      Locale: {
        type: "Function",
        return: { type: "Intl.Locale" },
        prototypeType: "Intl.Locale",
      },
      getCanonicalLocales: {
        type: "Function",
        return: { type: "Array" },
      },
      supportedValuesOf: {
        type: "Function",
        return: { type: "Array" },
      },
    } satisfies Record<IntlProperty, TypeInfo | undefined>,
  },
  Iterator: {
    type: "Function",
    return: { type: "Iterator" },
    prototypeType: "Iterator",
    properties: {
      from: { type: "Function", return: { type: "Iterator" } },
    } satisfies Record<IteratorProperty, TypeInfo | undefined>,
  },
  DisposableStack: {
    type: "Function",
    return: { type: "DisposableStack" },
    prototypeType: "DisposableStack",
    properties: {} satisfies Record<
      DisposableStackProperty,
      TypeInfo | undefined
    >,
  },
  AsyncDisposableStack: {
    type: "Function",
    return: { type: "AsyncDisposableStack" },
    prototypeType: "AsyncDisposableStack",
    properties: {} satisfies Record<
      AsyncDisposableStackProperty,
      TypeInfo | undefined
    >,
  },
  WeakRef: {
    type: "Function",
    return: { type: "WeakRef" },
    prototypeType: "WeakRef",
    properties: {} satisfies Record<WeakRefProperty, TypeInfo | undefined>,
  },
  FinalizationRegistry: {
    type: "Function",
    return: { type: "FinalizationRegistry" },
    prototypeType: "FinalizationRegistry",
    properties: {} satisfies Record<
      FinalizationRegistryProperty,
      TypeInfo | undefined
    >,
  },
  undefined: { type: "undefined" },
  NaN: { type: "Number" },
  Infinity: { type: "Number" },
  Math: {
    type: "Object",
    properties: {
      abs: { type: "Function", return: { type: "Number" } },
      acos: { type: "Function", return: { type: "Number" } },
      acosh: { type: "Function", return: { type: "Number" } },
      asin: { type: "Function", return: { type: "Number" } },
      asinh: { type: "Function", return: { type: "Number" } },
      atan: { type: "Function", return: { type: "Number" } },
      atan2: { type: "Function", return: { type: "Number" } },
      atanh: { type: "Function", return: { type: "Number" } },
      cbrt: { type: "Function", return: { type: "Number" } },
      ceil: { type: "Function", return: { type: "Number" } },
      clz32: { type: "Function", return: { type: "Number" } },
      cos: { type: "Function", return: { type: "Number" } },
      cosh: { type: "Function", return: { type: "Number" } },
      exp: { type: "Function", return: { type: "Number" } },
      expm1: { type: "Function", return: { type: "Number" } },
      f16round: { type: "Function", return: { type: "Number" } },
      floor: { type: "Function", return: { type: "Number" } },
      fround: { type: "Function", return: { type: "Number" } },
      hypot: { type: "Function", return: { type: "Number" } },
      imul: { type: "Function", return: { type: "Number" } },
      log: { type: "Function", return: { type: "Number" } },
      log1p: { type: "Function", return: { type: "Number" } },
      log10: { type: "Function", return: { type: "Number" } },
      log2: { type: "Function", return: { type: "Number" } },
      max: { type: "Function", return: { type: "Number" } },
      min: { type: "Function", return: { type: "Number" } },
      pow: { type: "Function", return: { type: "Number" } },
      random: { type: "Function", return: { type: "Number" } },
      round: { type: "Function", return: { type: "Number" } },
      sign: { type: "Function", return: { type: "Number" } },
      sin: { type: "Function", return: { type: "Number" } },
      sinh: { type: "Function", return: { type: "Number" } },
      sqrt: { type: "Function", return: { type: "Number" } },
      tan: { type: "Function", return: { type: "Number" } },
      tanh: { type: "Function", return: { type: "Number" } },
      trunc: { type: "Function", return: { type: "Number" } },
      E: { type: "Number" },
      LN2: { type: "Number" },
      LN10: { type: "Number" },
      LOG2E: { type: "Number" },
      LOG10E: { type: "Number" },
      PI: { type: "Number" },
      SQRT1_2: { type: "Number" },
      SQRT2: { type: "Number" },
      [Symbol.toStringTag]: { type: "String" },
    } satisfies Record<MathProperty, TypeInfo | undefined>,
  },
  Error: {
    type: "Function",
    return: { type: "Error" },
    prototypeType: "Error",
    properties: {
      isError: { type: "Function", return: { type: "Boolean" } },
      captureStackTrace: { type: "Function" },
      stackTraceLimit: { type: "Number" },
    } satisfies Record<ErrorProperty, TypeInfo | undefined>,
  },
};

const OBJECT_PROTOTYPE: Record<ObjectPrototypeProperty, TypeInfo> = {
  constructor: { type: "Function" },
  toString: RETURN_STRING,
  toLocaleString: RETURN_STRING,
  valueOf: { type: "Function" },
  hasOwnProperty: RETURN_BOOLEAN,
  isPrototypeOf: RETURN_BOOLEAN,
  propertyIsEnumerable: RETURN_BOOLEAN,
};
const ARRAY_PROPERTIES: Record<ArrayPrototypeProperty, TypeInfo> = {
  at: { type: "Function" },
  concat: { type: "Function", return: { type: "Array" } },
  copyWithin: { type: "Function", return: { type: "Array" } },
  entries: { type: "Function", return: { type: "Iterator" } },
  every: RETURN_BOOLEAN,
  fill: { type: "Function", return: { type: "Array" } },
  filter: { type: "Function", return: { type: "Array" } },
  find: { type: "Function" },
  findIndex: RETURN_NUMBER,
  findLast: { type: "Function" },
  findLastIndex: RETURN_NUMBER,
  flat: { type: "Function", return: { type: "Array" } },
  flatMap: { type: "Function", return: { type: "Array" } },
  forEach: { type: "Function" },
  includes: RETURN_BOOLEAN,
  indexOf: RETURN_NUMBER,
  join: RETURN_STRING,
  keys: { type: "Function", return: { type: "Iterator" } },
  lastIndexOf: RETURN_NUMBER,
  map: { type: "Function", return: { type: "Array" } },
  pop: { type: "Function" },
  push: { type: "Function" },
  reduce: { type: "Function" },
  reduceRight: { type: "Function" },
  reverse: { type: "Function", return: { type: "Array" } },
  shift: { type: "Function" },
  slice: { type: "Function", return: { type: "Array" } },
  some: RETURN_BOOLEAN,
  sort: { type: "Function", return: { type: "Array" } },
  splice: { type: "Function", return: { type: "Array" } },
  toReversed: { type: "Function", return: { type: "Array" } },
  toSorted: { type: "Function", return: { type: "Array" } },
  toSpliced: { type: "Function", return: { type: "Array" } },
  unshift: { type: "Function" },
  values: { type: "Function", return: { type: "Iterator" } },
  with: { type: "Function", return: { type: "Array" } },
  // Properties
  length: { type: "Number" },
  // Symbols
  [Symbol.iterator]: { type: "Function", return: { type: "Iterator" } },
  [Symbol.unscopables]: { type: "Object" },
};
const REGEXP_ARRAY_PROPERTIES: Record<RegExpArrayPrototypeProperty, TypeInfo> =
  new Proxy(
    {
      ...ARRAY_PROPERTIES,
      index: { type: "Number" },
      input: { type: "String" },
      groups: { type: "Object" },
      indices: { type: "Array" },
      at: { type: "Function", return: { type: "String" } },
    },
    {
      get(target, propertyName) {
        if (isFinite(Number(propertyName))) {
          return { type: "String" };
        }
        const key = propertyName as Exclude<
          RegExpArrayPrototypeProperty,
          number
        >;
        return target[key];
      },
    },
  );
const WELLKNOWN_PROTOTYPE: WellKnownPrototypes = {
  String: {
    // HTML
    anchor: RETURN_STRING,
    big: RETURN_STRING,
    blink: RETURN_STRING,
    bold: RETURN_STRING,
    fixed: RETURN_STRING,
    fontcolor: RETURN_STRING,
    fontsize: RETURN_STRING,
    italics: RETURN_STRING,
    link: RETURN_STRING,
    small: RETURN_STRING,
    strike: RETURN_STRING,
    sub: RETURN_STRING,
    sup: RETURN_STRING,
    // ES
    charAt: RETURN_STRING,
    at: RETURN_STRING,
    charCodeAt: RETURN_NUMBER,
    codePointAt: RETURN_NUMBER,
    concat: RETURN_STRING,
    endsWith: RETURN_BOOLEAN,
    includes: RETURN_BOOLEAN,
    indexOf: RETURN_NUMBER,
    lastIndexOf: RETURN_NUMBER,
    localeCompare: RETURN_NUMBER,
    match: { type: "Function", return: { type: "Array" } },
    matchAll: { type: "Function", return: { type: "Iterator" } },
    normalize: RETURN_STRING,
    padEnd: RETURN_STRING,
    padStart: RETURN_STRING,
    repeat: RETURN_STRING,
    replace: RETURN_STRING,
    replaceAll: RETURN_STRING,
    search: RETURN_NUMBER,
    slice: RETURN_STRING,
    split: { type: "Function", return: { type: "Array" } },
    startsWith: RETURN_BOOLEAN,
    substr: RETURN_STRING,
    substring: RETURN_STRING,
    toLowerCase: RETURN_STRING,
    toLocaleLowerCase: RETURN_STRING,
    toUpperCase: RETURN_STRING,
    toLocaleUpperCase: RETURN_STRING,
    trim: RETURN_STRING,
    trimEnd: RETURN_STRING,
    trimLeft: RETURN_STRING,
    trimRight: RETURN_STRING,
    trimStart: RETURN_STRING,
    valueOf: RETURN_STRING,
    isWellFormed: RETURN_BOOLEAN,
    toWellFormed: RETURN_STRING,
    // Properties
    length: { type: "Number" },
    // Symbols
    [Symbol.iterator]: { type: "Function", return: { type: "Iterator" } },
  } satisfies Record<StringPrototypeProperty, TypeInfo>,
  Number: {
    toExponential: RETURN_STRING,
    toFixed: RETURN_STRING,
    toPrecision: RETURN_STRING,
    valueOf: RETURN_NUMBER,
  } satisfies Record<NumberPrototypeProperty, TypeInfo>,
  Boolean: {
    valueOf: { type: "Boolean" },
  } satisfies Record<BooleanPrototypeProperty, TypeInfo>,
  Symbol: {
    description: { type: "String" },
    valueOf: { type: "Symbol" },
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
    [Symbol.toPrimitive]: { type: "Function", return: { type: "Symbol" } },
  } satisfies Record<SymbolPrototypeProperty, TypeInfo>,
  BigInt: {
    valueOf: { type: "BigInt" },
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
  } satisfies Record<BigIntPrototypeProperty, TypeInfo>,
  Function: {
    apply: { type: "Function" },
    bind: { type: "Function", return: { type: "Function" } },
    call: { type: "Function" },
    arguments: { type: "Object" },
    caller: { type: "Function" },
    length: { type: "Number" },
    name: { type: "String" },
    prototype: { type: "Object" },
    // Symbols
    [Symbol.hasInstance]: { type: "Function", return: { type: "Boolean" } },
    [Symbol.metadata]: { type: "Object" },
  } satisfies Record<FunctionPrototypeProperty, TypeInfo>,
  Array: ARRAY_PROPERTIES,
  Map: {
    clear: { type: "Function" },
    delete: RETURN_BOOLEAN,
    entries: { type: "Function", return: { type: "Iterator" } },
    forEach: { type: "Function" },
    get: { type: "Function" },
    has: RETURN_BOOLEAN,
    keys: { type: "Function", return: { type: "Iterator" } },
    set: { type: "Function" },
    values: { type: "Function", return: { type: "Iterator" } },
    // Properties
    size: { type: "Number" },
    // Symbols
    [Symbol.iterator]: { type: "Function", return: { type: "Iterator" } },
    [Symbol.toStringTag]: { type: "String" },
  } satisfies Record<MapPrototypeProperty, TypeInfo>,
  Set: {
    add: { type: "Function" },
    clear: { type: "Function" },
    delete: RETURN_BOOLEAN,
    difference: { type: "Function", return: { type: "Set" } },
    entries: { type: "Function", return: { type: "Iterator" } },
    forEach: { type: "Function" },
    has: RETURN_BOOLEAN,
    intersection: { type: "Function", return: { type: "Set" } },
    isDisjointFrom: RETURN_BOOLEAN,
    isSubsetOf: RETURN_BOOLEAN,
    isSupersetOf: RETURN_BOOLEAN,
    keys: { type: "Function", return: { type: "Iterator" } },
    symmetricDifference: { type: "Function", return: { type: "Set" } },
    union: { type: "Function", return: { type: "Set" } },
    values: { type: "Function", return: { type: "Iterator" } },
    // Properties
    size: { type: "Number" },
    // Symbols
    [Symbol.iterator]: { type: "Function", return: { type: "Iterator" } },
    [Symbol.toStringTag]: { type: "String" },
  } satisfies Record<SetPrototypeProperty, TypeInfo>,
  RegExp: {
    compile: { type: "Function" },
    test: RETURN_BOOLEAN,
    exec: {
      type: "Function",
      return: { type: "Array", properties: REGEXP_ARRAY_PROPERTIES },
    },
    // Properties
    dotAll: { type: "Boolean" },
    flags: { type: "String" },
    global: { type: "Boolean" },
    hasIndices: { type: "Boolean" },
    ignoreCase: { type: "Boolean" },
    lastIndex: { type: "Number" },
    multiline: { type: "Boolean" },
    source: { type: "String" },
    sticky: { type: "Boolean" },
    unicode: { type: "Boolean" },
    unicodeSets: { type: "Boolean" },
    // Symbols
    [Symbol.match]: { type: "Function", return: { type: "RegExp" } },
    [Symbol.replace]: { type: "Function", return: { type: "String" } },
    [Symbol.search]: { type: "Function", return: { type: "Number" } },
    [Symbol.split]: {
      type: "Function",
      return: { type: "Array", properties: REGEXP_ARRAY_PROPERTIES },
    },
    [Symbol.matchAll]: {
      type: "Function",
      return: { type: "Iterator", properties: REGEXP_ARRAY_PROPERTIES },
    },
  } satisfies Record<RegExpPrototypeProperty, TypeInfo>,
  Date: {
    getDate: RETURN_NUMBER,
    getDay: RETURN_NUMBER,
    getFullYear: RETURN_NUMBER,
    getHours: RETURN_NUMBER,
    getMilliseconds: RETURN_NUMBER,
    getMinutes: RETURN_NUMBER,
    getMonth: RETURN_NUMBER,
    getSeconds: RETURN_NUMBER,
    getTime: RETURN_NUMBER,
    getTimezoneOffset: RETURN_NUMBER,
    getUTCDate: RETURN_NUMBER,
    getUTCDay: RETURN_NUMBER,
    getUTCFullYear: RETURN_NUMBER,
    getUTCHours: RETURN_NUMBER,
    getUTCMilliseconds: RETURN_NUMBER,
    getUTCMinutes: RETURN_NUMBER,
    getUTCMonth: RETURN_NUMBER,
    getUTCSeconds: RETURN_NUMBER,
    getYear: RETURN_NUMBER,
    setDate: RETURN_NUMBER,
    setFullYear: RETURN_NUMBER,
    setHours: RETURN_NUMBER,
    setMilliseconds: RETURN_NUMBER,
    setMinutes: RETURN_NUMBER,
    setMonth: RETURN_NUMBER,
    setSeconds: RETURN_NUMBER,
    setTime: RETURN_NUMBER,
    setUTCDate: RETURN_NUMBER,
    setUTCFullYear: RETURN_NUMBER,
    setUTCHours: RETURN_NUMBER,
    setUTCMilliseconds: RETURN_NUMBER,
    setUTCMinutes: RETURN_NUMBER,
    setUTCMonth: RETURN_NUMBER,
    setUTCSeconds: RETURN_NUMBER,
    setYear: RETURN_NUMBER,
    toDateString: RETURN_STRING,
    toISOString: RETURN_STRING,
    toJSON: RETURN_STRING,
    toGMTString: RETURN_STRING,
    toLocaleDateString: RETURN_STRING,
    toLocaleTimeString: RETURN_STRING,
    toTimeString: RETURN_STRING,
    toUTCString: RETURN_STRING,
    valueOf: RETURN_NUMBER,
    // Symbols
    [Symbol.toPrimitive]: { type: "Function", return: { type: "Date" } },
  } satisfies Record<DatePrototypeProperty, TypeInfo>,
  Promise: {
    catch: { type: "Function", return: { type: "Promise" } },
    finally: { type: "Function", return: { type: "Promise" } },
    then: { type: "Function", return: { type: "Promise" } },
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
  } satisfies Record<PromisePrototypeProperty, TypeInfo>,
  Int8Array: buildTypedArrayPrototypeTypeInfo("Int8Array"),
  Uint8Array: buildTypedArrayPrototypeTypeInfo("Uint8Array"),
  Uint8ClampedArray: buildTypedArrayPrototypeTypeInfo("Uint8ClampedArray"),
  Int16Array: buildTypedArrayPrototypeTypeInfo("Int16Array"),
  Uint16Array: buildTypedArrayPrototypeTypeInfo("Uint16Array"),
  Int32Array: buildTypedArrayPrototypeTypeInfo("Int32Array"),
  Uint32Array: buildTypedArrayPrototypeTypeInfo("Uint32Array"),
  Float16Array: buildTypedArrayPrototypeTypeInfo("Float16Array"),
  Float32Array: buildTypedArrayPrototypeTypeInfo("Float32Array"),
  Float64Array: buildTypedArrayPrototypeTypeInfo("Float64Array"),
  BigInt64Array: buildTypedArrayPrototypeTypeInfo("BigInt64Array"),
  BigUint64Array: buildTypedArrayPrototypeTypeInfo("BigUint64Array"),
  DataView: {
    getBigInt64: { type: "Function", return: { type: "BigInt" } },
    getBigUint64: { type: "Function", return: { type: "BigInt" } },
    getFloat16: { type: "Function", return: { type: "Number" } },
    getFloat32: { type: "Function", return: { type: "Number" } },
    getFloat64: { type: "Function", return: { type: "Number" } },
    getInt16: { type: "Function", return: { type: "Number" } },
    getInt32: { type: "Function", return: { type: "Number" } },
    getInt8: { type: "Function", return: { type: "Number" } },
    getUint16: { type: "Function", return: { type: "Number" } },
    getUint32: { type: "Function", return: { type: "Number" } },
    getUint8: { type: "Function", return: { type: "Number" } },
    setBigInt64: { type: "Function" },
    setBigUint64: { type: "Function" },
    setFloat16: { type: "Function" },
    setFloat32: { type: "Function" },
    setFloat64: { type: "Function" },
    setInt16: { type: "Function" },
    setInt32: { type: "Function" },
    setInt8: { type: "Function" },
    setUint16: { type: "Function" },
    setUint32: { type: "Function" },
    setUint8: { type: "Function" },
    // Properties
    byteLength: { type: "Number" },
    byteOffset: { type: "Number" },
    buffer: { type: "ArrayBuffer" },
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
  } satisfies Record<DataViewPrototypeProperty, TypeInfo>,
  ArrayBuffer: {
    resize: { type: "Function" },
    slice: { type: "Function", return: { type: "ArrayBuffer" } },
    transfer: { type: "Function", return: { type: "ArrayBuffer" } },
    transferToFixedLength: {
      type: "Function",
      return: { type: "ArrayBuffer" },
    },
    // Properties
    byteLength: { type: "Number" },
    detached: { type: "Boolean" },
    maxByteLength: { type: "Number" },
    resizable: { type: "Boolean" },
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
  } satisfies Record<ArrayBufferPrototypeProperty, TypeInfo>,
  SharedArrayBuffer: {
    grow: { type: "Function" },
    slice: { type: "Function", return: { type: "SharedArrayBuffer" } },
    // Properties
    byteLength: { type: "Number" },
    growable: { type: "Boolean" },
    maxByteLength: { type: "Number" },
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
    get [Symbol.species]() {
      return WELLKNOWN_GLOBALS.SharedArrayBuffer!;
    },
  } satisfies Record<SharedArrayBufferPrototypeProperty, TypeInfo>,
  WeakMap: {
    delete: RETURN_BOOLEAN,
    get: { type: "Function" },
    has: RETURN_BOOLEAN,
    set: { type: "Function" },
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
  } satisfies Record<WeakMapPrototypeProperty, TypeInfo>,
  WeakSet: {
    add: { type: "Function" },
    delete: RETURN_BOOLEAN,
    has: RETURN_BOOLEAN,
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
  } satisfies Record<WeakSetPrototypeProperty, TypeInfo>,
  Iterator: {
    next: { type: "Function" },
    return: { type: "Function" },
    throw: { type: "Function" },
    // iterator-helpers
    map: { type: "Function", return: { type: "Iterator" } },
    filter: { type: "Function", return: { type: "Iterator" } },
    take: { type: "Function", return: { type: "Iterator" } },
    drop: { type: "Function", return: { type: "Iterator" } },
    flatMap: { type: "Function", return: { type: "Iterator" } },
    reduce: { type: "Function" },
    toArray: { type: "Function", return: { type: "Array" } },
    forEach: { type: "Function" },
    some: RETURN_BOOLEAN,
    every: RETURN_BOOLEAN,
    find: { type: "Function" },
    // Symbols
    [Symbol.iterator]: { type: "Function", return: { type: "Iterator" } },
    [Symbol.toStringTag]: { type: "String" },
    [Symbol.dispose]: { type: "Function" },
  } satisfies Record<IteratorPrototypeProperty, TypeInfo>,
  DisposableStack: {
    adopt: { type: "Function" },
    dispose: { type: "Function" },
    defer: { type: "Function" },
    disposed: { type: "Boolean" },
    move: { type: "Function", return: { type: "DisposableStack" } },
    use: { type: "Function" },
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
    [Symbol.dispose]: { type: "Function" },
  } satisfies Record<DisposableStackPrototypeProperty, TypeInfo>,
  AsyncDisposableStack: {
    adopt: { type: "Function", return: { type: "Promise" } },
    disposeAsync: { type: "Function" },
    defer: { type: "Function" },
    disposed: { type: "Boolean" },
    move: { type: "Function", return: { type: "AsyncDisposableStack" } },
    use: { type: "Function" },
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
    [Symbol.asyncDispose]: { type: "Function" },
  } satisfies Record<AsyncDisposableStackPrototypeProperty, TypeInfo>,
  WeakRef: {
    deref: { type: "Function" },
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
  } satisfies Record<WeakRefPrototypeProperty, TypeInfo>,
  FinalizationRegistry: {
    register: { type: "Function" },
    unregister: RETURN_BOOLEAN,
    // Symbols
    [Symbol.toStringTag]: { type: "String" },
  } satisfies Record<FinalizationRegistryPrototypeProperty, TypeInfo>,
};

/**
 * Returns the type information for a property of a given type.
 */
export function getPropertyType(
  typeInfo: TypeInfo,
  propertyName: string | number | symbol,
): TypeInfo | null {
  const prop = typeInfo.properties?.[propertyName];
  if (prop) {
    return prop;
  }
  const proto =
    typeInfo.type && WELLKNOWN_PROTOTYPE[typeInfo.type]?.[propertyName];
  if (proto) {
    return proto;
  }
  return OBJECT_PROTOTYPE[propertyName as ObjectPrototypeProperty] ?? null;
}

/**
 * Builds the type information for global typed arrays.
 */
function buildGlobalTypedArrayTypeInfo(type: TypeName): TypeInfo {
  return {
    type: "Function",
    return: { type },
    prototypeType: type,
    properties: {
      BYTES_PER_ELEMENT: { type: "Number" },
      from: { type: "Function", return: { type } },
      of: { type: "Function", return: { type } },
    } satisfies Record<TypedArrayProperty, TypeInfo | undefined>,
  };
}

/**
 * Builds the type information for typed array prototypes.
 */
function buildTypedArrayPrototypeTypeInfo(
  type: TypeName,
): Record<TypedArrayPrototypeProperty, TypeInfo> {
  return {
    at: { type: "Function" },
    copyWithin: { type: "Function", return: { type } },
    entries: { type: "Function", return: { type: "Iterator" } },
    every: RETURN_BOOLEAN,
    fill: { type: "Function", return: { type } },
    filter: { type: "Function", return: { type } },
    find: { type: "Function" },
    findIndex: RETURN_NUMBER,
    findLast: { type: "Function" },
    findLastIndex: RETURN_NUMBER,
    forEach: { type: "Function" },
    includes: RETURN_BOOLEAN,
    indexOf: RETURN_NUMBER,
    join: RETURN_STRING,
    keys: { type: "Function", return: { type: "Iterator" } },
    lastIndexOf: RETURN_NUMBER,
    map: { type: "Function", return: { type } },
    reduce: { type: "Function" },
    reduceRight: { type: "Function" },
    reverse: { type: "Function", return: { type } },
    slice: { type: "Function", return: { type } },
    some: RETURN_BOOLEAN,
    sort: { type: "Function", return: { type } },
    toReversed: { type: "Function", return: { type } },
    toSorted: { type: "Function", return: { type } },
    values: { type: "Function", return: { type: "Iterator" } },
    with: { type: "Function", return: { type } },
    set: { type: "Function" },
    subarray: { type: "Function", return: { type } },
    valueOf: { type: "Function" },
    // Properties
    length: { type: "Number" },
    buffer: { type: "ArrayBuffer" },
    byteLength: { type: "Number" },
    byteOffset: { type: "Number" },
    // Symbols
    [Symbol.iterator]: { type: "Function", return: { type: "Iterator" } },
    [Symbol.toStringTag]: { type: "String" },
  };
}
