// Grid-Based Game Assignment
// Blake Tierney
// May 7, 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let w = 7;
let h = 6;
let bs = 100;
let player;
let player1;
let player2;
let board;

function make2DArray(h,w){
  let arr = new Array(w);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(h);
  }
  return arr;
}

function setup() {
  createCanvas(700, 600);
  ellipseMode(CORNER);
  textAlign(CENTER);
  
  board = make2DArray(h, w);
  player = player1;
}

function nextSpace(x) {
  for (let y = h-1; y >= 0; y--) {
    if (board[y][x] === 0) {
      return y;
    }
    return -1;
  }
}

function edge(y, x) {
  if (y < 0 || y > h || x < 0 || x > w) {
    return 0;
  }
  else {
    return board[y][x];
  }
}

function getWinner() {
  for(let y = 0; y < h; y++) {
    for(let x = 0; x < w; x++) {
      if(p(y,x) !== 0 && p(y,x) === p(y,x+1) && p(y,x) === p(y,x+2) && p(y,x) === p(y,x+3)) {
        return p(y, x);
      }
      if(p(y,x) !== 0 && p(y,x) === p(y+1,x) && p(y,x) === p(y+2,x) && p(y,x) === p(y+3,x)) {
        return p(y, x);
      }
      return -1;
    }
  }
  for(let y = 0; y < h; y++) {
    for(let x = 0; x < w; x++) {
      for(let d = -1; d < 1; d += 2) {
        if(p(y,x) !== 0 && p(y,x) === p(y+1*d,x+1) && p(y,x) === p(y+2*d,x+2) && p(y,x) === p(y+3*d,x+3)) {
        return p(y, x);
        }
      }
    }
  }
}

function mousePressed() {
  let x = mouseX/bs;
  let y = nextSpace(x);
  if (y >= 0) {
    if (player === player1) {
      board[y][x] = player1;
      dropCoin();
      player = player2
    }
    else {
      board[y][x] = player2;
      dropCoin();
      player = player1;
    }
  }
}
function dropCoin() {
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < w; i++) {
      fill(255);
      rect(i*bs, j*bs, bs, bs);
      if (board[j][i] > 0) {
        if (board[j][i] === 1) {
          fill("red");
        }
        if (board[j][i] === 2) {
          fill("blue");
        }
        ellipse(i*bs, j*bs, bs, bs);
      }
    }
  }
}

function draw() {
  if (getWinner() === 0) {
    dropCoin();
  }
  else {
    background(0);
    fill(255);
    text("Winner: " +getWinner()+". Space restarts.", width/2, height/2);
    if (keyPressed && key === " ") {
      player = player1;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          board[y][x] = 0;
        }
      }
    }
  }
}