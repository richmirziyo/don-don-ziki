import { aiChooser } from "./ai-chooser.js";
import { checkWinner } from "./check-winner.js";
import {
  elAiHand,
  elGameZone,
  elGameZonePicker,
  elHands,
  elHumanHand,
  elRefreshGame,
  elStatus,
} from "./html-selection.js";
import { initialState } from "./settings.js";
import { uiChangerByWinner } from "./ui-changer-by-winner.js";
import { uiChanger } from "./ui-changer.js";

elHands.forEach((hand) => {
  hand.addEventListener("click", function (event) {
    const clickedElement = event.target;
    const chosenHand = clickedElement.querySelector(".game-zone__img");
    elHumanHand.src = chosenHand.src;

    const chosenHandAi = aiChooser(initialState.mode);

    setTimeout(function () {
      elAiHand.src = `img/${chosenHandAi}.svg`;
      console.log(checkWinner(chosenHand.alt, chosenHandAi));
      const currentAction = checkWinner(chosenHand.alt, chosenHandAi);
    }, 1000);
    uiChanger("elGameZone");
  });
});

// Refresh Game

elRefreshGame.addEventListener("click", function () {
  uiChanger("elGameZonePicker");
  elAiHand.src = "img/oval.svg";
  elAiHand.classList.remove("win-shadow");
  elHumanHand.classList.remove("win-shadow");
  elStatus.style.display = "none ";
});
const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

showBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
