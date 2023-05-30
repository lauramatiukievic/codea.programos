import { programs_data } from "./config.js";
import programsContent from "./programs.js";

export default function programsWrapper() {
  const programItem = document.createElement("div");
  programItem.classList.add("col-8", "m-0", "p-0");

  const programsContainer = document.createElement("div");
  programsContainer.classList.add("row", `gap-3`);

  programs_data.forEach((program) => {
    const programsData = programsContent(program);
    if (programsData) {
      programsContainer.append(programsData);
    }
  });
  programItem.append(programsContainer);
  return programItem;
}
