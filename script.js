console.log("ar veikia");
import finderWrapper from "./finder-wrapper.js";
import programsWrapper from "./programs-wrapper.js";
import titleWrapper from "./title-wrapper.js";
function init() {
  const titleContentElement = document.querySelector("#main-container");

  const mainContentElement = document.createElement("div");
  mainContentElement.classList.add("all-container", "m-0", "p-0", "-xll");

  const content = document.createElement("div");
  content.classList.add("row", "g-3", "m-0", "p-0");
  titleContentElement.append(titleWrapper("Programos"), mainContentElement);
  content.append(finderWrapper(), programsWrapper());
  mainContentElement.append(content);
}

init();
