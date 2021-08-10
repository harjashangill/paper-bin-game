
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

var ball
var ground
var wall1
var wall2

function preload()
{
	console.log("world")
	
	console.log("1")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,600,800,10)
	wall1 = new Ground(500,550,10,90)
	wall2 = new Ground(650,550,10,90)
	//Create the Bodies Here.
var options={
	
	restitution:0.3,
	density:0.05
	
	
	
	

}
fill ("white")
ball = Bodies.circle(150,200,10,options)
World.add(world,ball)
;

	rectMode(CENTER)
	ellipseMode(RADIUS)
}


function draw() {
  
  background(0);
  ellipse(ball.position.x,ball.position.y,10)
	Engine.run(engine)
	ground.show()
	wall1.show()
	wall2.show()
	jump()
  drawSprites();
 
}

function jump(){
	if(keyCode=== UP_ARROW)
	Matter.Body.applyForce(ball, {x:0,y:0},{x:0.05,y:0.05  })

}
