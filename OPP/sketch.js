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

function addBird() {
  let y = random(0, height);
  let bird = new Bird(0, y, "white", 10)
  birds.push(bird);
}

function draw() {
  background(220);
  for (let firework of fireworks) {
    firework.show();
    firework.move();
    for (let bird of birds) {
      friework.checkCollision(bird);
    }
  }
  for (let bird of birds) {
    bird.update();
    bird.display();
    bird.isAlive();
  }
}

function mouseClicked() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  for(let i = 0; i < 100; i++) {
    let dx = random(2, 5);
    let dy = random(2, 5);
    let firework = new Firework(mouseX, mouseY, 2, dx, dy, r, g, b);
    fireworks.push(firework);
  }
}
class Firework {
  constructor(x, y, radius, dx, dy, r, g, b){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += .98;
  }
  show() {
    fill(this.r, this.g, tihs.b);
    ellipse(this.x, this.y, this.radius);
  }
  checkCollision(bird) {
    if (collideRectCircle(bird.x, bird.y, bird.sx, bird.sy, this.x, this.y, this.radius)) {
      bird.dx *= -1;
      if (bird.dx = -10) {
        bird.c = "green"

      }
      else {
        bird.c = "pink"
      }
    }
  }
}

class Bird {
  constructor(x, y, sx, sy, dx, c){
    this.x = x;
    this.y = y;
    this.sx = sx;
    this.sy = sy;
    this.dx = dx;
    this.c = c;
  }
  update() {
    this.x += this.dx;
  }
  display() {
    fill(this.c);
    rect[this.x, this.y, this.sx, this.sy]
  }
  isAlive() {
    if (this.x > width + this.sx || this.x < -1 * this.sx) {
      birds.splice(this, 1)
    }
  }
}
