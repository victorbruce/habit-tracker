import { addHabitForm } from "./components/addHabitForm.js";
import { setupActivitySelection } from "./components/activitySelector.js";
import { getSelectedActivity } from "./state/state.js";
import { populateHistory } from "./components/habitHistory.js";
import { renderTodoCount } from "./components/todoInsight.js";
import { renderProgressCount } from "./components/progressInsight.js";
import { renderCompletedCount } from "./components/completedinsight.js";
import { renderStreak } from "./components/streakInsight.js";

function initApp() {
  const noteInputField = document.getElementById("notes");
  const habitForm = document.getElementById("habitForm");
  const activityList = document.querySelector(".habit__list");

  setupActivitySelection(activityList);
  addHabitForm(habitForm, noteInputField, getSelectedActivity);
  renderTodoCount();
  renderProgressCount();
  renderCompletedCount();
  renderStreak();
  populateHistory();
}

window.addEventListener("DOMContentLoaded", initApp);
