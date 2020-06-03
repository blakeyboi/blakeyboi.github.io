// OPP Assingment
// Blake Tieney
// Monday, June 1, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fireworks = []
let birds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.setInterval(addBird, 2000);
}

function draw() {
  background("black");
  for (let firework of fireworks) {
    firework.move();
    firework.show();
    if(firework.t <= 0) {
      fireworks.splice(firework, 1);
    }
    for (let bird of birds) {
      firework.checkCollision(bird);
    }
  }
  for (let bird of birds) {
    bird.isAlive();
    bird.display();
    bird.update();
  }
}

function mousePressed() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  for(let i = 0; i < 100; i++) {
    let dx = random(-5, 5);
    let dy = random(-5, 5);
    let firework = new Firework(mouseX, mouseY, 5, dx, dy, r, g, b, 255);
    fireworks.push(firework);
  }
}

function addBird() {
  let y = random(windowHeight);
  let bird = new Bird(0, y)
  birds.push(bird);
}

class Firework {
  constructor(x, y, radius, dx, dy, r, g, b, t){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.t = t;
  }
  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += 0.098;
  }
  show() {
    noStroke();
    fill(this.r, this.g, this.b, this.t);
    ellipse(this.x, this.y, this.radius);
    this.t -= 5;
  }
  checkCollision(bird) {
    if (collideRectCircle(bird.x, bird.y, bird.sx, bird.sy, this.x, this.y, this.radius)) {
      bird.dx *= -1;
      if (bird.dx = -3) {
        bird.c = "blue";

      }
    }
  }
}

class Bird {
  constructor(x, y, sx = 60, sy = 20, dx = 3, c = "white"){
    this.x = x;
    this.y = y;
    this.sx = sx;
    this.sy = sy;
    this.dx = dx;
    this.c = c;
  }
  isAlive() {
    this.x += this.dx;
  }
  display() {
    noStroke();
    fill(this.c);
    rect(this.x, this.y, this.sx, this.sy);
  }
  update() {
    if (this.x > windowWidth + this.sx || this.x < -this.sx ) {
      birds.splice(this, 1)
    }
  }
}
