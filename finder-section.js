import finderTimeItem from "./finder-time.js";
import { finder_timeData } from "./config.js";
export default function finderSection(finder) {
  const timeField = document.createElement("fieldset");
  const timeTitle = document.createElement("legend");
  timeTitle.classList.add("time");
  timeTitle.textContent = "Laikas";
  finder.append(timeTitle, timeField);
  finder_timeData.forEach((finderTimeData) => {
    const finderTimeElement = finderTimeItem(finderTimeData, "time");
    timeField.append(finderTimeElement);
    finder.append(timeField);
  });
}
