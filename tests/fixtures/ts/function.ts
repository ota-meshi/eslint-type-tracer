import { target } from "./target";

target(fn, String);

function fn<X extends (...arg: any[]) => void>(
  a: { (a: any): void },
  b: () => unknown,
  c: X,
): void {
  target(a, b, c);
}

target(function fn() {});

target(() => {});

function _1() {
  let foo = function () {};
  target(foo);
}

function _2() {
  let foo = () => {};
  target(foo);
}

function _3() {
  function foo() {}

  target(foo);
}

function f(a: () => number) {
  target(a);
}

function _4() {
  let foo = { fn() {} };
  target(foo.fn);
}

target(Object.assign);

function _5() {
  class Foo {
    // @ts-expect-error -- test
    fn();
  }
  const foo = new Foo();
  target(foo.fn);
}

function _6() {
  let foo = Function();
  target(foo);
}

function _7() {
  let foo = String;
  target(foo);
}

function _8() {
  function f<T extends (a: any) => T>(a: T) {
    target(a);
  }
}

function _9() {
  function f<T extends ((a: any) => T) | "union">(a: T) {
    target(a);
  }
}
