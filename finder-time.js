function finderTimeItem(data, id) {
  const { label } = data;
  const selectTime = document.createElement("div");

  const timeData = document.createElement("div");
  const timeInputElement = document.createElement("input");
  timeInputElement.classList.add("checkbox");
  timeInputElement.type = "checkbox";
  timeInputElement.id = id;
  const timeLabel = document.createElement("label");
  timeLabel.for = id;
  timeLabel.innerHTML = label;

  timeData.append(timeInputElement, timeLabel);
  selectTime.append(timeData);

  return selectTime;
}

export default finderTimeItem;
