// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let shoe;
let scalar = 1.0;

function preload() {
  shoe = loadImage("assets/gear.jpg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
}

function draw() {
  background(220);
  fill("lime")
  // circle(mouseX - 10, mouseY - 10, 100)
  image(shoe, mouseX - 50, mouseY - 50, scalar*shoe.width, scalar*shoe.height)
}


