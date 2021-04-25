let x, y;
let w, z;

function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw_sketch() {
  strokeWeight(10);
  stroke(random(200, 300), random(150, 260), random(0, 55));
  //random stroke color
  z = random(0, 600);
  w = random(0, 600);
  line(300, 300, w, z);
}

function draw() {
  draw_sketch(); 
}
//draws random yellow colored lines from center





