import { elAiHand, elHumanHand, elScore, elStatus } from "./html-selection.js";

export function uiChangerByWinner(state) {
  const elTitle = elStatus.querySelector(".status__title");
  if (state === "tie") {
    elStatus.style.display = "block";
    elTitle.textContent = "You tied";
  } else if (state === "user") {
    elStatus.style.display = "block";
    elTitle.textContent = "You win";
    elHumanHand.classList.add("win-shadow");
    elScore.innerText = +elScore.innerText + 1;
  } else if (state === "ai") {
    elStatus.style.display = "block";
    elTitle.textContent = "You lose";
    elAiHand.classList.add("win-shadow");
    if (+elScore.innerText > 0) {
      elScore.innerText = +elScore.innerText - 1;
    }
  } else {
    console.error("Bunday tur mavjud emas");
  }
}