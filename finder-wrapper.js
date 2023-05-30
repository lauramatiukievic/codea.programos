import { finder_data, finder_timeData } from "./config.js";
import finderItem from "./finder.js";
import finderTimeItem from "./finder-time.js";
export default function finderWrapper() {
  const finderContainer = document.createElement("div");
  finderContainer.classList.add("col-4", "row");

  const finderContent = document.createElement("div");
  finderContent.classList.add("row");

  const finder = document.createElement("div");
  finder.classList.add("finder", "col-12");

  const finderTitle = document.createElement("h2");
  finderTitle.innerHTML = `Rastos 48 programos`;
  finder.append(finderTitle);
  finder_data.forEach((finderData) => {
    const finderItemElement = finderItem(finderData);
    finder.append(finderItemElement);
  });

  const timeTitle = document.createElement("h3");
  timeTitle.classList.add("time");
  timeTitle.innerHTML = "Laikas";
  finder.append(timeTitle);
  finder_timeData.forEach((finderTimeData) => {
    const finderTimeElement = finderTimeItem(finderTimeData);
    finder.append(finderTimeElement);
  });

  const finderButtonElement = document.createElement("div");

  finderButtonElement.classList.add("button");
  finderButtonElement.textContent = "Išvalyti";

  finder.append(finderButtonElement);
  finderContent.append(finder);
  finderContainer.append(finderContent);

  return finderContainer;
}
