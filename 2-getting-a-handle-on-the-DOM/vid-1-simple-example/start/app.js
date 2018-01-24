const myHeading = document.getElementById('myHeading');
const mybtn = document.getElementById('mybtn');
const myTextInput = document.getElementById('myTextInput');
const changeText = document.getElementById('changeText');
const changeTxt = document.getElementById('changeTxt');
const pInput = document.getElementById('pInput');

mybtn.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
    // myHeading.style.color = '#E94A61';
});


changeTxt.addEventListener("click", () => {
    changeText.textContent = pInput.value;
});