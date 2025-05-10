import {
  deleteHabitById,
  updateHabitStatus,
  updateHabitById,
} from "../utils/storage.js";
import { populateHistory } from "./habitHistory.js";
import { renderTodoCount } from "./todoInsight.js";
import { setupDropdown } from "./dropdown.js";
import { renderProgressCount } from "./progressInsight.js";
import { renderCompletedCount } from "./completedinsight.js";
import { getStatusClass } from "../utils/statusStyles.js";

import { showToast } from "./toast.js";

export function createHabitCard(habit) {
  const habitCard = document.createElement("div");
  habitCard.classList.add("history__card");

  habitCard.innerHTML = `
	<div class="history__card--content">
      <div class="habit-card__content">
      <h3 class="ellipsis-oneline">${
        habit.notes || "No notes has been recorded"
      }</h3>
      <p class="habit-card-activity large-screen">${
        habit.activity || "No Activity"
      }</p>
      </div>
      <div class="history__card--actions">
        <span class="${getStatusClass(habit.status)} large-screen">${
    habit.status || "Not Started"
  }</span>
        <button class="pen-icon-btn">
          <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-square-pen-icon lucide-square-pen pen-icon"
                    >
                      <path
                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      />
                      <path
                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                      />
                    </svg>
        </button>
        <button class="trash-icon-btn" data-id=${habit.id}>
        <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-trash2-icon lucide-trash-2 trash-icon"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
        </button>
        <div class="dropdown">
          <button id="dropdownButton" class="ellipsis-icon-btn">
           <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical ellipsis-icon"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
          </button>
          <ul id="dropdownMenu" class="dropdown-menu hidden">
            <li class="dropdown-item" data-status="todo">Todo</li>
            <li class="dropdown-item" data-status="progress">Progress</li>
            <li class="dropdown-item" data-status="completed">Completed</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <span class="${getStatusClass(habit.status)} small-screen">${
    habit.status || "Not Started"
  }</span>
   <p class="habit-card-activity small-screen">${
     habit.activity || "No Activity"
   }</p>
    </div>
	`;

  const deleteBtn = habitCard.querySelector(".trash-icon-btn");
  deleteBtn.addEventListener("click", () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this habit?"
    );

    if (confirmed) {
      deleteHabitById(habit.id);
      populateHistory();
      renderTodoCount();
      renderProgressCount();
      renderCompletedCount();
    }
  });

  // Setup dropdown interaction
  const dropdownButton = habitCard.querySelector(".ellipsis-icon-btn");
  const dropdownMenu = habitCard.querySelector(".dropdown-menu");
  setupDropdown(dropdownButton, dropdownMenu);

  // update habit status
  dropdownMenu.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
      const newStatus = item.dataset.status || "todo";

      updateHabitStatus(habit.id, newStatus);
      populateHistory(); // re-render the updated card
      renderTodoCount();
      renderProgressCount();
      renderCompletedCount();
      showToast(`Status updated to ${newStatus}`, "success");
    });
  });

  // edit habit
  const editBtn = habitCard.querySelector(".pen-icon-btn");
  editBtn.addEventListener("click", () => {
    const newNote = prompt("Edit note:", habit.notes || "");
    if (newNote !== null) {
      updateHabitById(habit.id, { notes: newNote });
      populateHistory(); // Re-render UI
      showToast(`Habit updated!`, "success");
    }
  });

  return habitCard;
}
