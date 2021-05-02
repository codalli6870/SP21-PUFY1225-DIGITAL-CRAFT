let x, y;
let g = 150;
//variables

function setup() {
  createCanvas(600, 600);
  background(51);
  noLoop();
}
//looped

function draw_sketch() {
  strokeWeight(4);
  stroke(random(0,300));
  fill(30,20,20,100);
  x = random(0, 600);
  y = random(0, 600);
  rect(x, y, random(50,150));
}

function draw() {
  for (var i = 0; i < 100; i++) {
    draw_sketch();
  }
}
//draws rectangles randomly within canvas size

