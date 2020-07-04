const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground1;
var divisions =[];
var particles =[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world; 
   
 ground1=new ground(240,790,480,20);

}
function draw() {

  Engine.update(engine);
  background(0); 
  ground1.display();
  

 for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k ,height-divisionHeight/2,10, divisionHeight));
    
}
for (var k = 0; k < divisions.length; k++){

 divisions[k].display();
}

  console.log('every 60');

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

console.log(particles.length);

 for (var j = 0; j < particles.lenght; j++) {
  particles[j].display();
  }

}




 