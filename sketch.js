const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops=100;
var drops = [];

function preload(){}   

function setup(){
   createCanvas(500,1200);
   
   engine = Engine.create();
   world = engine.world;

   for(var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(0,400), random(0,400)));
  }
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].update();
  }

}   