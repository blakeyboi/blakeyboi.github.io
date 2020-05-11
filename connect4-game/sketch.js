// Grid-Based Game Assignment
// Blake Tierney
// May 11, 2020
//
// Extra for Experts:
// - Used sounds, used collision, made different modes for connect, 4, 5, 6, attemped to make it mobile


// you can change value for connect, 4, 5 or 6
let connect = 4;
let w;
let h;
// if you change connect number you must also change what bs is, if connect = 4, bs = connect*35, connect = 5, bs = connect*20, connect = 6, bs = connect*15
let bs = connect*35;
let dis = bs/10;
let screen = 1;
let mob;
let morb;
let player;
let board;
// let colorPicker;
// let colorPicker1;
// let colorPicker2;
let sound;
let sound1;
let sound2;
let blake;



function preload() {
  blake = loadImage('assets/blakes-head.png')
  soundFormats('mp3', 'ogg');
  sound = loadSound('assets/slot.mp3');
  sound1 = loadSound('assets/slots.mp3');
  sound2 = loadSound('assets/win');
  sound.setVolume(0.1);
  sound1.setVolume(0.1);
  sound2.setVolume(0.1);
}

function setup() {
  // console.log(bs)
  // lets you play different lengths of connect
  if (connect === 4) {
    w = 7;
    h = 6;
  }
  if (connect === 5) {
    w = 9;
    h = 8;
  }
  if (connect === 6) {
    w = 11;
    h = 10;
  }
  createCanvas(w*bs, h*bs);
  ellipseMode(CORNER);
  textAlign(CENTER);
  // tried to let player choose color, couldnt figue out how to make the buttons go away
  // colorPicker = createColorPicker('#ed225d');
  // colorPicker.position(width/2+dis*10, height/2 + dis*2);
  // colorPicker1 = createColorPicker('#ed225d');
  // colorPicker1.position(width/2-dis*6, height/2 + dis/3);
  // colorPicker2 = createColorPicker('#ed225d');
  // colorPicker2.position(width/2+dis*11, height/2 + dis/3);
  player = 1;
  board = make2DArray(h, w);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      board[y][x] = 0;
    }
  }
}

// main 2D array that makes board
function make2DArray(h,w){
  let arr = new Array(w);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(h);
  }
  return arr;
}

function draw() {
  if (screen === 1) {
    startScreen();
  }
  if (screen === 2) {
    // as long as getWinner is 0 then the game will continue
    if (getWinner() === 0) {
      dropCoin();
    }
    // if getwinner isnt zero it means someone has one
    else {
      sound2.play();
      screen = 3;
    }
  }
  if (screen === 3) {
    endScreen();
  }
}

function startScreen() {
  rectMode(CENTER);
  background(0);
  fill(255);
  textSize(dis*5);
  text("Connect X", width/2, height/4);

  fill(120);
  textSize(dis*2);
  text("Instructions", width/2, height/2 - dis*2);
  text("Click to place a chip", width/2, height/2);
  text("Player 1 = RED      Player 2 = Blue", width/2, height/2 + dis*2);

  //text("Pick the board color = ", width/2, height/2 +dis*4);
  mob = collidePointRect(mouseX, mouseY, width/2 - width/10, height*3/4 - height/12, width/5, height/6);
  if (!mob) {
    fill(255);
  }
  else {
    fill(120);
  }

  rect(width/2, height*3/4, width/5, height/6);
  fill(0);
  textSize(dis*2);
  text("click to begin", width/2, height*3/4);
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
        //places 1 for player 1
        board[y][x] = 1;
        player = 2;
        sound.play();
      }
      else {
        // places 2 for player 2
        board[y][x] = 2;
        player = 1;
        sound1.play();
      }
    }
  }
  if (screen === 3 && morb) {
    // resets board for next game
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        board[y][x] = 0;
      }
    }
    screen = 2;
  }
}

function checkBelow(x) {
  // looks in col starting at bottom and finds first available space, returns y for mouse pressed value
  for (let y = h-1; y >= 0; y--) {
    if (board[y][x] === 0) {
      return y;
    }
  }
  return -1;
}

function dropCoin() {
  rectMode(CORNER);
  noStroke();
  //background(colorPicker.color()); // tried to make it so player could choose colour but could make it disapear
  background("yellow");
  // main for loop to go through th whole board
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let i = x * bs;
      let j = y * bs;
      stroke(255, 204, 0);
      fill(200);
      // makes board look like real connect 4 grid
      ellipse(i + dis, j + dis, bs - dis*2, bs - dis*2)
      textSize(100);
      noStroke();
      fill(0,0,0, 1)
      text("Connect", width/2, height/2 + dis*2)
      if (board[y][x] > 0) {
        //alternates players
        if (board[y][x] === 1) {
          //fill(colorPicker1.color());
          stroke(255);
          fill("red");
        }
        if (board[y][x] === 2) {
          //ill(colorPicker2.color());
          stroke(255);
          fill("blue");
        }
        // draws the chip using the x and y values available
        ellipse(x*bs +dis, y*bs +dis, bs - dis*2, bs - dis*2);
        ellipse(x*bs + dis*2, y*bs + dis*2, bs - dis*4, bs - dis*4);
      }
    }
  }
}

