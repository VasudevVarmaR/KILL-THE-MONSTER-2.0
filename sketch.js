const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var bgImage;
var ground;
var hero,rope;
var b1,b2,b3,b4,b5,b11,b12,b13,b14,b15;
var monster;



function preload() 
{
  bgImage=loadImage("GamingBackground.png");
}

function setup() 
{
  var canvas = createCanvas(1500,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(150,280,1000,10);
  hero = new Hero(200,200,150);
  rope = new Rope(hero.body,{x:200,y:50});
  b1 = new Box(400,100,50,50);
  b2 = new Box(400,100,50,50);
  b3 = new Box(400,100,50,50);
  b4 = new Box(400,100,50,50);
  b5 = new Box(400,100,50,50);
  b11 = new Box(450,100,50,50);
  b12 = new Box(450,100,50,50);
  b13 = new Box(450,100,50,50);
  b14 = new Box(450,100,50,50);
  b15 = new Box(450,100,50,50);

  monster = new Monster(600,100,100,100);

}

function draw() 
{
  background(bgImage);
  Engine.update(engine); 

  ground.display();
  hero.display();
  rope.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  monster.display();
  



}

function mouseDragged()
{
    Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}

