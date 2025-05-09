import { calculateStreak } from "../src/utils/streaks.js";

describe("calculateStreak", () => {
  test("returns correct longest streak", () => {
    const habits = [
      { date: new Date("2025-05-06").getTime() },
      { date: new Date("2025-05-07").getTime() },
      { date: new Date("2025-05-08").getTime() },
      { date: new Date("2025-05-10").getTime() }, // breaks streak
      { date: new Date("2025-05-11").getTime() },
    ];

    const result = calculateStreak(habits);
    expect(result).toBe(3); // 3-day streak
  });

  test("returns 0 for empty input", () => {
    expect(calculateStreak([])).toBe(0);
  });

  test("returns 1 for non-consecutive days", () => {
    const habits = [
      { date: new Date("2025-05-01").getTime() },
      { date: new Date("2025-05-03").getTime() }
    ];
    expect(calculateStreak(habits)).toBe(1);
  });
});
