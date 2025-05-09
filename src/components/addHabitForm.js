import { saveToStorage } from "../utils/storage.js";

export function addHabitForm(formElement, inputElement, storageKey) {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents page reload

    const value = inputElement.value;
    saveToStorage(storageKey, value);
    inputElement.value = "";
  });
}
