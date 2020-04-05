// Dirtbike Runner
// Blake Tierney
// April 8, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let playerX = 0;
let rectHeight;
let rectWidth;
let time;
let startScreen = true;
let playingGame = false;
let gameOverScreen = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  time = 0;
  rectWidth = 1;
}

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
  fill("blue");
  text("Dirtbike Runner", width/8, height/4);
  fill("red");
  textSize(50);
  text("Tap Space to Start",  width/4, height/2);
}

function modePlayingGame() {
  background(135, 206, 235);
  movePlayer();
  displayTerrain();
  displayPlayer();
}

function drawGameOverScreen() {
  textSize(100);
  fill("red");
  text("You Lose", width/8, height/2);
  fill("blue");
  textSize(50);
  text("You Got ", x, "coins", width/8, height + height/2);
  text("Press Space To Try Again", width/8, height/2);
}

function movePlayer() {
  if (keyIsPressed && key === "d") {
    playerX += 0.01; 
  }
  if (keyIsPressed && key === "a") {
    playerX -= 0.01; 
  }
}

function displayTerrain() {
  time = playerX;
  for (let x = 0; x <= width; x += rectWidth) {
    rectHeight = noise(time) * height + 150;
    stroke("green");
    rect(x, height - rectHeight, rectWidth, rectHeight);

    time += 0.0008;
  }
  
  time = playerX;
  for (let x = 0; x <= width; x += rectWidth) {
    rectHeight = noise(time) * height;
    stroke(155, 118, 83);
    rect(x, height - rectHeight, rectWidth, rectHeight);

    time += 0.0008;
  }

  
}

function displayPlayer() {
  fill("red");
  rect(playerX + width - 100, height - rectHeight - 250, 100, 100);
}

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