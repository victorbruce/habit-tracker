console.log("hello world");

export function sum(a, b) {
  return a + b;
}

const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

document.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", () => {
    dropdownMenu.classList.add("hidden");
    // You can also update button text here if needed
    // dropdownButton.textContent = item.textContent;
  });
});

document.addEventListener("click", (event) => {
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.add("hidden");
  }
});