// checking the p = piece location and making sure not to check for 4 in a row off the board
function p(y, x) {
  if (y < 0 || y > h || x < 0 || x > w) {
    return 0;
  }
  return board[y][x];
}

// Function that checks if a connect is made
function getWinner() {
  if (connect === 4) {
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
        // cheking diagonally for 4 in a row, use d as direction
        for(let d = -1; d <= 1; d += 2) {
          if(p(y,x) !== 0 && p(y,x) === p(y+1*d,x+1) && p(y,x) === p(y+2*d,x+2) && p(y,x) === p(y+3*d,x+3)) {
            return p(y, x);
          }
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
        // chcking for open spaces which is default
        if (p(y,x) === 0) {
          return 0;
        }
      }
    }
    // tie
    return -1;
  }
  if (connect === 5) {
    for(let y = 0; y < h; y++) {
      for(let x = 0; x < w; x++) {
        // chceking horizontally for 5 in a row
        if(p(y,x) !== 0 && p(y,x) === p(y,x+1) && p(y,x) === p(y,x+2) && p(y,x) === p(y,x+3) && p(y,x) === p(y,x+4)) {
          return p(y, x);
        }
      }
    }
    for(let y = 0; y < h; y++) {
      for(let x = 0; x < w; x++) {
        // cheking diagonally for 5 in a row, use d as direction
        for(let d = -1; d <= 1; d += 2) {
          if(p(y,x) !== 0 && p(y,x) === p(y+1*d,x+1) && p(y,x) === p(y+2*d,x+2) && p(y,x) === p(y+3*d,x+3) && p(y,x) === p(y+4*d,x+4)) {
            return p(y, x);
          }
        }
      }
    }
    for(let y = 0; y < h; y++) {
      for(let x = 0; x < w; x++) {
        // chceking vertically for 5 in a row
        if(p(y,x) !== 0 && p(y,x) === p(y+1,x) && p(y,x) === p(y+2,x) && p(y,x) === p(y+3,x) && p(y,x) === p(y+4,x)) {
          return p(y, x);
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
  if (connect === 6) {
    for(let y = 0; y < h; y++) {
      for(let x = 0; x < w; x++) {
        // chceking horizontally for 6 in a row
        if(p(y,x) !== 0 && p(y,x) === p(y,x+1) && p(y,x) === p(y,x+2) && p(y,x) === p(y,x+3) && p(y,x) === p(y,x+4) && p(y,x) === p(y,x+5)) {
          return p(y, x);
        }
      }
    }
    for(let y = 0; y < h; y++) {
      for(let x = 0; x < w; x++) {
        // cheking diagonally for 6 in a row, use d as direction
        for(let d = -1; d <= 1; d += 2) {
          if(p(y,x) !== 0 && p(y,x) === p(y+1*d,x+1) && p(y,x) === p(y+2*d,x+2) && p(y,x) === p(y+3*d,x+3) && p(y,x) === p(y+4*d,x+4) && p(y,x) === p(y+5*d,x+5)) {
            return p(y, x);
          }
        }
      }
    }
    for(let y = 0; y < h; y++) {
      for(let x = 0; x < w; x++) {
        // chceking vertically for 6 in a row
        if(p(y,x) !== 0 && p(y,x) === p(y+1,x) && p(y,x) === p(y+2,x) && p(y,x) === p(y+3,x) && p(y,x) === p(y+4,x) && p(y,x) === p(y+5,x)) {
          return p(y, x);
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
    text("Player " + getWinner() + " won!", width/2, height/2);
  }
  morb = collidePointRect(mouseX, mouseY, width/2 - width/10, height*3/4- height/12, width/5, height/6);
  if (!morb) {
    fill(120);
  }
  else {
    fill(255);
  }

  stroke(0);
  rect(width/2, height*3/4, width/5, height/6);
  fill(0);
  textSize(dis*2);
  text("click to restart", width/2, height*3/4);

  imageMode(CENTER);
  image(blake, width/4 - dis*4, height - dis*20, 1000, 1000);
  image(blake, width*3/4  + dis*10, height - dis*20, 1000, 1000);
}

// attemped to make the game phone compatable
function deviceShaken() {
  if (screen === 1) {
    screen = 2;
    player = 1;
  }
  if (screen === 3) {
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        board[y][x] = 0;
      }
    }
    screen = 2;
  }
}