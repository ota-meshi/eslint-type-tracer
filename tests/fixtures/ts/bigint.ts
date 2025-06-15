import { target } from "./target";

const a = 1n;

target(a);

function fn<X extends 2n>(a: bigint, b: number, c: X): void {
  target(a, BigInt(b), c);
}
