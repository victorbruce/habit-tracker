/**
 * @jest-environment jsdom
 */

import { setupDropdown } from "../src/components/dropdown";

describe("Dropdown functionality", () => {
  let button, menu, item;

  beforeEach(() => {
    document.body.innerHTML = `
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
				<li class="dropdown-item">Todo</li>
				<li class="dropdown-item">Progress</li>
				<li class="dropdown-item">Completed</li>
			</ul>
		</div>
		`;

    button = document.getElementById("dropdownButton");
    menu = document.getElementById("dropdownMenu");
    item = menu.querySelector(".dropdown-item");

    setupDropdown(button, menu);
  });

  test("toggle menu visibility on button click", () => {
    expect(menu.classList.contains("hidden")).toBe(true);
    button.click();
    expect(menu.classList.contains("hidden")).toBe(false);
  });

  test("closes menu when item is clicked", () => {
    button.click(); // open menu
    item.click();
    expect(menu.classList.contains("hidden")).toBe(true);
  });

  test("closes menu when clicking outside", () => {
    button.click(); // open menu
    document.body.click(); // close menu when clicking outside
    expect(menu.classList.contains("hidden")).toBe(true);
  });
});
