import { elGameZone, elGameZonePicker } from "./html-selection.js";

export function uiChanger(type) {
  if (type === "elGameZone") {
    elGameZone.style.display = "none";
    elGameZonePicker.style.display = "block";
  } else if (type === "elGameZonePicker") {
    elGameZonePicker.style.display = "none";
    elGameZone.style.display = "block";
  } else {
    console.error("Bunday tur mavjud emas");
  }
}