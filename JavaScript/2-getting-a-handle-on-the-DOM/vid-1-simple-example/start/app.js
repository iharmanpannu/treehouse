// // function getRandomColor() {
// //     var letters = "0123456789ABCDEF";
// //     var color = "#";
// //     for (var i = 0; i < 6; i++) {
// //         color += letters[Math.floor(Math.random() * 16)];
// //     }
// //     return color;
// // }




// const myHeading = document.getElementById('myHeading');
// const mybtn = document.getElementById('mybtn');
// const myTextInput = document.getElementById('myTextInput');
// const changeText = document.getElementById('changeText');
// const changeTxt = document.getElementById('changeTxt');
// const pInput = document.getElementById('pInput');

// mybtn.addEventListener('click', () => {
//     myHeading.style.color = myTextInput.value;
//     // myHeading.style.color = getRandomColor();
// });


// changeTxt.addEventListener("click", () => {
//     changeText.textContent = pInput.value;
// });

// document.getElementById('sayPhrase');


// // const myHeadings = document.getElementsByTagName('h1')[0];
// // mybtn.addEventListener('click', () => {
// //     myHeadings.style.color = myTextInput.value;
// //     myHeading.style.color = '#E94A61';
// // });

function getRandomColor() {
    let letter = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}




// const colors = document.getElementsByTagName('li');
// const bodyColor = document.getElementById('body-color');



// bodyColor.addEventListener("click", () => {
//     colors.style.backgroundColor = getRandomColor();
//     colors.style.color = getRandomColor();
// })

// // const allPTages = document.querySelectorAll('p')[0, 1, 2];
// // const changePara = document.getElementById('change-para');

// // changePara.addEventListener("click", () => {
// //     allPTages.style.color = getRandomColor();
// // })



// const evens = document.querySelectorAll('li:nth-child(odd), p');
// // const evens = document.querySelectorAll('li', );

// for (let i = 0; i < evens.length; i++) {
//     evens[i].style.backgroundColor = getRandomColor();
// }


const evens = document.querySelectorAll('.hello');
evens.style.color = getRandomColor();