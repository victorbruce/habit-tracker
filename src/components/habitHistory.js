import { getHabits } from "../utils/storage.js";
import { createHabitCard } from "./habitCard.js";
import { createEmptyState } from "./emptyState.js";

export function populateHistory() {
  const habits = getHabits();
  console.log("my habits", habits);
  const historyContainer = document.querySelector(".history__container");
  if (!historyContainer) return;

  historyContainer.innerHTML = "";

  if (habits.length === 0) {
    const emptyState = createEmptyState();
    historyContainer.appendChild(emptyState);
  } else {
    habits.forEach((habit) => {
      const habitCard = createHabitCard(habit);
      historyContainer.appendChild(habitCard);
    });
  }
}
