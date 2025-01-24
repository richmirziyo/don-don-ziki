import { hands } from "./hands.js";
import { initialState } from "./settings.js";

export function aiChooser(mode, humanHand) {
  if (mode === "easy") {
    const randomIndex = Math.trunc(Math.random() * hands.length);
    return hands[randomIndex];
  } else if (mode === "hard") {
    //...
  } else {
    console.error("Bunday holat mavjud emas");
  }
}