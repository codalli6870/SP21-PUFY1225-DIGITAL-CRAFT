// runs once and setups the scene
function setup(){
	createCanvas(400, 400);
}

//runs FOREVER
function draw(){
	background("white");
	stroke("black");
	strokeWeight(10);
	fill("red");
	rect(0, 0, 150, 200);
	fill("blue");
	rect(360, 200, 40, 100);
	fill("yellow");
	rect(150, 370, 105, 30);
	fill("black");
	rect(255, 370, 105, 30);
	noFill();
	rect(150, 200, 170, 210);
}