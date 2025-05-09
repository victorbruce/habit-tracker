import { setupDropdown } from "./components/dropdown.js";
import { addHabitForm } from "./components/addHabitForm.js";
import { setupActivitySelection } from "./components/activitySelector.js";

const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const noteInputField = document.getElementById("notes");
const habitForm = document.getElementById("habitForm");
const activityList = document.querySelector(".habit__list");

setupDropdown(dropdownButton, dropdownMenu);
setupActivitySelection(activityList);
addHabitForm(habitForm, noteInputField, "habit");
