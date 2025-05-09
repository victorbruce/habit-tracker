import { getHabits } from "../utils/storage.js";

export function getTodoCount(habits = getHabits()) {
  return habits.filter((habit) => habit.status.toLowerCase() === "todo").length;
}

export function renderTodoCount() {
  const count = getTodoCount();
  const todoContainer = document.querySelector(".todos");

  if (!todoContainer) return;

  const countElement = todoContainer.querySelector("h4");
  if (countElement) {
    countElement.textContent = count;
  }
}