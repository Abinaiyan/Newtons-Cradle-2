const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5
var roofObject
var rope1
var rope2
var rope3
var rope4
var rope5
var mConstraint

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth / 1.5, windowHeight / 1);
  engine = Engine.create();
  world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

	//Create the Bodies Here.
   bobObject1 = new ball(415,700,255)
   bobObject2 = new ball(485,700,255)
   bobObject3 = new ball(555,700,255)
   bobObject4 = new ball(625,700,255)
   bobObject5 = new ball(695,700,255)
   roofObject = new roof(535,350,400,50)
   rope1 = new Rope(bobObject1.body,{x:415, y:350})
   rope2 = new Rope(bobObject2.body,{x:485, y:350})
   rope3 = new Rope(bobObject3.body,{x:555, y:350})
   rope4 = new Rope(bobObject4.body,{x:625, y:350})
   rope5 = new Rope(bobObject5.body,{x:695, y:350})
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
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function mouseDragged() {
  Matter.Body.setPosition(bobObject1.body, { x: mouseX, y:mouseY });
}

