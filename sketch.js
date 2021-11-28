const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy1  , girl1 , girl2 ;
var snow_mam1 , snow_man2 ;
var bg_snow4 ;
var engine , world;

function preload ()
{
bg_snow4 = loadImage("snow_4.jpg");

}

function setup() {
  createCanvas(1200,550);
  
engine = Engine.create();

world = engine.world; 
}
 
function draw() {
  background("bg_snow4");
  Engine.update(engine)
  drawSprites();
}