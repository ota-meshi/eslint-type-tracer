target(Uint8Array.fromBase64, Uint8Array.fromHex);

const u = new Uint8Array(10);
target(
  u,
  u.at,
  u.fill(),
  u[Symbol.toStringTag],
  u.toBase64,
  u.toHex,
  u.setFromBase64,
  u.setFromHex,
  u.toBase64(),
  u.toHex(),
);
