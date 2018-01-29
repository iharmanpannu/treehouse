// let html = "";
// let rgbColor;

// function randomRGB() {
//   return Math.floor(Math.random() * 256);
// }

// function randomColor() {
//   let color = `rgb(${randomRGB}, ${randomRGB}, ${randomRGB})`;
//   return color;
// }

// function randomColors() {
//   for (let i = 1; i <= 10; i++) {
//     rgbColor = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
//     html += `<div style="background-color:${rgbColor}"></div>`;
//   }
//   document.write(html);
// }

// randomColors();


// function random() {
//   for(let i = 2; i <= 24; i = i + 2)
//   console.log(i);
// }
// random();

  for (let i = 2; i <= 24; i = i + 2) {
    console.log(i);
  }
 

var playList = ["I Did It My Way", "Respect", "Imagine", "Born to Run", "Louie Louie", "Maybellene"];

function print(message) {
  document.write(message);
}

function printList(list) {
  var htmlList = '<ul>';
  for( var i = 0; i < list.lenght; i++ ) {
    htmlList+= `<li> ${list[i]} </li>`;
    htmlList+= "</ul>";
  }
  print(htmlList);
}
printList(playList);