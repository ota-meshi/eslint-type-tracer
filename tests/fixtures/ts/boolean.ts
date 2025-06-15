import { target } from "./target";

const a = true;

target(a);

function fn<X extends true>(a: boolean, b: false, c: X): void {
  target(a, b, c);
}
