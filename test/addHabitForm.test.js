/**
 * @jest-environment jsdom
 */

import { addHabitForm } from "../src/components/addHabitForm";

describe("Adding an Habit and saving to LocalStorage", () => {
  let form, input;

  beforeEach(() => {
    document.body.innerHTML = `
		<form class="habit__form" id="habitForm">
			<div>
				<label for="notes">Add notes</label>
				<input
					type="text"
					id="notes"
					placeholder="how was today's session"
				/>
			</div>
			<button type="submit">Save</button>
		</form>
		`;

    // get form
    form = document.getElementById("habitForm");

    // get input
    input = document.getElementById("notes");
    addHabitForm(form, input, "habit");
  });

  test("input field has a value", () => {
    let testValue = "I am good!";
    input.value = testValue;
    form.dispatchEvent(new Event("submit", { bubbles: true }));
    expect(localStorage.getItem("habit")).toBe(testValue);
  });
});
