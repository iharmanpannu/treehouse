const form = document.getElementById("registrar");
const input = document.querySelector("input");
const ul = document.getElementById("invitedList");

//This function cretes a list Items
function createLI(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const removeButton = document.createElement("button");
  const label = document.createElement("label");
  const checkBox = document.createElement("input");
  const editButton = document.createElement("button");

  // List text
  span.textContent = text;
  li.appendChild(span);
  // Item Label
  label.textContent = "Confirmed";
  label.appendChild(checkBox);
  li.appendChild(label);
  // Check Box
  checkBox.type = "checkBox";
  checkBox.className = "checkBox";
  // Edit Button
  editButton.textContent = "Edit";
  li.appendChild(editButton);
  //Remove Button
  removeButton.textContent = "Remove";
  li.appendChild(removeButton);
  return li;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value;
  input.value = "";
  const li = createLI(text);
  ul.appendChild(li);
});
// Change Button
ul.addEventListener("change", e => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  checked === true
    ? (listItem.className = "responded")
    : (listItem.className = "");
});
ul.addEventListener("click", e => {
  if (event.target.tagName === "BUTTON") {
    if (event.target.textContent === "Remove") {
      const li = e.target.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    }
  }
});

// Remove Button
ul.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    const span = li.firstElementChild;
    const input = document.createElement("input");
    if (button.textContent === "Remove") {
      ul.removeChild(li);
    } else if (button.textContent === "Edit") {
      //Edit Button

      input.type = "text";
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = "Save";
    } else if (button.textContent === "Save") {
      li.textContent = span.value;
    }
  }
});
