const xPos= 36;
const yPos= 36;
const numColumns = 14;
const numRows = 14;
let g=60;
//constant variables

function setup() {
  createCanvas(600, 600);
  background("white");
  noLoop();
  noStroke();
}

function draw_shape(x_val, y_val) {
	const randF1 = random(0, 360);
  fill(randF1, 0, 100);
  rect(xPos * x_val, yPos * y_val, g);
  fill(randF1, 50, 100);
  rect(xPos * x_val, yPos * y_val, g/2);
  fill(randF1, 50, 100);
  ellipse(xPos * x_val, yPos * y_val, g/2.5);
    fill(randF1, 0, 100);
  rect(xPos * x_val, yPos * y_val, g/4);
}
//random color for rectangles and ellipse

function draw_sketch() {
  for (var row = 1; row < numRows + 1; row++) {
    for (var col = 1; col < numColumns + 1; col++) {
      draw_shape(col, row);
    }
  }
}
//draws 14 rows and columns

function draw() {
  draw_sketch(); 
}
//function draws shapes



