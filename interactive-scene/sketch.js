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
let movingDown = false;
let wallX;
let wallY;
let wallW = 50;
let wallH = 50;
let wallDX = 5;

function preload() {
  mario = loadImage("assets/mario.png");
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  marioX = width/7;
  marioY = height - height/7;
  wallX = width;
}
// draw function
function draw() {
  background(220);
  displayMario();
  moveMario();
  displayWall();
  moveWall();
}
// moving with keys
function keyPressed() {
  if (key === " ") {
    movingUp = true;
    movingDown = false;
  }
}

function keyReleased() {
  if (key === " ") {
    movingDown = true;
    movingUp = false;
  }
}

function moveMario() {
  if (marioY <= height - height/7) {
    if (movingUp) {
      marioY -= marioDY;
    }
    if (movingDown) {
      marioY += marioDY;
    }
  }
  else {
    movingUp = false;
    movingDown = false;
    marioY = height - height/7;
  }
}
// making mario appear
function displayMario() {
  image(mario, marioX, marioY, 100, 100);
}

// making walls move
function moveWall() {
  wallY = random(height/5, height);
  // if (wallX >= 0) {
    wallX -= wallDX;
  // }
}

// making walls appear
function displayWall() {
  fill("black");
  rect(wallX, wallY, wallW, wallH);

}

