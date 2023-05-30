function finderItem(data, element) {
  const { title } = data;
  const finderData = document.createElement("div");
  finderData.classList.add("choose");

  const elementTitle = document.createElement(element);
  elementTitle.textContent = title;
  const selectorData = document.createElement("div");
  selectorData.classList.add("all-selector");
  const selectElement = document.createElement("select");
  const optionElement = document.createElement("option");
  optionElement.classList.add("selector");
  optionElement.value = "visos";
  optionElement.textContent = "Visos";
  selectElement.append(optionElement);
  selectorData.append(selectElement);
  finderData.append(elementTitle, selectorData);

  return finderData;
}

function createElement(tag, title) {
  const elementTitle = document.createElement(tag);
  elementTitle.textContent = title;
  return elementTitle;
}

export default finderItem;
