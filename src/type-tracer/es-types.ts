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
  AtomicsProperty,
} from "./types";

const STRING = { type: "String" } as const;
const NUMBER = { type: "Number" } as const;
const BOOLEAN = { type: "Boolean" } as const;
const BIGINT = { type: "BigInt" } as const;
const RETURN_STRING = {
  type: "Function",
  return: STRING,
} as const;
const RETURN_NUMBER = {
  type: "Function",
  return: NUMBER,
} as const;
const RETURN_BOOLEAN = {
  type: "Function",
  return: BOOLEAN,
} as const;
const RETURN_BIGINT = {
  type: "Function",
  return: BIGINT,
} as const;

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
      EPSILON: NUMBER,
      MAX_SAFE_INTEGER: NUMBER,
      MAX_VALUE: NUMBER,
      MIN_SAFE_INTEGER: NUMBER,
      MIN_VALUE: NUMBER,
      NaN: NUMBER,
      NEGATIVE_INFINITY: NUMBER,
      POSITIVE_INFINITY: NUMBER,
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
    return: BIGINT,
    prototypeType: "BigInt",
    properties: {
      asIntN: RETURN_BIGINT,
      asUintN: RETURN_BIGINT,
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
      escape: RETURN_STRING,

      "$&": STRING,
      "$'": STRING,
      "$`": STRING,
      "$+": STRING,
      $_: STRING,
      $1: STRING,
      $2: STRING,
      $3: STRING,
      $4: STRING,
      $5: STRING,
      $6: STRING,
      $7: STRING,
      $8: STRING,
      $9: STRING,
      input: STRING,
      lastMatch: STRING,
      lastParen: STRING,
      leftContext: STRING,
      rightContext: STRING,
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
      now: RETURN_NUMBER,
      parse: RETURN_NUMBER,
      UTC: RETURN_NUMBER,
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
  Uint8Array: buildGlobalTypedArrayTypeInfo("Uint8Array", {
    fromBase64: { type: "Function" },
    fromHex: { type: "Function" },
  }),
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
  NaN: NUMBER,
  Infinity: NUMBER,
  Math: {
    type: "Object",
    properties: {
      abs: RETURN_NUMBER,
      acos: RETURN_NUMBER,
      acosh: RETURN_NUMBER,
      asin: RETURN_NUMBER,
      asinh: RETURN_NUMBER,
      atan: RETURN_NUMBER,
      atan2: RETURN_NUMBER,
      atanh: RETURN_NUMBER,
      cbrt: RETURN_NUMBER,
      ceil: RETURN_NUMBER,
      clz32: RETURN_NUMBER,
      cos: RETURN_NUMBER,
      cosh: RETURN_NUMBER,
      exp: RETURN_NUMBER,
      expm1: RETURN_NUMBER,
      f16round: RETURN_NUMBER,
      floor: RETURN_NUMBER,
      fround: RETURN_NUMBER,
      hypot: RETURN_NUMBER,
      imul: RETURN_NUMBER,
      log: RETURN_NUMBER,
      log1p: RETURN_NUMBER,
      log10: RETURN_NUMBER,
      log2: RETURN_NUMBER,
      max: RETURN_NUMBER,
      min: RETURN_NUMBER,
      pow: RETURN_NUMBER,
      random: RETURN_NUMBER,
      round: RETURN_NUMBER,
      sign: RETURN_NUMBER,
      sin: RETURN_NUMBER,
      sinh: RETURN_NUMBER,
      sqrt: RETURN_NUMBER,
      sumPrecise: RETURN_NUMBER,
      tan: RETURN_NUMBER,
      tanh: RETURN_NUMBER,
      trunc: RETURN_NUMBER,
      E: NUMBER,
      LN2: NUMBER,
      LN10: NUMBER,
      LOG2E: NUMBER,
      LOG10E: NUMBER,
      PI: NUMBER,
      SQRT1_2: NUMBER,
      SQRT2: NUMBER,
      [Symbol.toStringTag]: STRING,
    } satisfies Record<MathProperty, TypeInfo | undefined>,
  },
  Error: {
    type: "Function",
    return: { type: "Error" },
    prototypeType: "Error",
    properties: {
      isError: RETURN_BOOLEAN,
      captureStackTrace: { type: "Function" },
      stackTraceLimit: NUMBER,
    } satisfies Record<ErrorProperty, TypeInfo | undefined>,
  },
  Atomics: {
    type: "Object",
    properties: {
      add: RETURN_NUMBER,
      and: RETURN_NUMBER,
      compareExchange: RETURN_NUMBER,
      exchange: RETURN_NUMBER,
      isLockFree: RETURN_BOOLEAN,
      load: RETURN_NUMBER,
      notify: RETURN_NUMBER,
      or: RETURN_NUMBER,
      store: RETURN_NUMBER,
      sub: RETURN_NUMBER,
      wait: RETURN_STRING,
      waitAsync: {
        type: "Function",
        return: {
          type: "Object",
          properties: {
            async: BOOLEAN,
            // value: { type: "Promise" or "String" },
          },
        },
      },
      xor: RETURN_NUMBER,
      pause: { type: "Function" },
      [Symbol.toStringTag]: STRING,
    } satisfies Record<AtomicsProperty, TypeInfo | undefined>,
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
  length: NUMBER,
  // Symbols
  [Symbol.iterator]: { type: "Function", return: { type: "Iterator" } },
  [Symbol.unscopables]: { type: "Object" },
};
const REGEXP_ARRAY_PROPERTIES: Record<RegExpArrayPrototypeProperty, TypeInfo> =
  new Proxy(
    {
      ...ARRAY_PROPERTIES,
      index: NUMBER,
      input: STRING,
      groups: { type: "Object" },
      indices: { type: "Array" },
      at: RETURN_STRING,
    },
    {
      get(target, propertyName) {
        if (isFinite(Number(propertyName))) {
          return STRING;
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
    length: NUMBER,
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
    valueOf: RETURN_BOOLEAN,
  } satisfies Record<BooleanPrototypeProperty, TypeInfo>,
  Symbol: {
    description: STRING,
    valueOf: { type: "Function", return: { type: "Symbol" } },
    // Symbols
    [Symbol.toStringTag]: STRING,
    [Symbol.toPrimitive]: { type: "Function", return: { type: "Symbol" } },
  } satisfies Record<SymbolPrototypeProperty, TypeInfo>,
  BigInt: {
    valueOf: RETURN_BIGINT,
    // Symbols
    [Symbol.toStringTag]: STRING,
  } satisfies Record<BigIntPrototypeProperty, TypeInfo>,
  Function: {
    apply: { type: "Function" },
    bind: { type: "Function", return: { type: "Function" } },
    call: { type: "Function" },
    arguments: { type: "Object" },
    caller: { type: "Function" },
    length: NUMBER,
    name: STRING,
    prototype: { type: "Object" },
    // Symbols
    [Symbol.hasInstance]: RETURN_BOOLEAN,
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
    size: NUMBER,
    // Symbols
    [Symbol.iterator]: { type: "Function", return: { type: "Iterator" } },
    [Symbol.toStringTag]: STRING,
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
    size: NUMBER,
    // Symbols
    [Symbol.iterator]: { type: "Function", return: { type: "Iterator" } },
    [Symbol.toStringTag]: STRING,
  } satisfies Record<SetPrototypeProperty, TypeInfo>,
  RegExp: {
    compile: { type: "Function" },
    test: RETURN_BOOLEAN,
    exec: {
      type: "Function",
      return: { type: "Array", properties: REGEXP_ARRAY_PROPERTIES },
    },
    // Properties
    dotAll: BOOLEAN,
    flags: STRING,
    global: BOOLEAN,
    hasIndices: BOOLEAN,
    ignoreCase: BOOLEAN,
    lastIndex: NUMBER,
    multiline: BOOLEAN,
    source: STRING,
    sticky: BOOLEAN,
    unicode: BOOLEAN,
    unicodeSets: BOOLEAN,
    // Symbols
    [Symbol.match]: { type: "Function", return: { type: "RegExp" } },
    [Symbol.replace]: RETURN_STRING,
    [Symbol.search]: RETURN_NUMBER,
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
    [Symbol.toStringTag]: STRING,
  } satisfies Record<PromisePrototypeProperty, TypeInfo>,
  Int8Array: buildTypedArrayPrototypeTypeInfo("Int8Array"),
  Uint8Array: buildTypedArrayPrototypeTypeInfo("Uint8Array", {
    toBase64: RETURN_STRING,
    toHex: RETURN_STRING,
    setFromBase64: { type: "Function" },
    setFromHex: { type: "Function" },
  }),
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
    getBigInt64: RETURN_BIGINT,
    getBigUint64: RETURN_BIGINT,
    getFloat16: RETURN_NUMBER,
    getFloat32: RETURN_NUMBER,
    getFloat64: RETURN_NUMBER,
    getInt16: RETURN_NUMBER,
    getInt32: RETURN_NUMBER,
    getInt8: RETURN_NUMBER,
    getUint16: RETURN_NUMBER,
    getUint32: RETURN_NUMBER,
    getUint8: RETURN_NUMBER,
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
    byteLength: NUMBER,
    byteOffset: NUMBER,
    buffer: { type: "ArrayBuffer" },
    // Symbols
    [Symbol.toStringTag]: STRING,
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
    byteLength: NUMBER,
    detached: BOOLEAN,
    maxByteLength: NUMBER,
    resizable: BOOLEAN,
    // Symbols
    [Symbol.toStringTag]: STRING,
  } satisfies Record<ArrayBufferPrototypeProperty, TypeInfo>,
  SharedArrayBuffer: {
    grow: { type: "Function" },
    slice: { type: "Function", return: { type: "SharedArrayBuffer" } },
    // Properties
    byteLength: NUMBER,
    growable: BOOLEAN,
    maxByteLength: NUMBER,
    // Symbols
    [Symbol.toStringTag]: STRING,
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
    [Symbol.toStringTag]: STRING,
  } satisfies Record<WeakMapPrototypeProperty, TypeInfo>,
  WeakSet: {
    add: { type: "Function" },
    delete: RETURN_BOOLEAN,
    has: RETURN_BOOLEAN,
    // Symbols
    [Symbol.toStringTag]: STRING,
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
    [Symbol.toStringTag]: STRING,
    [Symbol.dispose]: { type: "Function" },
  } satisfies Record<IteratorPrototypeProperty, TypeInfo>,
  DisposableStack: {
    adopt: { type: "Function" },
    dispose: { type: "Function" },
    defer: { type: "Function" },
    disposed: BOOLEAN,
    move: { type: "Function", return: { type: "DisposableStack" } },
    use: { type: "Function" },
    // Symbols
    [Symbol.toStringTag]: STRING,
    [Symbol.dispose]: { type: "Function" },
  } satisfies Record<DisposableStackPrototypeProperty, TypeInfo>,
  AsyncDisposableStack: {
    adopt: { type: "Function", return: { type: "Promise" } },
    disposeAsync: { type: "Function" },
    defer: { type: "Function" },
    disposed: BOOLEAN,
    move: { type: "Function", return: { type: "AsyncDisposableStack" } },
    use: { type: "Function" },
    // Symbols
    [Symbol.toStringTag]: STRING,
    [Symbol.asyncDispose]: { type: "Function" },
  } satisfies Record<AsyncDisposableStackPrototypeProperty, TypeInfo>,
  WeakRef: {
    deref: { type: "Function" },
    // Symbols
    [Symbol.toStringTag]: STRING,
  } satisfies Record<WeakRefPrototypeProperty, TypeInfo>,
  FinalizationRegistry: {
    register: { type: "Function" },
    unregister: RETURN_BOOLEAN,
    // Symbols
    [Symbol.toStringTag]: STRING,
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
function buildGlobalTypedArrayTypeInfo<K extends string = never>(
  type: TypeName,
  otherProperties: Partial<Record<K, TypeInfo>> = {},
): TypeInfo {
  return {
    type: "Function",
    return: { type },
    prototypeType: type,
    properties: {
      BYTES_PER_ELEMENT: NUMBER,
      from: { type: "Function", return: { type } },
      of: { type: "Function", return: { type } },
      ...otherProperties,
    } satisfies Record<TypedArrayProperty | K, TypeInfo | undefined>,
  };
}

/**
 * Builds the type information for typed array prototypes.
 */
function buildTypedArrayPrototypeTypeInfo<K extends string = never>(
  type: TypeName,
  otherProperties: Partial<Record<K, TypeInfo>> = {},
): Record<TypedArrayPrototypeProperty, TypeInfo> &
  Partial<Record<K, TypeInfo>> {
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
    length: NUMBER,
    buffer: { type: "ArrayBuffer" },
    byteLength: NUMBER,
    byteOffset: NUMBER,
    // Symbols
    [Symbol.iterator]: { type: "Function", return: { type: "Iterator" } },
    [Symbol.toStringTag]: STRING,
    ...otherProperties,
  };
}
