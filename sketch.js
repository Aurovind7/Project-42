const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;

var drop
var maxDrops=100
var thunderBolt, thunderImg1, thunderImg2, thunderImg3, thunderImg4

function preload(){
    thunderImg1=loadImage("images/thunderbolt/1.png")
    thunderImg2=loadImage("images/thunderbolt/2.png")
    thunderImg3=loadImage("images/thunderbolt/3.png")
    thunderImg4=loadImage("images/thunderbolt/4.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    umbrella= new Umbrella(windowWidth/2,800,100,100)
    ground=new Ground(windowWidth/2,windowHeight-40,windowWidth,30)
    drop=new Drops(random(windowWidth/4,windowWidth/1.5),random(0,windowHeight/2))
    
}

function draw(){
    background(0);
    Engine.update(engine);
    if(frameCount%50===0){
        spawnThunder();
    }

    //for(var i=0; i<maxDrops;i++){
       // drop.push(new Drops(random(0,400), random(0,400)))
  //  }
    umbrella.display();
    drop.display();
    drawSprites();
}   
function spawnThunder(){
    var random1 = Math.round(random(1,4))
    thunderBolt=createSprite(windowWidth/2,windowHeight/2-300,200,200)
    thunderBolt.lifetime=15;
    
switch(random1) {
        
    case 1: thunderBolt.addImage(thunderImg1);
    break;
    case 2: thunderBolt.addImage(thunderImg2);
    break;
    case 3: thunderBolt.addImage(thunderImg3);
    break;
    case 4: thunderBolt.addImage(thunderImg4);
    break;
    
    default: break;
  }
}