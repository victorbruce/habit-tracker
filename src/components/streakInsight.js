import { getHabits } from "../utils/storage.js";
import { calculateStreak } from "../utils/streaks.js";

export function renderStreak() {
  const streakDaysElement = document.querySelector(".streak__days");
  const streakCountElement = document.querySelector(".streak__count");

  if (!streakDaysElement) return;

  const habits = getHabits();
  const streak = calculateStreak(habits);

  if (streak === 0) {
    streakDaysElement.textContent = streak;
    streakCountElement.textContent = `You have no streaks ongoing.`;
  } else {
    streakDaysElement.textContent = streak;
    streakCountElement.textContent = `You have a streak going for ${streak} days.`;
  }
}
