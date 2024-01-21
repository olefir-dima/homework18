import { updateView } from "./updateView.js";
import { calcStatistics } from "./calcStatistics.js";

document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("userInput");
  const calcBtn = document.getElementById("calcBtn");

  calcBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (text === "") {
      alert("Enter some text");
      return;
    }
    const statistics = calcStatistics(text);
    updateView(statistics);
  });
});
