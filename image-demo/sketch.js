// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let star;
let scalar = 1.0;

function preload() {
  star = loadImage("assets/gear.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);
  fill("lime")
  // circle(mouseX - 10, mouseY - 10, 100)
  image(star, mouseX - (width/2), mouseY - (height/2), scalar*star.width, scalar*star.height)
}

function mouseWheel(event) {
  print(event.delta);
  if (event.delta < 0) {
    scalar *= 1.1;
  }
  else {
    scalar *= 0.9;
  }
}

