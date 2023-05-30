import finderItem from "./finder.js";
import { finder_data, programs_data } from "./config.js";

export default function finderFilter(finder) {
  const filteredProgram = programs_data.filter((program) => {
    const { iconTitle, srcName, title, p, src, level, srcNext, imageTitle } = program;
    if (iconTitle === "" || srcName === "" || srcName === "" || title === "" || p === "" || src === "" || level === "" || srcNext === "" || imageTitle === "") {
      return false;
    }
    return true;
  });

  const finderTitle = document.createElement("h2");
  finderTitle.innerHTML = `Rastos ${filteredProgram.length} programos`; //

  finder.append(finderTitle);
  finder_data.forEach((finderData) => {
    const finderItemElement = finderItem(finderData, "h3");
    finder.append(finderItemElement);
  });
}
