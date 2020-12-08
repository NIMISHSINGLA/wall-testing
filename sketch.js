var bullet,wall;

var speed,weight,thikness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 5);
  
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thikness ,height/2);
  wall.shapeColor = "grey";


  speed = random(55,90);
  weight = random(400,1500);
  thikness = random(22,83);

  bullet.velocityX = speed;
}

function draw() {
  background("black");  


if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thikness*thikness*thikness);

  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }

  if(damage < 10 ){
    wall.shapeColor =  color(0,255,0);
  }

  
}





  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge>= wallLeftEdge) {
    return true;
  }
  return false;

}