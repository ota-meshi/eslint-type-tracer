target(
  Temporal.Duration.from("P1DT2H"),
  Temporal.Instant.fromEpochMilliseconds(0),
  Temporal.PlainDate.from("2020-01-01"),
  Temporal.PlainDateTime.from("2020-01-01T00:00"),
  Temporal.PlainMonthDay.from({ month: 1, day: 1 }),
  Temporal.PlainTime.from("12:00"),
  Temporal.PlainYearMonth.from({ year: 2020, month: 1 }),
  Temporal.ZonedDateTime.from("2020-01-01T00:00[UTC]"),
  Temporal.Now.instant(),
);
