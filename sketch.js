const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var thunder1, thunder2, thunder3, thunder4;
var umbrella1;
var dr, drops=[];

function preload(){
    thunder1 = loadImage("Images/1.png");
    thunder2 = loadImage("Images/2.png");
    thunder3 = loadImage("Images/3.png");
    thunder4 = loadImage("Images/4.png");
    
}

function setup(){

    engine = Engine.create();
    world = engine.world;

    createCanvas(400, 700);
    umbrella1 = new Umbrella(200, 500);

}

function draw(){
    Engine.update(engine);
    background(0);

    umbrella1.display();

    if(frameCount % 2 === 0) {
        dr = new Drops(random(0, 400), -20);
        drops.push(dr);
    }
    for(var i=0; i<drops.length; i++) {
        drops[i].display();
    }
    

    drawSprites();    
}   

