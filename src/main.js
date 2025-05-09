import { setupDropdown } from "./components/dropdown.js";

console.log("hello world");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

setupDropdown(dropdownButton, dropdownMenu);

const habitForm = document.getElementById("habitForm");

habitForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents page from reloading

  // get input element
  const input = document.getElementById("notes");
  const value = input.value;

  localStorage.setItem("habit", value);

  alert("saved: " + value);
  input.value = "";
});
