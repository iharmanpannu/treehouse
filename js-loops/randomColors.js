let html = "";
let red;
let green;
let blue;
let rgbColor;

function randomColors() {
  for (let i = 1; i <= 10; i++) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    rgbColor = `rgb(${red},${green},${blue})`;
    html += `<div style="background-color:${rgbColor}"></div>`;
  }
  document.write(html);
}

randomColors();
