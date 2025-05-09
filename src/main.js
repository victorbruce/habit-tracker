import { setupDropdown } from "./components/dropdown.js";
import { addHabitForm } from "./components/addHabitForm.js";

const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const noteInputField = document.getElementById("notes");
const habitForm = document.getElementById("habitForm");

setupDropdown(dropdownButton, dropdownMenu);
addHabitForm(habitForm, noteInputField, 'habit');