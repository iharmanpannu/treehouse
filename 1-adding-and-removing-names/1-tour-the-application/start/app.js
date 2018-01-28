const form = document.getElementById("registrar");
const input = document.querySelector("input");
const ul = document.getElementById("invitedList");

//This function cretes a list Items
function createLI(text) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const label = document.createElement("label");
  const checkBox = document.createElement("input");

  li.textContent = text;

  label.textContent = "Confirmed";
  label.appendChild(checkBox);
  li.appendChild(label);

  checkBox.type = "checkBox";
  checkBox.className = "checkBox";

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
