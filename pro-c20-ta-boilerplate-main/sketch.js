var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
var ground;
function setup()
{
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var groundOptions={
isStatic:true



}
ground=Bodies.rectangle(200,350,400,10,groundOptions)
World.add(world,ground)
var ballOptions={
restitution:0.7


}
ball=Bodies.circle(200,10,30,ballOptions)
World.add(world,ball)
}

function draw() 
{
  background(51);
  Engine.update(engine)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,10)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,30,30)
}

