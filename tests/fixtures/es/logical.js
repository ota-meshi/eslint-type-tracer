function _1() {
  const a = 1;
  const b = 1;
  const c = 1n;
  const d = 1n;
  target(
    a && b,
    c && d,
    foo && bar,
    42 && bar,
    foo && 42,
    42n && bar,
    foo && 42n,
  );
}

function _2() {
  const a = 1;
  const b = 1;
  const c = 1n;
  const d = 1n;
  target(
    a || b,
    c || d,
    foo || bar,
    42 || bar,
    foo || 42,
    42n || bar,
    foo || 42n,
  );
}

function _3() {
  const a = 1;
  const b = 1;
  const c = 1n;
  const d = 1n;
  target(
    a ?? b,
    c ?? d,
    foo ?? bar,
    42 ?? bar,
    foo ?? 42,
    42n ?? bar,
    foo ?? 42n,
  );
}
