const form = document.getElementById("registrar");
const input = document.querySelector("input");
const ul = document.getElementById("invitedList");
const li = document.createElement("li");

//This function cretes a list Items
function createLI(text) {
  const button = document.createElement("button");
  const label = document.createElement("label");
  const checkBox = document.createElement("input");
  const editButton = document.createElement("button");

  li.textContent = text;
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
  button.textContent = "Remove";
  li.appendChild(button);
  return li;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value;
  input.value = "";
  const li = createLI(text);
  ul.appendChild(li);
});
// Class to change color on checkBox Clicked
ul.addEventListener("change", e => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  checked === true
    ? (listItem.className = "responded")
    : (listItem.className = "");
});

// Remove Button
ul.addEventListener("click", e => {
  if (event.target.tagName === "BUTTON") {
    if (event.target.textContent === "Remove") {
      const li = e.target.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    }
  }
});

// Edit Button
ul.addEventListener("click", e => {
  if (event.target.tagName === "BUTTON") {
    if (event.target.textContent === "Edit") {
      li.textContent = input.value;
    }
  }
});
