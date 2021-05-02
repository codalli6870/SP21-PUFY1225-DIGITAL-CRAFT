const wid=150

function setup() {
  createCanvas(600, 600);
  background("black");
  noLoop();
  stroke("white");
}

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

function draw () {
  draw_sketch();
}
line(600, wid*2, i-i/1.5, 80);