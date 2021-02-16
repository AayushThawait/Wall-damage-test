var bullet,wall; 
var lbullet,lwall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 20);
  bullet.velocityX=speed;
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=("grey");
}

function draw() {
  background(0,0,0); 

if(has_collided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10){
    wall.shapeColor=("red");
  }

  if(damage<10){
    wall.shapeColor=("green");
  }
}  
  


  
  drawSprites();
}

function has_collided(lbullet, lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}