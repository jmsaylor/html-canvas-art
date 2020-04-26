console.log("ello");
const canvas = document.querySelector("#canvas");
// const cavas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

width = window.innerWidth;
height = window.innerHeight;

ctx.fillRect(0, 0, width, height);

let count = 0;

while (count < 100000) {
  setTimeout(() => {
    let x = getRandom(width);
    let y = getRandom(height);
    let red = clamp(0, 150);
    let green = clamp(0, 50);
    let blue = clamp(200, 210);
    ctx.fillStyle = `rgba(${red},${green},${blue},0.35)`;
    ctx.fillRect(x, y, 10, 10);
  }, 100);
  count += 1;
}

function clamp(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
