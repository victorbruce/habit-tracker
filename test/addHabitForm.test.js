/**
 * @jest-environment jsdom
 */

import { addHabitForm } from "../src/components/addHabitForm";

describe("Adding an Habit and saving to LocalStorage", () => {
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
    
    localStorage.clear();
  });

  test("saves a habit to localStorage with selected activity", () => {
    const mockGetSelectedActivity = () => "Shoulders";

    const form = document.getElementById("habitForm");
    const input = document.getElementById("notes");
    input.value = "Test Note";

    addHabitForm(form, input, mockGetSelectedActivity);
    form.dispatchEvent(new Event("submit", { bubbles: true }));

    const saved = JSON.parse(localStorage.getItem("habits"));
    expect(saved.length).toBe(1);
    expect(saved[0]).toMatchObject({
      activity: "Shoulders",
      notes: "Test Note",
    });
  });
});
