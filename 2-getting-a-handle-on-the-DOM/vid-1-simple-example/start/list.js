const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = '#E94A61';
}


const errorNotPurple = document.getElementsByClassName("error-not-purple");
for (let i = 0; i < errorNotPurple.length; i++) {
    errorNotPurple[i].style.color = "#000";
}