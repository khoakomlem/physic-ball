var sprite = new Sprite();
var basket, bg, terrain = new Terrain();

function preload(){
	sprite.bloodImg = loadImage(sprite.bloodLink);
	sprite.img = loadImage(sprite.imgLink);
	basket = loadImage('img/basket.png');
	bg = loadImage('img/bg.png');
}

function setup() {
	var canv = createCanvas(window.innerWidth, window.innerHeight-4);
	noStroke();
	canv.parent('canvas');
	imageMode(CENTER);
	// terrain.addRect(0, 79, 37.5, 127);
	// terrain.addRect(0, 0, 17, 190);
	// terrain.addRect(261, 179, 10, 15);
	// terrain.addRect(-10, 179, 100, 26);
	// terrain.addRect(width/2, height/2, 37.5, 100);
}

function draw() {
	// background(0);
	image(bg, 0, 0, width*2, height*2);
	sprite.update();
	sprite.draw();

	// image(basket, 126, 100);

	terrain.drawDebug();
	if (mouseIsPressed) {
		if (sprite.dropping)
			sprite.drop(mouseX, mouseY);
		if (collidePointCircle(mouseX, mouseY, sprite.x, sprite.y, sprite.size))
			sprite.dropping = true;
	}
	else 
		sprite.dropping = false;

	if (collidePointCircle(mouseX, mouseY, sprite.x, sprite.y, sprite.size) || sprite.dropping)
		document.getElementById("canvas").style.cursor = "grab";
	else
		document.getElementById("canvas").style.cursor = "default";
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}