import { target } from "./target";

const a = [1, 2, 3, 4, 5];

target([], a);

function fn<X extends any[]>(
  a: readonly number[],
  b: readonly number[],
  c: X,
): void {
  target(a, b, c);

  target(a[0], b[0], c[0]);
}
