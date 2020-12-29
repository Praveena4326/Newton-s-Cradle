
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 620);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(665,50,500,30);
	bobObject1= new Bob(810,400,70);
	bobObject2 = new Bob(740,400,70);
	bobObject3 = new Bob(670,400,70);
	bobObject4 = new Bob(600,400,70);
	bobObject5 = new Bob(530,400,70);

	//rope = new Rope(bobObject1, roof);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();	

  drawSprites();
 
}



