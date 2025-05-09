import { getHabits, saveHabits } from "../utils/storage.js";


function generateId() {
  return Date.now();
}

export function addHabitForm(formElement, inputElement, getSelectedActivity) {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents page reload

    const activity = getSelectedActivity();

    if (!activity) {
      alert('Please select an activity first');
      return;
    }

    const newHabit = {
      activity,
      notes: inputElement.value.trim(),
      status: 'todo',
      id: generateId(),
      date: Date.now()
    }
    const habits = getHabits();
    habits.push(newHabit);
    saveHabits(habits);

    formElement.reset();
    alert('Habit saved!');
  });
}
