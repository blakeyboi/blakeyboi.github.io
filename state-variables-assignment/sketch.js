// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let playerX = 0;
let rectHeight;
let rectWidth;
let time;


function setup() {
  createCanvas(windowWidth, windowHeight);
  time = 0;
  rectWidth = 1;
}

function draw() {
  background(135, 206, 235);
  movePlayer();
  displayTerrain();
  displayPlayer();

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