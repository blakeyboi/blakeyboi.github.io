// Grid-Based Game Assignment
// Blake Tierney
// May 11, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let screen = 1;
let w = 7;
let h = 6;
let bs = 100;
let dis = 10;
let mob;
let morb;
let player;
let board;

function make2DArray(h,w){
  let arr = new Array(w);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(h);
  }
  return arr;
}

function setup() {
  createCanvas(w*bs, h*bs);
  ellipseMode(CORNER);
  textAlign(CENTER);
  player = 1;
  board = make2DArray(h, w);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      board[y][x] = 0;
    }
  }
}

function startScreen() {
  rectMode(CENTER);
  background(0);
  fill(255);
  textSize(dis*5);
  text("Connect 4", width/2, height/4);
  fill(120);
  textSize(dis*2);
  text("Instructions", width/2, height/2 - dis*2);
  text("Click to place a chip", width/2, height/2)
  text("Player 1 = RED, Player 2 = Blue", width/2, height/2 + dis*2)
  mob = collidePointRect(mouseX, mouseY, width/2 - width/10, height*3/4 - height/12, width/5, height/6);
  if (!mob) {
    fill(120);
  }
  else {
    fill(255);
  }
  rect(width/2, height*3/4, width/5, height/6);
  fill(0);
  textSize(dis*2);
  text("click to begin", width/2, height*3/4);
  
}

function endScreen() {
  rectMode(CENTER);
  background(0);
  fill(255);
  textSize(dis*5);
  if (getWinner() === -1) {
    text("Tie", width/2, height/2);
  }
  else {
    text("Player " + getWinner() + " won", width/2, height/2);
  }
  morb = collidePointRect(mouseX, mouseY, width/2 - width/10, height*3/4- height/12, width/5, height/6);
  if (!morb) {
    fill(120);
  }
  else {
    fill(255);
  }
  rect(width/2, height*3/4, width/5, height/6);
  fill(0);
  textSize(dis*2);
  text("click to restart", width/2, height*3/4);
}



function checkBelow(x) {
  for (let y = h-1; y >= 0; y--) {
    if (board[y][x] === 0) {
      return y;
    }
  }
  return -1;
}



function mousePressed() {
  if (screen === 1 && mob) {
    screen = 2;
    player = 1;
  }
  if (screen === 2) {
    let x = floor(mouseX/bs);
    let y = checkBelow(x);
    if (y >= 0) {
      if (player === 1) {
        board[y][x] = 1;
        player = 2;
      }
      else {
        board[y][x] = 2;
        player = 1;
      }
    }
  }
  if (screen === 3 && morb) {
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        board[y][x] = 0;
      }
    }
    screen = 2;
  }
}


function dropCoin() {
  rectMode(CORNER);
  noStroke();
  background("yellow");
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let i = x * bs;
      let j = y * bs;
      stroke(1);
      fill(255);
      ellipse(i, j, bs, bs)
      if (board[y][x] > 0) {
        if (board[y][x] === 1) {
          fill("red");
        }
        if (board[y][x] === 2) {
          fill("blue");
        }
        ellipse(x*bs, y*bs, bs, bs);
        ellipse(x*bs + dis, y*bs + dis, bs - dis*2, bs - dis*2);
      }
    }
  }
}

function draw() {
  if (screen === 1) {
    startScreen();
  }
  if (screen === 2) {
    if (getWinner() === 0) {
      dropCoin();
    }
    else {
      screen = 3;
    }
  }
  if (screen === 3) {
    endScreen();
  }
}

function p(y, x) {
  if (y < 0 || y > h || x < 0 || x > w) {
    return 0;
  }
  return board[y][x];
}

function getWinner() {
  for(let y = 0; y < h; y++) {
    for(let x = 0; x < w; x++) {
      // chceking horizontally for 4 in a row
      if(p(y,x) !== 0 && p(y,x) === p(y,x+1) && p(y,x) === p(y,x+2) && p(y,x) === p(y,x+3)) {
        return p(y, x);
      }
    }
  }
  for(let y = 0; y < h; y++) {
    for(let x = 0; x < w; x++) {
      // chceking vertically for 4 in a row
      if(p(y,x) !== 0 && p(y,x) === p(y+1,x) && p(y,x) === p(y+2,x) && p(y,x) === p(y+3,x)) {
        return p(y, x);
      }
    }
  }
  for(let y = 0; y < h; y++) {
    for(let x = 0; x < w; x++) {
      // cheking diagonally for 4 in a row, use d as direction
      for(let d = -1; d < 1; d += 2) {
        if(p(y,x) !== 0 && p(y,x) === p(y+1*d,x+1) && p(y,x) === p(y+2*d,x+2) && p(y,x) === p(y+3*d,x+3)) {
          return p(y, x);
        }
      }
    }
  }
  for(let y = 0; y < h; y++) {
    for(let x = 0; x < w; x++) {
      // chcking for open spaces which is default
      if (p(y,x) === 0) {
        return 0;
      }
    }
  }
  // tie
  return -1;
}