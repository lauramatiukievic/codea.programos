import finderSection from "./finder-section.js";

import finderFilter from "./finder-filter.js";
export default function finderWrapper() {
  const finderContainer = document.createElement("div");
  finderContainer.classList.add("col-4", "row");

  const finderContent = document.createElement("div");
  finderContent.classList.add("row");

  const finder = document.createElement("div");
  finder.classList.add("finder", "col-12");

  const finderButtonElement = document.createElement("div");

  finderButtonElement.classList.add("button");
  finderButtonElement.textContent = "Išvalyti";

  finderFilter(finder);

  finderSection(finder);

  finder.append(finderButtonElement);
  finderContent.append(finder);
  finderContainer.append(finderContent);

  return finderContainer;
}
