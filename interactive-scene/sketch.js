// Platformer
// Blake Tierney
// 2/25/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let mario;
let marioX;
let marioY;
let marioDX = 5;
let marioDY = 5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;

function preload() {
  mario = loadImage("assets/mario.png");
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  marioX = width/2;
  marioY = height/2;
}
// draw function
function draw() {
  background(220);
  displayMario();
  moveMario();
}
// moving with keys
function keyPressed() {
  if (key === "w") {
    movingUp = true;
  }
  if (key === "a") {
    movingLeft = true;
  }
  if (key === "s") {
    movingDown = true;
  }
  if (key === "d") {
    movingRight = true;
  }
}

function keyReleased() {
  if (key === "w") {
    movingUp = false;
  }
  if (key === "a") {
    movingLeft = false;
  }
  if (key === "s") {
    movingDown = false;
  }
  if (key === "d") {
    movingRight = false;
  }
}

function moveMario() {
  if (movingUp) {
    marioY -= marioDY;
  }
  if (movingLeft) {
    marioX -= marioDX;
  }
  if (movingDown) {
    marioY += marioDY;
  }
  if (movingRight) {
    marioX += marioDX;
  }
}

function displayMario() {
  image(mario, marioX, marioY, 100, 100);
}

