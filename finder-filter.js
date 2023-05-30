import finderItem from "./finder.js";
import { finder_data, programs_data } from "./config.js";

export default function finderFilter(finder) {
  const finderTitle = document.createElement("h2");
  finderTitle.innerHTML = `Rastos ${programs_data.length} programos`; //
  finder.append(finderTitle);
  finder_data.forEach((finderData) => {
    const finderItemElement = finderItem(finderData, "h3");
    finder.append(finderItemElement);
  });
}
