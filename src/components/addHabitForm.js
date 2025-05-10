import { getHabits, saveHabits } from "../utils/storage.js";
import { resetActivitySelection } from "./activitySelector.js";
import { populateHistory } from "./habitHistory.js";
import { showToast } from "./toast.js";
import { renderTodoCount } from "./todoInsight.js";

function generateId() {
  return Date.now();
}

export function addHabitForm(formElement, inputElement, getSelectedActivity) {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents page reload

    const activity = getSelectedActivity();

    if (!activity) {
      showToast("Please select an activity first", "error");
      return;
    }

    const newHabit = {
      activity,
      notes: inputElement.value.trim(),
      status: "todo",
      id: generateId(),
      date: Date.now(),
    };
    const habits = getHabits();
    habits.push(newHabit);
    saveHabits(habits);

    populateHistory();
    renderTodoCount();
    resetActivitySelection();

    formElement.reset();
    showToast("Habit saved!", "success");
  });
}
