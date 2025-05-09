import { setSelectedActivity } from "../state/state.js";

export function setupActivitySelection(container) {
  const items = container.querySelectorAll("li");

  items.forEach((li) => {
    li.addEventListener("click", () => {
      const activity = li.querySelector("p")?.textContent.trim();

      if (activity) {
        setSelectedActivity(activity);

        // highlit selected
        items.forEach((i) => i.classList.remove("selected"));
        li.classList.add("selected");
      }
    });
  });
}
