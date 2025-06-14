export type TypeName =
  | "Array"
  | "Date"
  | "Function"
  | "Intl.Collator"
  | "Intl.DateTimeFormat"
  | "Intl.ListFormat"
  | "Intl.NumberFormat"
  | "Intl.PluralRules"
  | "Intl.RelativeTimeFormat"
  | "Intl.Segmenter"
  | "Intl.DisplayNames"
  | "Intl.Locale"
  | "Intl.DurationFormat"
  | "Promise"
  | "RegExp"
  | "String"
  | "Symbol"
  | "Int8Array"
  | "Uint8Array"
  | "Uint8ClampedArray"
  | "Int16Array"
  | "Uint16Array"
  | "Int32Array"
  | "Uint32Array"
  | "Float16Array"
  | "Float32Array"
  | "Float64Array"
  | "BigInt64Array"
  | "BigUint64Array"
  | "DataView"
  | "ArrayBuffer"
  | "SharedArrayBuffer"
  | "Object"
  | "Number"
  | "Boolean"
  | "BigInt"
  | "Iterator"
  | "DisposableStack"
  | "AsyncDisposableStack"
  | "Map"
  | "Set"
  | "WeakMap"
  | "WeakSet"
  | "WeakRef"
  | "FinalizationRegistry"
  | "Error"
  | "null"
  | "undefined";

export type TypeInfo = {
  type: TypeName | null;
  return?: TypeInfo | null;
  properties?: Record<string | symbol, TypeInfo | undefined>;
  prototypeType?: TypeName;
};

export type WellKnownGlobals = Record<string, TypeInfo | undefined>;

export type WellKnownPrototypes = Record<
  string,
  Record<string | symbol, TypeInfo | undefined> | undefined
>;

type ExcludeProperty = "prototype";
type ExcludePrototypeProperty = "toString" | "toLocaleString";

export type ObjectProperty = keyof typeof Object;
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types -- ignore
export type ObjectPrototypeProperty = keyof Object;
export type StringProperty = Exclude<keyof typeof String, ExcludeProperty>;
export type StringPrototypeProperty = Exclude<
  keyof string,
  ExcludePrototypeProperty
>;
export type NumberProperty = Exclude<keyof typeof Number, ExcludeProperty>;
export type NumberPrototypeProperty = Exclude<
  keyof number,
  ExcludePrototypeProperty
>;
export type BooleanProperty = Exclude<keyof typeof Boolean, ExcludeProperty>;
export type BooleanPrototypeProperty = Exclude<
  keyof boolean,
  ExcludePrototypeProperty
>;
export type SymbolProperty = Exclude<keyof typeof Symbol, ExcludeProperty>;
export type SymbolPrototypeProperty = Exclude<
  keyof symbol,
  ExcludePrototypeProperty
>;
export type BigIntProperty = Exclude<keyof typeof BigInt, ExcludeProperty>;
export type BigIntPrototypeProperty = Exclude<
  keyof bigint,
  ExcludePrototypeProperty
>;
export type FunctionProperty = Exclude<keyof typeof Function, ExcludeProperty>;
export type FunctionPrototypeProperty = Exclude<
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type -- ignore
  keyof Function,
  ExcludePrototypeProperty
>;
export type ArrayProperty = Exclude<keyof typeof Array, ExcludeProperty>;
export type ArrayPrototypeProperty = Exclude<
  keyof unknown[],
  ExcludePrototypeProperty
>;
export type MapProperty = Exclude<keyof typeof Map, ExcludeProperty>;
export type MapPrototypeProperty = Exclude<
  keyof Map<unknown, unknown>,
  ExcludePrototypeProperty
>;
export type SetProperty = Exclude<keyof typeof Set, ExcludeProperty>;
export type SetPrototypeProperty = Exclude<
  keyof Set<unknown>,
  ExcludePrototypeProperty
>;
export type RegExpProperty =
  | Exclude<keyof typeof RegExp, ExcludeProperty>
  | "escape";
