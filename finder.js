function finderItem(data) {
  const { h3 } = data;
  const finderData = document.createElement("div");
  finderData.classList.add("choose");

  const elementTitle = document.createElement("h3");
  elementTitle.textContent = h3;
  const selectorData = document.createElement("div");
  selectorData.classList.add("all-selector");
  const selectElement = document.createElement("select");
  const optionElement = document.createElement("option");
  optionElement.classList.add("selector");
  optionElement.value = "visos";
  optionElement.innerHTML = "Visos";
  selectElement.append(optionElement);
  selectorData.append(selectElement);
  finderData.append(elementTitle, selectorData);

  return finderData;
}

export default finderItem;
