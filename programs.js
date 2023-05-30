export default function programsContent(data) {
  const { iconTitle, srcName, title, p, src, level, srcNext, imageTitle } = data;
  if (srcName === "" || srcName === "" || title === "" || p === "" || src === "" || level === "" || srcNext === "" || imageTitle === "") {
    return;
  }
  const programsContainer = document.createElement("div");
  programsContainer.classList.add("programs", `col`);

  if (iconTitle !== "") {
    const rightButton = document.createElement("div");
    rightButton.classList.add("right-pink");
    const sideText = document.createElement("div");
    sideText.classList.add("right-icon");

    rightButton.append(sideText);
    sideText.textContent = iconTitle;
    programsContainer.append(rightButton);
  }

  const programDiv = document.createElement("div");
  programDiv.classList.add("program-icon");
  const programImage = document.createElement("img");
  programImage.classList.add("icon");
  programImage.src = srcName;
  programImage.innerHTML = srcName;
  programDiv.append(programImage);
  const programTitle = document.createElement("h2");
  programTitle.innerHTML = title;
  const programPara = document.createElement("p");
  programPara.classList.add("about");
  programPara.innerHTML = p;
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icons-container");
  const levelDiv = document.createElement("div");
  levelDiv.classList.add("icons");
  const levelIcon = document.createElement("div");
  levelIcon.classList.add("mini-icons");
  const levelImage = document.createElement("img");
  levelImage.src = src;
  levelImage.innerHTML = src;
  const levelTitle = document.createElement("h4");
  levelTitle.innerHTML = level;
  const timeDiv = document.createElement("div");
  timeDiv.classList.add("icons");
  const timeIcon = document.createElement("div");
  timeIcon.classList.add("mini-icons");
  const timeImage = document.createElement("img");
  timeImage.src = srcNext;
  timeImage.innerHTML = srcNext;
  const timeTitle = document.createElement("h4");
  timeTitle.innerHTML = imageTitle;
  timeIcon.append(timeImage, timeTitle);
  timeDiv.append(timeIcon);

  levelIcon.append(levelImage, levelTitle);
  levelDiv.append(levelIcon);
  iconContainer.append(levelDiv, timeDiv);
  programsContainer.append(programDiv, programTitle, programPara, iconContainer);

  return programsContainer;
}
