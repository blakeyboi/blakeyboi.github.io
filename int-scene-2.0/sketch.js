// Interactive Scene 2.0
// Blake Tierney
// March 3, 2020
//
// Extra for Experts:
// - applied sound

let penSizeX = 5;
let penSizeY = 5;
let i = 0;
let penColourR = 250;
let penColourG = 250;
let penColourB = 250;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  pen();
}

function pen() {
  noStroke;
  if (mouseIsPressed) {
    fill(penColourR, penColourG, penColourB);
    ellipse(mouseX, mouseY, penSizeX, penSizeY);
  }
}

function keyPressed() {
  if (key === " ") {
    background("white");
    penColourR = 250;
    penColourG = 250;
    penColourB = 250;
  }
  if (key === "r") {
    penColourR -= 10;
  }
  if (key === "g") {
    penColourG -= 10;
  }
  if (key === "b") {
    penColourB -= 10;
  }
  if (key === "c") {
    penColourR = 250;
    penColourG = 250;
    penColourB = 250;
  }
}

function mouseWheel(event) {
  if (event.delta < 0) {
    penSizeX += 5;
    penSizeY += 5;
  }
  if (event.delta > 0) {
    penSizeX -= 5;
    penSizeY -= 5;
  }
}