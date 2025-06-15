import { target } from "./target";

const a = [1, 2, 3, 4, 5];

target([], a);

function fn<X extends any[]>(
  a: readonly number[],
  b: ReadonlyArray<number>,
  c: X,
  d: [string],
): void {
  target(a, b, c, d);

  target(a[0], b[0], c[0], d[0]);
}
