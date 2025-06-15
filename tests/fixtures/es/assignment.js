target((foo -= bar), (foo -= 42), (foo -= 42n));

target((foo *= bar), (foo *= 42), (foo *= 42n));

target((foo /= bar), (foo /= 42), (foo /= 42n));

target((foo %= bar), (foo %= 42), (foo %= 42n));

target((foo ^= bar), (foo ^= 42), (foo ^= 42n));

target((foo **= bar), (foo **= 42), (foo **= 42n));

target((foo &= bar), (foo &= 42), (foo &= 42n));

target((foo |= bar), (foo |= 42), (foo |= 42n));

function _1() {
  let a = 1;
  const b = 1;
  let c = 1n;
  const d = 1n;
  target((a &&= b), (c &&= d), (foo &&= bar), (foo &&= 42), (foo &&= 42n));
}

function _2() {
  let a = 1;
  const b = 1;
  let c = 1n;
  const d = 1n;
  target((a ||= b), (c ||= d), (foo ||= bar), (foo ||= 42), (foo ||= 42n));
}

function _3() {
  let a = 1;
  const b = 1;
  let c = 1n;
  const d = 1n;
  target((a ??= b), (c ??= d), (foo ??= bar), (foo ??= 42), (foo ??= 42n));
}
