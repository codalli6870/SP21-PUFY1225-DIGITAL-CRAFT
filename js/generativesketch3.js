const xPos= 36;
const yPos= 36;
const numRows = 16;
const numColumns = 16;
let g=20;

function setup() {
  createCanvas(612, 612);
  noLoop();
}

function draw_ellipse(x_val, y_val) {
fill("black");
strokeWeight(2);
  ellipse(xPos * x_val, yPos * y_val, g);
  fill("gray");
  ellipse(xPos * x_val, yPos * y_val, g/3.5);
}

function draw_sketch() {
  for (var i = 2; i < numRows - 1; i++) {
    for (var j = 2; j < numColumns - 1; j++) {
      draw_ellipse(i, j);
    }
  }
}

function draw() {
  background("white");
  draw_sketch(); 
}