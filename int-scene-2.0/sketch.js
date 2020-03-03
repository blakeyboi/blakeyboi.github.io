// Interactive Scene 2.0
// Blake Tierney
// March 3, 2020
//
// Extra for Experts:
// - applied sound

let penSizeX = 5;
let penSizeY = 5;
let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke;
}

function draw() {
  pen();
}

function pen() {
  if (mouseIsPressed) {
    fill("black");
    ellipse(mouseX, mouseY, penSizeX, penSizeY);
  }
  else {
    fill("white");
  }
}

function mouseReleased() {
  fill("white");
}