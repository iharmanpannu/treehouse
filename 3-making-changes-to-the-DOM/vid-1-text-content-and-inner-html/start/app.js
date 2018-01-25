const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');



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

button.addEventListener("click", () => {
    p.innerHTML = input.value + " :";
});


// button.addEventListener('click', () => {
//     p.textContent = input.value + ' :';
// })




// p.title = "List Description";