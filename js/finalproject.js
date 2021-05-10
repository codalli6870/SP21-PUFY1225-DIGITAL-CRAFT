let inc = 0.005;
let start = 0;
//variables

function setup() {
  createCanvas(600, 300);
}
//canvas setup

function draw_shape(line_d, line_d2) {
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(random(200, 300), random(150, 260), random(0, 55));
    //random colored stroke RGB
    let y = line_d + noise(xoff) * height;
    //perlin values
    vertex(x, y)
    //vertices are connected in shape
    xoff += inc;
  }
  endShape();
  start += inc;
}
//creates base shape of 1D perlin noise

function draw_sketch() {
  background("gray");
  noFill();

  let line_d = -500;
  for (let i = 0; i < 500; i++) {
    draw_shape(line_d);
    line_d += random(0,5);
    //width from one another
    strokeWeight(random(0.2,1));
  }
  //for loop, creates shapes under and over lines
  
  let line_d2 = -500;
  for (let i = 0; i < 500; i++) {
    draw_shape(-line_d2);
    line_d2 += random(0,5);
    //width from one another
    strokeWeight(random(0.2,1));
  }
  //for loop, creates shapes under and over lines in opposite direction
  noLoop();
  //no repeats
}

function draw() {
    draw_sketch();
    //draws shapes
}