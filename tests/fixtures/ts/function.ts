import { target } from "./target";

target(fn, String);

function fn<X extends (...arg: any[]) => void>(
  a: { (a: any): void },
  b: () => unknown,
  c: X,
): void {
  target(a, b, c);
}
