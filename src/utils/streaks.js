export function calculateStreak(habits) {
  if (!habits.length) return 0;

  // Convert timestamps to unique dates
  const dates = [...new Set(
    habits.map(habit => new Date(habit.date).toDateString())
  )].sort((a, b) => new Date(a) - new Date(b));

  let streak = 1;
  let maxStreak = 1;

  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1]);
    const curr = new Date(dates[i]);

    const diff = (curr - prev) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      streak++;
    } else {
      streak = 1;
    }
    maxStreak = Math.max(maxStreak, streak);
  }

  return maxStreak;
}
