export function createEmptyState() {
  const emptyStateDiv = document.createElement("div");
  emptyStateDiv.classList.add("empty-state");

  emptyStateDiv.innerHTML = `
    <p class="habits__empty">Looks like you haven't added any habits yet. Start by adding a new habit!</p>
  `;

  return emptyStateDiv;
}
