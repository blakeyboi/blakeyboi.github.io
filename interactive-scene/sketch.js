// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let goat;
let scalar = 1.0;

function preload() {
  goat = loadImage("assets/lamar-throwing.jpg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
}

function draw() {
  background(220);
  fill("lime")
  // circle(mouseX - 10, mouseY - 10, 100)
  image(goat, mouseX - (width/2), mouseY - (height/2), scalar*goat.width, scalar*goat.height)
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
