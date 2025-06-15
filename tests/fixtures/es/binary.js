target(foo == bar);

target(foo != bar);

target(foo === bar);

target(foo !== bar);

target(foo < bar);

target(foo <= bar);

target(foo > bar);

target(foo >= bar);

target(foo - bar, 42 - bar, foo - 42, 42n - bar, foo - 42n);

target(foo * bar, 42 * bar, foo * 42, 42n * bar, foo * 42n);

target(foo / bar, 42 / bar, foo / 42, 42n / bar, foo / 42n);

target(foo % bar, 42 % bar, foo % 42, 42n % bar, foo % 42n);

target(foo ^ bar, 42 ^ bar, foo ^ 42, 42n ^ bar, foo ^ 42n);

target(foo ** bar, 42 ** bar, foo ** 42, 42n ** bar, foo ** 42n);

target(foo & bar, 42 & bar, foo & 42, 42n & bar, foo & 42n);

target(foo | bar, 42 | bar, foo | 42, 42n | bar, foo | 42n);
