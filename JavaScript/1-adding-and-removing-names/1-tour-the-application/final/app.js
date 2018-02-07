const form = document.getElementById("registrar");
const ul = document.getElementById("invitedList");
const input = form.querySelector("input");

form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value;
  input.value = "";

  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);

  const label = document.createElement("label");
  label.textContent = "Confirmed";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  label.appendChild(checkbox);
  li.appendChild(label);

  const remove = document.createElement("button");
  remove.textContent = "Remove";
  li.appendChild(remove);

  //   const editBtn = document.createElement("button");
  //   editBtn.textContent = "edit";
  //   li.appendChild(editBtn);

  //   editBtn.addEventListener("click", () => {});
});

ul.addEventListener("change", e => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if (checked) {
    listItem.className = "responded";
  } else {
    listItem.className = "";
  }
});

ul.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
  }
});