export type RegExpPrototypeProperty = Exclude<
  keyof RegExp,
  ExcludePrototypeProperty
>;
export type RegExpArrayPrototypeProperty = Exclude<
  keyof RegExpExecArray,
  ExcludePrototypeProperty
>;
export type DateProperty = Exclude<keyof typeof Date, ExcludeProperty>;
export type DatePrototypeProperty =
  | Exclude<keyof Date, ExcludePrototypeProperty | "getVarDate">
  | "getYear"
  | "setYear"
  | "toGMTString";
export type PromiseProperty = Exclude<keyof typeof Promise, ExcludeProperty>;
export type PromisePrototypeProperty = Exclude<
  keyof Promise<unknown>,
  ExcludePrototypeProperty
>;
export type DataViewProperty = Exclude<keyof typeof DataView, ExcludeProperty>;
export type DataViewPrototypeProperty = Exclude<
  keyof DataView,
  ExcludePrototypeProperty
>;
export type ArrayBufferProperty = Exclude<
  keyof typeof ArrayBuffer,
  ExcludeProperty
>;
export type ArrayBufferPrototypeProperty = Exclude<
  keyof ArrayBuffer,
  ExcludePrototypeProperty
>;
export type SharedArrayBufferProperty = Exclude<
  keyof typeof SharedArrayBuffer,
  ExcludeProperty
>;
export type SharedArrayBufferPrototypeProperty = Exclude<
  keyof SharedArrayBuffer,
  ExcludePrototypeProperty
>;
export type WeakMapProperty = Exclude<keyof typeof WeakMap, ExcludeProperty>;
export type WeakMapPrototypeProperty = Exclude<
  keyof WeakMap<object, unknown>,
  ExcludePrototypeProperty
>;
export type WeakSetProperty = Exclude<keyof typeof WeakSet, ExcludeProperty>;
export type WeakSetPrototypeProperty = Exclude<
  keyof WeakSet<object>,
  ExcludePrototypeProperty
>;
export type WeakRefProperty = Exclude<keyof typeof WeakRef, ExcludeProperty>;
export type WeakRefPrototypeProperty = Exclude<
  keyof WeakRef<object>,
  ExcludePrototypeProperty
>;
export type FinalizationRegistryProperty = Exclude<
  keyof typeof FinalizationRegistry,
  ExcludeProperty
>;
export type FinalizationRegistryPrototypeProperty = Exclude<
  keyof FinalizationRegistry<unknown>,
  ExcludePrototypeProperty
>;
export type IntlProperty =
  | Exclude<keyof typeof Intl, ExcludeProperty>
  | "DurationFormat";
export type IteratorProperty = Exclude<keyof typeof Iterator, ExcludeProperty>;
export type IteratorPrototypeProperty = Exclude<
  keyof IteratorObject<unknown>,
  ExcludePrototypeProperty
>;
export type DisposableStackProperty = Exclude<
  keyof typeof DisposableStack,
  ExcludeProperty
>;
export type DisposableStackPrototypeProperty = Exclude<
  keyof DisposableStack,
  ExcludePrototypeProperty
>;
export type AsyncDisposableStackProperty = Exclude<
  keyof typeof AsyncDisposableStack,
  ExcludeProperty
>;
export type AsyncDisposableStackPrototypeProperty = Exclude<
  keyof AsyncDisposableStack,
  ExcludePrototypeProperty
>;
export type TypedArrayProperty = Exclude<
  keyof typeof Int8Array,
  ExcludeProperty
>;
export type TypedArrayPrototypeProperty = Exclude<
  keyof Int8Array,
  ExcludePrototypeProperty | "BYTES_PER_ELEMENT"
>;
export type MathProperty = Exclude<keyof typeof Math, ExcludeProperty>;
export type ErrorProperty =
  | Exclude<keyof typeof Error, ExcludeProperty | "prepareStackTrace">
  | "isError";
