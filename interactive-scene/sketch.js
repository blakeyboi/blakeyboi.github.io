// platformer
// Blake Tierney
// 2/25/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let mario;
let marioX, marioY;
let marioDY = 10;
let movingUp = false;
let movingDown = false;
let wallX, wallY;
let wallW = 100;
let wallH;
let wallDX = 5;
 
function preload() {
  mario = loadImage("assets/mario.png");
  
}


function setup() {
  createCanvas(1000, windowHeight);
  marioX = width/7;
  marioY = height - height/7;
  wallX = 0;
  wallH = height;
}
// draw function
function draw() {
  background(220);
  displayMario();
  moveMario();
  displayWall();
  moveWall();
  hitBox();
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
  if (wallX <= 0){
    wallY = random(height/2, height);
    wallX = width;
  }
  wallX -= wallDX;

}

// making walls appear
function displayWall() {
  fill("black");
  rect(wallX, wallY, wallW, wallH);

}

// making the hitbox for mario and wall

function hitBox(){
  if (marioY + 100 >= wallY) {
    if (marioX + 100 >= wallX) {
      textSize(150);
      fill("red");
      text("YOU LOSE", width/8, height - height/2);
      wallDX = 0;
    }
    wallDX = 5;
  }
  
}

