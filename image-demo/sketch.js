// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let ballArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  window.setInterval(addBall, 10);
}

function draw() {
  background("white");
  moveBalls();
  displayBalls();
  checkIfHit();

}

function mouseClicked() {
}

function checkIfHit() {
  for(let i = ballArray.length - 1; i >= 0; i--) {
    let distanceToMouse = dist(mouseX, mouseY, ballArray[i].x, ballArray[i].y);
    if (distanceToMouse < ballArray[i].radius) {
      // ballArray[i].color = "red";
      ballArray.splice(i, 1);
    }
  }
}

function moveBalls() {
  for(let i = 0; i < ballArray.length; i++) {
    let dx = random(-10, 10);
    let dy = random(-10, 10);
    ballArray[i].x += dx;
    ballArray[i].y  += dy;
  }
}

function displayBalls() {
  for (let i = 0; i < ballArray.length; i++) {
    fill(ballArray[i].color);
    circle(ballArray[i].x, ballArray[i].y, ballArray[i].radius);
  }
}

function addBall() {
  let thisBall = {
    x: random(width),
    y: random(height),
    radius: random(75, 100),
    color: color(random(1), random(1), random(1), random(255)),
  };
  ballArray.push(thisBall);
}


