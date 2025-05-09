import { setupDropdown } from "./components/dropdown.js";
import { addHabitForm } from "./components/addHabitForm.js";
import { setupActivitySelection } from "./components/activitySelector.js";
import { getSelectedActivity } from "./state/state.js";
import { populateHistory } from "./components/habitHistory.js";
import { renderTodoCount } from "./components/todoInsight.js";
import { renderProgressCount } from "./components/progressInsight.js";
import { renderCompletedCount } from "./components/completedinsight.js";

function initApp() {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const noteInputField = document.getElementById("notes");
  const habitForm = document.getElementById("habitForm");
  const activityList = document.querySelector(".habit__list");

  setupDropdown(dropdownButton, dropdownMenu);
  setupActivitySelection(activityList);
  addHabitForm(habitForm, noteInputField, getSelectedActivity);
  renderTodoCount();
  renderProgressCount();
  renderCompletedCount();
  populateHistory();
}

window.addEventListener("DOMContentLoaded", initApp);
