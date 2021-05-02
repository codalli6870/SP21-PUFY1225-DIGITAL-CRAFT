const wid=150
//const variable

function setup() {
  createCanvas(600, 600, SVG);
  background("black");
  noLoop();
  stroke("white");
}
//no repeats

function draw_sketch() {
  for (var i=10; i<width; i+=40) {
    strokeWeight(2);
    line(i, y1, i+i/1.2, 80);
    strokeWeight(1);
    line(i, wid*2, i+i/1.2, 80);
    strokeWeight(2);
    line(i, wid*2, i+i/1.2, 600);
    line(i, wid*2, i+i/1.4, 600);
  }
}
//creates strokes, increasing width from each other

function draw () {
  draw_sketch();
}
//draws lines

save();