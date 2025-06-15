import { target } from "./target";

const a = "Hello, World!";

target(a);

function fn<X extends "foo">(a: string, b: `Hello, ${string}`, c: X): void {
  target(a, b, c);

  target(a[0], b[0], c[0]);
}
