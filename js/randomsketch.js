let x, y;
let g = 15;

function setup() {
  createCanvas(600, 600);
  background(51);
}

function draw_sketch() {
  strokeWeight(4);
  stroke(random(51,150));
  //random grayscale stroke
  x = random(0, 600);
  y = random(0, 600);
  ellipse(x, y, g);
}

function draw() {
  draw_sketch(); 
}
//draws ellipses randomly within canvas size

