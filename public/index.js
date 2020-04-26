console.log("ello");
const canvas = document.querySelector("#canvas");
// const cavas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let x = 0,
  y = 0;

var width = window.innerWidth;
var height = window.innerHeight;

let count = 0;
const time = 100000;

ctx.fillRect(0, 0, width, height);

while (count < time) {
  setTimeout(() => {
    let red = clamp(0, 150);
    let green = clamp(0, 50);
    let blue = clamp(200, 210);
    ctx.fillStyle = `rgba(${red},${green},${blue},0.35)`;
    ctx.fillRect(wand(count, width).x, wand(count, width).y, 20, 20);
  }, 100);
  count += 1;
}

function wand(count, width) {
  const delay = 10000;

  const coord = {
    x: 200,
    y: getRandom(height),
  };

  return coord;
}

function clamp(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
