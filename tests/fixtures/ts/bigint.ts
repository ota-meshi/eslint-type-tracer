import { target } from "./target.ts";

const a = 1n;

target(a);

function fn<X extends 2n>(a: bigint, b: number, c: X): void {
  target(a, BigInt(b), c);
}
