import { getHabits } from "../utils/storage.js";

export function getProgressCount(habits = getHabits()) {
  return habits.filter(
    (habit) => (habit.status || "").toLowerCase() === "progress"
  ).length;
}

export function renderProgressCount() {
  const count = getProgressCount();
  const progressContainer = document.querySelector(".progress");

  if (!progressContainer) return;

  const countElement = progressContainer.querySelector("h4");
  if (countElement) {
    countElement.textContent = count;
  }
}
