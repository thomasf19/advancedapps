  var bird;
var pipes = [];
function setup() {
  createCanvas(400, 600)
	
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
	 background(0,100,255);
	
	//hills
	fill(50,255,150)
	ellipse(225,600,200,250)
	ellipse(100,600,200,275)
	ellipse(350,600,200,260)
	ellipse(0,600,200,250)
	
	//sun
	fill(255,255,0)
	ellipse(75,100,100,100)
	
	//clouds
	
	
	fill(225,100,100)
	new Audio('https://streams.my-free-mp3.net/nTpsC:3aX1rB','_blank').play();
	
 var s = second();
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	
	fill(0);
	textSize(40);
	text(frameCount,5,50);
	
	fill(0);
	textSize(35);
	text(0 + s, 350, 50);
}


function mousePressed() {
   bird.up();
	
}


function Bird() {
  this.y = height/2;
  this.x = 48;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
		strokeWeight(1.5);
		fill(255,200,100);
		triangle(this.x+15,this.y-10,this.x+15,this.y+8,this.x+35,this.y);
    fill(25,200,105);
    ellipse(this.x, this.y, 40, 35);
		fill(255)
		ellipse(this.x+6, this.y-5,10,10);
		fill(0)
		ellipse(this.x+6, this.y-5,5,5);
		fill(25,200,105)
		triangle(this.x-10,this.y+10,this.x-10,this.y,this.x+2,this.y+6);
		
		
	}
	

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

function keyPressed(){
	if(key == 'spacebar'){
	this.s = 0;
	this.frameCount = 0;
		this.s = show();
		this.frameCount = show();
	}
}


function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 50;
  this.speed = 3;


  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    if (this.highlight) {
    fill(255, 0, 0);
      textSize(50)
      text("GAMEOVER",60,200);}
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}
