const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');


const input = document.querySelector("input.description");
const descritionP = document.querySelector("p.description");
// const button = document.querySelector('#btn'); // Both Ways Works
const descritionButton = document.querySelector("button.description");
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');



toggleList.addEventListener("click", () => {

    //ternary Operator style
    listDiv.style.display === "none" ?
        ((listDiv.style.display = "block"), (toggleList.textContent = "Hide List")) :
        ((toggleList.textContent = "Show List"), (listDiv.style.display = "none"));

    // if (listDiv.style.display === "none") {
    //     listDiv.style.display = "block";
    // } else {
    //     listDiv.style.display = "none";
    // }
})



// button.addEventListener('click', () => {
//     p.textContent = input.value + ' :';
// })
descritionButton.addEventListener("click", () => {
    descritionP.innerHTML = input.value + " :";
    input.value = '';
});



// p.title = "List Description";



addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.innerHTML = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
    li.className = "newClass";
})


removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
})