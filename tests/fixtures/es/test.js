target("foo");
target(42);
target(true);
target(/foo/);
target(null);
target(42n);
target([]);
target({});
target(function () {});
target(() => {});
target(a);
target(NaN);
target(Infinity);
target(undefined);
target(`foo`);
target(`foo${a}`);

function _1() {
  const a = "i";
  target(a);
}

function _2() {
  function f() {}

  target(f);
}

function _3() {
  const a = b;
  target(a);
}

function _4() {
  const a = a;
  target(a);
}

function _5() {
  var a = "foo";
  var a = 42;
  target(a);
}

function _6() {
  var a = "foo";
  a = 42;
  var b = "bar";
  target(a, b);
}

function _7() {
  const a = "i";
  target("foo" + "bar");
  target(a + "foo");
  target("foo" + a + "bar");
}

function _8() {
  const a = "i";
  target(b + "bar");
  target("foo" + a + b);
}

function _9() {
  const a = 42;
  target(
    a + "bar",
    foo + "bar",
    "bar" + foo,
    42 + a,
    {} + 42,
    42 + null,
    42 + {},
    42n + foo,
    42 + foo,
  );
}

function _10() {
  let b = 42;
  target((b += "bar"));
}

function _11() {
  let b = 42;
  target((b = "bar"));
}

function _12() {
  target(!foo, delete foo.bar);
}

function _13() {
  target(+bar);
}

function _14() {
  target(typeof bar, void bar);
}

function _15() {
  target((foo, "bar"));
}

function _16() {
  target(class Foo {});
}

function _17() {
  target(a ? "a" : "b", a ? "a" : 42);
}

function _18() {
  target(a++, --a);
}

function _19() {
  target("".length);
}

function _20() {
  target(String.fromCharCode(42), String.fromCodePoint(42), String.raw``);
}

function _21() {
  const { promise, resolve, reject } = Promise.withResolvers();
  target(promise, resolve, reject);
}

function _22() {
  const r = /foo/.exec("foo")[0];
  target(r);
}

function _23() {
  let array = [];
  array = [];
  target(array);
}

function _24() {
  let array = [];
  array = "";
  target(array);
}

function _25() {
  let { EPSILON: a } = Number;
  a = 42;
  ({ MAX_SAFE_INTEGER: a } = Number);
  target(a);
}

function _26() {
  let a = Number.isFinite;
  a = Number.isNaN;
  target(a(foo));
}

function _27() {
  let a = Number.isFinite;
  a = Number;
  target(a(foo));
}

function _28() {
  let { a = Number.isFinite } = { a: Number.isInteger };
  a = Number.isNaN;
  target(a(foo));
}

function _29() {
  target(Math.max(1, 2));
  target(Math.fround(5));
  target(Math.f16round(5));
}
