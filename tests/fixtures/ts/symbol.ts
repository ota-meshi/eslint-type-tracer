import { target } from "./target.ts";

const a = Symbol.iterator;

target(a);

function fn<X extends symbol>(a: symbol, b: typeof a, c: X): void {
  target(a, b, c);
}
