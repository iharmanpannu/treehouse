const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector("input.description");
const descriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
// const removeItemButton = document.querySelector("button.removeItemButton");
const listUl = document.querySelector("ul");
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = "#EB9561";
lastListItem.style.backgroundColor = "#FDEBD4";

function attachListItemButtons(li) {
  let up = document.createElement("button");
  let down = document.createElement("button");
  let remove = document.createElement("button");
  up.className = "up";
  up.textContent = "Up";
  li.appendChild(up);

  down.className = "down";
  down.textContent = "Down";
  li.appendChild(down);

  remove.className = "remove";
  remove.textContent = "Remove";
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i++) {
  attachListItemButtons(lis[i]);
}

listUl.addEventListener("click", e => {
  if (event.target.tagName === "BUTTON") {
    if (event.target.className === "remove") {
      let li = e.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className === "up") {
      let li = e.target.parentNode;
      let preli = li.previousElementSibling;
      let ul = li.parentNode;
      if (preli) {
        ul.insertBefore(li, preli);
      }
    }
    if (event.target.className === "down") {
      let li = e.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }

    // let bold = e.target.previousElementSibling;
    // if () {
    //   bold.className = "bold";
    // }
  }
});

// listDiv.addEventListener("click", e => {
//   if (event.target.tagName === "BUTTON") {

//   }
// });

// listDiv.addEventListener('mouseover', (event) => {
//   if (event.target.tagName == 'LI') {
//     event.target.textContent = event.target.textContent.toUpperCase();
//   }
// });
// listDiv.addEventListener('mouseout', (event) => {
//   if (event.target.tagName == 'LI') {
//     event.target.textContent = event.target.textContent.toLowerCase();
//   }
// });

toggleList.addEventListener("click", () => {
  if (listDiv.style.display == "none") {
    toggleList.textContent = "Hide list";
    listDiv.style.display = "block";
  } else {
    toggleList.textContent = "Show list";
    listDiv.style.display = "none";
  }
});

descriptionButton.addEventListener("click", () => {
  descriptionP.innerHTML = descriptionInput.value + ":";
  descriptionInput.value = "";
});
addItemButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = "";
});

// removeItemButton.addEventListener("click", () => {
//   let ul = document.getElementsByTagName("ul")[0];
//   let li = document.querySelector("li:last-child");
//   ul.removeChild(li);
// });
