// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let star;

function preload() {
  star = loadImage("assets/gear.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
}

function draw() {
  background(220);
  fill("lime")
  // circle(mouseX - 10, mouseY - 10, 100)
  image(star, mouseX - 50, mouseY - 50, 100, 100)
}
