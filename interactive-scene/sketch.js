// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let goat;
let scalar = 1.0;

function preload() {
  goat = loadImage("assets/lamar-throwing.jpg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);
  fill("lime");
  // circle(mouseX - 10, mouseY - 10, 100)
  image(goat, mouseX - width/20, mouseY - height/20, width/10, height/10);

  // Making the football
  //ellipse(ballX, ballY, 50, 20)
}

function mouseClicked() {
  
}

// function mouseWheel(event) {
//   print(event.delta);
//   if (event.delta < 0) {
//     scalar *= 1.1;
//   }
//   else {
//     scalar *= 0.9;
//   }
// }
