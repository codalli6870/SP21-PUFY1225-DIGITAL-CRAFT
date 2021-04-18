const xPos= 36;
const yPos= 36;
const numRows = 7;
const numColumns = 16;

let g=70;

function setup() {
  createCanvas(612, 290);
  noFill();
  noLoop();
}

function draw_ellipse(x_val, y_val) {
  console.log("draw works");
  console.log(x_val, y_val);
  ellipse(xPos * x_val, yPos * y_val, g);
  ellipse(xPos * x_val, yPos * y_val, g/1.5);
  ellipse(xPos * x_val, yPos * y_val, g/3);
}

function draw_sketch() {
  console.log("drawing sketch");
  for (var row = 1; row < numRows + 1; row++) {
    for (var col = 1; col < numColumns + 1; col++) {
      console.log("row = " + row + " , col = " + col);
      draw_ellipse(col, row);
    }
  }
}

function draw() {
  background("white");
  draw_sketch(); 
}