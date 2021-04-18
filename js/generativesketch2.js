const xPos= 36;
const yPos= 36;
const numRows = 16;
const numColumns = 16;
let g=40;

function setup() {
  createCanvas(612, 612);
  noLoop();
}

function draw_ellipse(x_val, y_val) {
fill("yellow");
strokeWeight(2);
  ellipse(xPos * x_val, yPos * y_val, g);
  fill("red");
  ellipse(xPos * x_val, yPos * y_val, g/2);
  fill("blue");
  ellipse(xPos * x_val, yPos * y_val, g/3);
}

function draw_sketch() {
  for (var row = 1; row < numRows + 1; row++) {
    for (var col = 1; col < numColumns + 1; col++) {
      draw_ellipse(col, row);
    }
  }
}

function draw() {
  background("white");
  draw_sketch(); 
}