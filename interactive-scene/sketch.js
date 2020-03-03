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
let startScreen = true;
let playingGame = false;
let gameOverScreen = false;
 
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
  //Checks and calls the startScreen function
  if (startScreen) {
    drawStartScreen();
  }
  
  if (playingGame) {
    modePlayingGame();
  }

  if (gameOverScreen) {
    drawGameOverScreen();
  }
}

function drawStartScreen() {
  textSize(100);
  fill("green");
  text("Mario Jump Game", width/8, height/4);
  fill("red");
  textSize(50);
  text("Press Space To Begin",  width/4, height/2);
}

function modePlayingGame() {
  displayMario();
  moveMario();
  displayWall();
  moveWall();
  hitBox();
}

function drawGameOverScreen() {
  textSize(100);
  fill("red");
  text("You Lose", width/8, height/2);
  fill("green");
  textSize(50);
  text("You Survived Walls!", width/8, height + height/2);
  text("Press Space To Try Again", width/8, height/2);
}

// moving with keys
function keyPressed() {
  if (startScreen) {
    if (key === " ") {
      startScreen = false;
      playingGame = true;
    }
  }
  
  if (playingGame) {
    if (key === " ") {
      movingUp = true;
      movingDown = false;
    }
  }
  
  if (gameOverScreen) {
    if (key === " ") {
      gameOverScreen = false;
      startScreen = true;
    }
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
  if (playingGame) {
    if (wallX <= 0){
      wallY = random(height/2, height);
      wallX = width;
    }
    wallX -= wallDX;
  }
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
      wallDX = 0;
      marioDY = 0;
      wallX = width;
      playingGame = false;
      gameOverScreen = true;
      
    }
  }
}


