// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function make2DArray(cols,rows){
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols = 7;
let rows = 6;
let resolution = 40;
let colour = ["red", "blue"];

function setup() {
  createCanvas(cols*resolution, rows*resolution); 
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = "";
    }
  }
}
function draw() {
  drawingTheBoard();
  putChip();
}

function drawingTheBoard() {
  noStroke();  
  background("yellow");
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      stroke(1);
      fill(255);
      ellipse(x+resolution/2,y+resolution/2,resolution,resolution);
    }
  }
}

function putChip() {
  if (mouseIsPressed && mouseX < resolution) {
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[0][0] = "blue";
        if (grid[0][0] === "blue") {
          let x = 0 * resolution;
          let y = 0 * resolution;
          fill("blue");
          ellipse(x+resolution/2,y+resolution/2 + resolution*5,resolution,resolution);
        }
        console.log(grid[0][0]);
      }
    }
  }
}

function checkCol() {
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
        if (mouseX ) {
          
        }
      }
    }
  }
}