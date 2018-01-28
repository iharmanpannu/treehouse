const form = document.getElementById("registrar");
const input = document.querySelector("input");
const ul = document.getElementById("invitedList");
const li = document.createElement("li");
const removeButton = document.createElement("button");

form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value;
  input.value = "";

  const label = document.createElement("label");
  const checkBox = document.createElement("input");

  li.textContent = text;
  ul.appendChild(li);

  label.textContent = "Confirmed";
  label.appendChild(checkBox);
  li.appendChild(label);

  checkBox.type = "checkBox";
  checkBox.className = "checkBox";
});

ul.addEventListener("change", e => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  checked === true
    ? (listItem.className = "responded")
    : (listItem.className = "");
});

removeButton.addEventListener("click", e => {
  removeButton.textContent = "Remove";
  //   removeButton.type = "submit";
  li.appendChild(removeButton);
});
