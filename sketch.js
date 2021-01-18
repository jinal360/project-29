
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground (250,300,300,10);
    box1 = new Box(20,299,30,30)

}

function draw (){

    background("black");

    stand.display()
    box1.display()
}
