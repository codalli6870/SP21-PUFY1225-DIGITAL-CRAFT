let x, y;
let g = 15;
//variables

function setup() {
  createCanvas(600, 600);
  noFill();
  background("white");
}

function draw_sketch() {
  strokeWeight(4);
  stroke(random(50,250));
  //random grayscale color
  x = random(0, 600);
  y = random(0, 600);
  ellipse(x, y, g);
}

function draw() {
  draw_sketch(); 
}
//draws same ellipses randomly within canvas size

