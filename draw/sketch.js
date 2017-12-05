var r,g,b
function setup(){
	createCanvas(720,500);
	r = random(255);
	g = random(255);
	b = random(255);
	background(r,g,b);
}

function draw(){
}

function mousePressed(){
	r = random(255)
	g = random(255)
	b = random(255)
}

function mouseDragged(){
	strokeWeight(3);
	stroke(r,g,b);
	fill(r,g,b);
	ellipse(mouseX,mouseY,25,25);
}
	
function mouseWheel(){
	background(r,g,b)
}
