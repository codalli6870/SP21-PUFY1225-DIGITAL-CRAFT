var numbers = [600,580,400,650,700,640,580,800,750,600,590,390]
let g=60
let x, y;

function setup() {
  createCanvas(600,600);
  background("black");
  noLoop();
}

function draw() {
  for (var i=0; i<12; i++) {
    stroke("black");
    strokeWeight(random(0,40));
    fill("white");
    rect(i*50, -20, 30, numbers[i]+20);

  stroke("red");
  strokeWeight(random(0,30));
  fill("black");
  x = random(0, 600);
  y = random(0, 600);
  ellipse(x, y, random(30,g));

  stroke("blue");
  strokeWeight(random(0,30));
  fill("black");
  x = random(0, 600);
  y = random(0, 600);
  rect(x, y, random(60,100));

  }
}

