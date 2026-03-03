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

target(
  Temporal.ZonedDateTime.from("2020-01-01T05:30[UTC]").startOfDay(),
  Temporal.ZonedDateTime.from("2020-01-01T05:30[UTC]").getTimeZoneTransition(),
  Temporal.ZonedDateTime.from("2020-01-01T05:30[UTC]").toInstant(),
  Temporal.ZonedDateTime.from("2020-01-01T05:30[UTC]").toPlainDate(),
  Temporal.ZonedDateTime.from("2020-01-01T05:30[UTC]").toPlainTime(),
  Temporal.ZonedDateTime.from("2020-01-01T05:30[UTC]").toPlainDateTime(),
  Temporal.PlainDateTime.from("2020-01-01T12:34").round("day"),
  Temporal.Duration.from("P1DT2H").total("hours"),
  Temporal.Instant.fromEpochMilliseconds(123).toZonedDateTimeISO("UTC"),
  Temporal.Now.plainDateISO(),
);

target(
  Temporal.Duration.from("P2DT3H").round("day"),
  Temporal.Duration.from("P2DT3H").total("hours"),
  Temporal.PlainDate.from("2020-02-29").toPlainYearMonth(),
  Temporal.PlainDate.from("2020-02-29").toPlainMonthDay(),
  Temporal.PlainDateTime.from("2020-01-01T00:00").toPlainDate(),
  Temporal.PlainDateTime.from("2020-01-01T00:00").toPlainTime(),
  Temporal.Instant.fromEpochMilliseconds(0).toZonedDateTimeISO("UTC"),
  Temporal.Now.plainTimeISO(),
);

// Additional extensive Temporal test cases
target(
  // Duration creation and arithmetic
  Temporal.Duration.from({ days: 3, hours: 4, minutes: 30 }),
  Temporal.Duration.from("PT36H").add(Temporal.Duration.from("PT2H")),
  Temporal.Duration.from("PT36H").subtract(Temporal.Duration.from("PT1H")),
  Temporal.Duration.compare(
    Temporal.Duration.from("PT36H"),
    Temporal.Duration.from("PT24H"),
  ),

  // Instant conversions and comparisons
  Temporal.Instant.from("1970-01-01T00:00:00Z"),
  Temporal.Instant.fromEpochMilliseconds(1609459200000).epochMilliseconds,
  Temporal.Instant.fromEpochMilliseconds(1609459200000).toString(),
  Temporal.Instant.compare(
    Temporal.Instant.fromEpochMilliseconds(0),
    Temporal.Instant.fromEpochMilliseconds(1000),
  ),

  // ZonedDateTime creation in different zones
  Temporal.ZonedDateTime.from("2021-06-01T12:00[Europe/Paris]"),
  Temporal.ZonedDateTime.from("2021-06-01T12:00[America/New_York]").toInstant(),
  Temporal.ZonedDateTime.from(
    "2021-12-01T00:00[Pacific/Auckland]",
  ).toPlainDate(),

  // PlainDate / PlainTime / PlainDateTime manipulations
  Temporal.PlainDate.from({ year: 2021, month: 12, day: 31 }).with({ day: 1 }),
  Temporal.PlainDate.from("2000-02-29").add({ years: 4 }),
  Temporal.PlainTime.from("23:59:59").round("second"),
  Temporal.PlainDateTime.from("2021-03-14T02:30").with({ hour: 3 }),

  // PlainYearMonth and PlainMonthDay
  Temporal.PlainYearMonth.from({ year: 2024, month: 2 }),
  Temporal.PlainMonthDay.from({ month: 2, day: 29 }).toString(),

  // Rounding and totals on Duration
  Temporal.Duration.from({ minutes: 90 }).round("hour"),
  Temporal.Duration.from({ days: 1, minutes: 30 }).total("minutes"),

  // Now helpers (note: these return current values at runtime)
  Temporal.Now.instant(),
  Temporal.Now.plainDateISO(),
  Temporal.Now.plainTimeISO(),
  Temporal.Now.zonedDateTimeISO("UTC"),

  // Using toZonedDateTimeISO and conversions
  Temporal.Instant.fromEpochMilliseconds(0).toZonedDateTimeISO("Europe/London"),

  // Complex chained operations
  Temporal.ZonedDateTime.from("2022-03-27T01:30[Europe/London]")
    .add({ hours: 2 })
    .toPlainDateTime(),
  Temporal.PlainDateTime.from("2022-03-27T01:30").until(
    Temporal.PlainDateTime.from("2022-03-28T01:30"),
  ),
);

// More edge cases and API coverage
target(
  Temporal.Duration.from({ milliseconds: 1500 }).round("second"),
  Temporal.Duration.from({ seconds: 90 }).total("seconds"),
  Temporal.Instant.from("2020-01-01T00:00:00Z").toString(),
  Temporal.ZonedDateTime.from(
    "2020-11-01T01:30[America/Sao_Paulo]",
  ).getTimeZoneTransition(),
  Temporal.PlainDate.from("1970-01-01").toPlainYearMonth(),
  Temporal.PlainDateTime.from("1999-12-31T23:59:59").toPlainDate(),
  Temporal.PlainTime.from("00:00").toString(),
  Temporal.PlainYearMonth.from("2000-02").toString(),
  Temporal.PlainMonthDay.from("01-01").toString(),
  Temporal.Duration.from("P1Y2M3DT4H5M6S").toString(),
  Temporal.Duration.from({ days: -1, hours: -5 }).toString(),
  Temporal.Duration.compare(
    Temporal.Duration.from("P1D"),
    Temporal.Duration.from("P24H"),
  ),
);

// Mixed examples to exercise type inference across Temporal APIs
target(
  Temporal.Instant.fromEpochMilliseconds(1620000000000).toZonedDateTimeISO(
    "Asia/Tokyo",
  ),
  Temporal.ZonedDateTime.from("2023-05-01T12:00[UTC]")
    .toPlainDateTime()
    .toPlainDate(),
  Temporal.PlainDate.from("2024-02-29").toPlainMonthDay().toString(),
  Temporal.PlainDate.from("2024-02-29").toPlainYearMonth().toString(),
  Temporal.PlainDateTime.from("2024-02-29T23:59:59").round("minute"),
  Temporal.Duration.from({ hours: 25 }).total("hours"),
  Temporal.Duration.from({ minutes: 150 }).total("hours"),
);
