// Interactive Scene 2.0
// Blake Tierney
// March 3, 2020
//
// Extra for Experts:
// - applied scroll wheel to increase drwing size.

// all of my global values.
let penSizeX = 5;
let penSizeY = 5;
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
  if (mouseIsPressed) { // when you click on mouse you leave a trail of circles behind you.
    fill(penColourR, penColourG, penColourB);
    ellipse(mouseX, mouseY, penSizeX, penSizeY);
  }
}

function keyPressed() {
  if (key === " ") {
    //clears the entire background and resets RGB values each to 250
    background("white");
    penColourR = 250;
    penColourG = 250;
    penColourB = 250;
  }
  //r takes away Red, g takes away Green, b takes away Blue, all to pen colour
  if (key === "r") {
    penColourR -= 10;
  }
  if (key === "g") {
    penColourG -= 10;
  }
  if (key === "b") {
    penColourB -= 10;
  }
  //resets all RGB values each to 250
  if (key === "c") {
    penColourR = 250;
    penColourG = 250;
    penColourB = 250;
  } 
}

// Extras for Experts
function mouseWheel(event) {
  //if (penSizeX < )
  if (penSizeX >= 5 && penSizeY >= 5) {
    if (event.delta < 0) {
      penSizeX += 5;
      penSizeY += 5;
      console.log(penSizeX, penSizeY);
    }
  }
  if (penSizeX > 5 && penSizeY > 5) {
    if (event.delta > 0) {
      penSizeX -= 5;
      penSizeY -= 5;
      console.log(penSizeX, penSizeY);
    }
  }
}