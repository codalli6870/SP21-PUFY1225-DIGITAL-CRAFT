function setup() {
  createCanvas(600, 600, SVG);
  background("black");
  noLoop();
  stroke("white");
  colorMode(HSB);
}
//no repeats

function draw() {
  for (var i=10; i<width; i+=40) {
    strokeWeight(2);
    line(i, 150, i+i/1.2, 80);
    strokeWeight(1);
    line(i, 150*2, i+i/1.2, 80);
    strokeWeight(2);
    line(i, 150*2, i+i/1.2, 600);
    line(i, 150*2, i+i/1.4, 600);
  }
  //draws strokes, increasing width from each other
  save();
  //SVG File
}




