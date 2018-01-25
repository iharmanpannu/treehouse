const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const input = document.querySelector("input.description");
const p = document.querySelector('p.description');
// const button = document.querySelector('#btn'); // Both Ways Works
const button = document.querySelector("button.description");


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
button.addEventListener('click', () => {
    p.innerHTML = input.value + ' :';
})

const a = {
    currentVal: 0,
    valueOf: function() {
        return this.currentVal += 1
    }
};
const equality = (
    a === 1 && a == 2 && a == 3
);

console.log(equality);

// p.title = "List Description";