console.log("ello");
const canvas = document.querySelector("#canvas");
// const cavas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

width = window.innerWidth;
height = window.innerHeight;

ctx.fillRect(0, 0, width, height);

let count = 0;

while (count < 50000) {
  setTimeout(() => {
    let x = getRandom(width);
    let y = getRandom(height);
    let red = getRandom(255);
    let green = getRandom(255);
    let blue = getRandom(255);
    ctx.fillStyle = `rgba(${red},${green},${blue},0.55)`;
    ctx.fillRect(x, y, 50, 50);
  }, 1000);
  count += 1;
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
