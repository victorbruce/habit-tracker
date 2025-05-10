import { setSelectedActivity } from "../state/state.js";

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

        // remove 'selected' from all buttons
        container
          .querySelectorAll("button")
          .forEach((btn) => btn.classList.remove("selected"));

        // add to the clicked one
        button.classList.add("selected");
      }
    });
  });
}
