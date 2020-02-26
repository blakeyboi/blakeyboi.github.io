// platformer
// Blake Tierney
// 2/25/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let mario;
let marioX;
let marioY;
let marioDY = 5;
let movingUp = false;

function preload() {
  mario = loadImage("assets/mario.png");
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  marioX = width;
  marioY = height;
}
// draw function
function draw() {
  background(220);
  displayMario();
  moveMario();
}
// moving with keys
function keyPressed() {
  if (key === " ") {
    movingUp = true;
  }
}

function keyReleased() {
  if (key === " ") {
    movingUp = false;
  }
}

function moveMario() {
  if (movingUp) {
    marioY -= marioDY;
  }
}

function displayMario() {
  image(mario, marioX, marioY, 100, 100);
}

