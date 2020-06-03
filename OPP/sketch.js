// OPP Assingment
// Blake Tieney
// Monday, June 1, 2020
//
// Extra for Experts:
// Attempted to make the "birds" have a flying like pattern, did not work

let fireworks = []
let birds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.setInterval(addBird, 2000);
}

function draw() {
  background("black");
  // runs throught the frework loop for the set amount of times
  for (let firework of fireworks) {
    firework.move();
    firework.show(); 
    // if t is negative the firework is deleted from the array
    if(firework.t <= 0) {
      fireworks.splice(firework, 1);
    }
    // runs through the bird loop while checking for collision
    for (let bird of birds) {
      firework.checkCollision(bird);
    }
  }
  // runs through birds class
  for (let bird of birds) {
    bird.isAlive();
    bird.display();
    bird.update();
  }
}

function mousePressed() {
  // sets random colour for firework
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  // setting amount in for loop, 100, and making the balls move out a random direction from 1 point
  for(let i = 0; i < 100; i++) {
    let dx = random(-5, 5);
    let dy = random(-5, 5);
    let firework = new Firework(mouseX, mouseY, 5, dx, dy, r, g, b, 255);
    fireworks.push(firework);
  }
}

// adds birds at random y cor
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
    // makes the movement with gravity
    this.x += this.dx;
    this.y += this.dy;
    this.dy += 0.098;
  }
  show() {
    // makes the balls show with specific sizes and colours
    noStroke();
    fill(this.r, this.g, this.b, this.t);
    ellipse(this.x, this.y, this.radius);
    this.t -= 5;
  }
  // changes x direction of bird when a collison occurs
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
  // makes the brid move left to right
  isAlive() {
    this.x += this.dx;
  }
  // draw the bird
  display() {
    noStroke();
    fill(this.c);
    rect(this.x, this.y, this.sx, this.sy);
  }
  // deleted the bird from the array when off screen
  update() {
    if (this.x > windowWidth + this.sx || this.x < -this.sx ) {
      birds.splice(this, 1)
    }
  }
}
// Attempted to make birds move up and down at certain intervls
  //   if (this.x <  windowWidth/10|| this.x > 0) {
  //     this.y += 10;
  //   }
  //   if (this.x < windowWidth/5 || this.x > windowWidth/10) {
  //     this.y -= 10;
  //   }
  //   if (this.x < windowWidth* 3/10 || this.x > windowWidth/5) {
  //     this.y += 10;
  //   }
  //   if (this.x < windowWidth*2/5 || this.x > windowWidth* 3/10) {
  //     this.y -= 10;
  //   }
  //   if (this.x < windowWidth/2 || this.x > windowWidth*4/10) {
  //     this.y += 10;
  //   }
  //   if (this.x < windowWidth*3/5 || this.x > windowWidth/2) {
  //     this.y -= 10;
  //   }
  //   if (this.x < windowWidth*7/10 || this.x > windowWidth*3/5) {
  //     this.y += 10;
  //   }
  //   if (this.x < windowWidth*4/5 || this.x > windowWidth*7/10) {
  //     this.y -= 10;
  //   }
  //   if (this.x < windowWidth*9/10 || this.x > windowWidth*4/5) {
  //     this.y += 10;
  //   }
  //   if (this.x < windowWidth || this.x > windowWidth*9/10) {
  //     this.y -= 10;
  //   }
  // tried to make a for loop to run through the if statements
  //   for (let i = 0; i < 10; i++) {
  //     if (i % 1) {
  //       if (this.x <  windowWidth*i+1/10|| this.x > i/10) {
  //         this.y += 10;
  //       }
  //     }
  //     else {
  //       if (this.x <  windowWidth*i+1/10|| this.x > i/10) {
  //         this.y -= 10;
  //       }
  //     }
  //   }

