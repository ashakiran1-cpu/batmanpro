const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var gameWorld,gameEngine;

var walking_man,man,manBody;
var thunderImg1,thunderImg2,thunderImg3,thunderImg4,thunder;
var buildingImg1,buildingImg2,building;

var rainSound,thunderBoltSound;
var rainDrops=[];

function preload(){
    walking_man=loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
    
    thunderImg1=loadImage("thunderbolt/1.png");
    thunderImg2=loadImage("thunderbolt/2.png");
    thunderImg3=loadImage("thunderbolt/3.png");
    thunderImg4=loadImage("thunderbolt/4.png");

    buildingImg1=loadImage("building1.png");
    buildingImg2=loadImage("building2.png");

    rainSound=loadSound("rain-03.mp3");
    thunderBoltSound=loadSound("rain_start.mp3")


}

function setup(){
    createCanvas(500,600)
    gameEngine=Engine.create();
    gameWorld=gameEngine.world;
    
    

    man=createSprite(250,495,20,20);
    man.addAnimation("manwalking",walking_man);
    man.scale=0.3

    manBody=Bodies.circle(250,440,40,{isStatic:true})
   World.add(gameWorld,manBody)

    //rainSound.play();
    
    
    
}

function draw(){
    background(0);
    Engine.update(gameEngine);
    rainSound.play();

    thunderBolt();
    spawnBuilding();

    if(frameCount%5==0){
        rainDrops.push( new Drops(random(0,500)))
    }

    for(var i=0;i<rainDrops.length;i++)
    {
        rainDrops[i].display();
    }
    drawSprites();
    
}   

function thunderBolt(){
    if(frameCount%150==0){
        thunder=createSprite(random(20,480),0,20,20)
        var select=Math.round(random(1,4));
        thunderBoltSound.play();
        switch(select){
            case 1 :thunder.addImage(thunderImg1);
            break;
            case 2 : thunder.addImage(thunderImg2);
            break;
            case 3 : thunder.addImage(thunderImg3);
            break;
            default:thunder.addImage(thunderImg4);
        }
        thunder.scale=0.5
        thunder.lifetime=20;
    }
}

function spawnBuilding(){
    if(frameCount%60==0){
        building=createSprite(550,420,20,20)
        var select=Math.round(random(1,2));
        building.velocityX=-4
        switch(select){
            case 1 :building.addImage(buildingImg1);
            break;
            default:building.addImage(buildingImg2);
        }
        building.scale=0.5
        man.depth=building.depth;
        man.depth+=1;
        building.lifetime=200;
    }
}