let x, y;
let g = 150;
//variables

function setup() {
  createCanvas(600, 600);
  background(51);
  noFill();
}
//looped

function draw_sketch() {
  strokeWeight(4);
  stroke(random(0,300));
  x = random(0, 600);
  y = random(0, 600);
  rect(x, y, random(50,150));
}

function draw() {
  if (draw_sketch()<=10) {
    draw_sketch(); 
  } else {

  }

//draws rectangles randomly within canvas size
