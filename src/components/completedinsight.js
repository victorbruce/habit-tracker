import { getHabits } from "../utils/storage.js";

export function getCompletedCount(habits = getHabits()) {
  return habits.filter((habit) => habit.status.toLowerCase() === "completed")
    .length;
}

export function renderCompletedCount() {
  const count = getCompletedCount();
  const completedContainer = document.querySelector(".completed");

  if (!completedContainer) return;

  const countElement = completedContainer.querySelector("h4");
  if (countElement) {
		console.log('completed', count)
    countElement.textContent = count;
  }
}
