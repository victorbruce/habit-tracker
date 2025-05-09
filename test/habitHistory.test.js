import { populateHistory } from "../src/components/habitHistory";

describe("populate history", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="history__container"></div>`;
    localStorage.clear();
  });

  test("renders habit cards from localStorage", () => {
    const mockHabits = [
      {
        activity: "Shoulders",
        notes: "Felt strong today!",
        status: "Todo",
        id: "123",
        date: Date.now(),
      },
    ];

    localStorage.setItem("habits", JSON.stringify(mockHabits));

    // Act
    populateHistory();
    // Assert
    const habitCard = document.querySelector(".history__container");

    expect(habitCard).not.toBeNull();

    const title = habitCard.querySelector("h3");
    expect(title.textContent).toBe("Felt strong today!");

    const status = habitCard.querySelector(".status-card");
    expect(status.textContent.toLowerCase()).toBe("todo");
  });
});
