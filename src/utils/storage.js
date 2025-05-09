export function saveHabits(habits) {
  localStorage.setItem("habits", JSON.stringify(habits));
}

export function getHabits() {
  return JSON.parse(localStorage.getItem("habits")) || [];
}

