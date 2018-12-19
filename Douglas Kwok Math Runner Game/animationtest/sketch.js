
var lossa;
var lossb;
var levellosescore;



function preload() 
{
  	lossa = createImg("https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/lossa.png")
	lossb = createImg("https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/lossb.png")
	levellosescore = createImg("https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/gameover.png")
}

function setup()
{
	createCanvas(800,600);
}

function draw() 
{
	background(levellosescore);
	textSize(100);
	fill(0,255,255);
	text(health,500,395);

	image(lossa,300,475,200,75);

	
	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75)
	
		image(lossb,300,475,200,75);
		if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75 && mouseIsPressed == true )
		{
			canvasID = 100
		}
}