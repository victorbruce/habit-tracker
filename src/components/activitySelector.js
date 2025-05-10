import { setSelectedActivity } from "../state/state.js";

let selectedButton = null;

export function setupActivitySelection(container) {
  const items = container.querySelectorAll("li");

  items.forEach((li) => {
    const button = li.querySelector("button");
    const label = li.querySelector("p");

    if (!button || !label) return;

    button.addEventListener("click", () => {
      const activity = label.textContent.trim();

      if (activity) {
        setSelectedActivity(activity);

        // remove old highlight
        if (selectedButton) {
          selectedButton.classList.remove("selected");
        }

        // set new selected button
        selectedButton = button;
        button.classList.add("selected");
      }
    });
  });
}

export function resetActivitySelection() {
  if (selectedButton) {
    selectedButton.classList.remove("selected");
    selectedButton = null;
  }
  setSelectedActivity(null);
}
