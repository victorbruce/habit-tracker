const HABIT_KEY = "habits";

export function saveHabits(habits) {
  localStorage.setItem("habits", JSON.stringify(habits));
}

export function getHabits() {
  return JSON.parse(localStorage.getItem("habits")) || [];
}

export function deleteHabitById(id) {
  const habits = getHabits().filter((h) => h.id !== id);
  localStorage.setItem(HABIT_KEY, JSON.stringify(habits));
}

export function updateHabitStatus(id, newStatus) {
  const habits = getHabits().map((habit) => {
    return habit.id === id ? { ...habit, status: newStatus } : habit;
  });

  saveHabits(habits);
}

export function updateHabitById(id, updatedData) {
  const habits = getHabits();
  const updatedHabits = habits.map((habit) =>
    habit.id === id ? { ...habit, ...updatedData } : habit
  );
  localStorage.setItem(HABIT_KEY, JSON.stringify(updatedHabits));
}
