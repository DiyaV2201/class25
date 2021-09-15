const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var b1,b2,b3,b4,b5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var bgImage

function preload(){
    bgImage=loadImage ("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //box1 = new Box(200,300,50,50);
    b1=new Box(700,320,70,70);
    b2 = new Box (920,320,70,70);
    b3=new Box(700,240,70,70);
    b4 = new Box (920,240,70,70);
    b5 = new Box (810,160,70,70);

    ground = new Ground(600,height,1200,20)

    pig1= new Pig(810,360)
    pig2= new Pig(810,220)

    log1= new Log(810,260,300,PI/2)
    log2= new Log(810,180,300,PI/2)
    log3= new Log(760,120,160,PI/7)
    log4= new Log(870,120,150,-PI/2)

    bird=new Bird(20,20)
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    //box1.display();
   b1.display();
   b2.display();
   ground.display();
   pig1.display();
   log1.display();
   b3.display();
   b4.display();
   pig2.display();
   log2.display();
   log3.display();
   log4.display();
   b5.display();
   bird.display();
}