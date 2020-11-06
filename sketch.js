var car, car2, wall, wall2;
var speed, weight
var divider;


function setup() {
  createCanvas(1600,400);
 
divider = createSprite(800, 200, 1600, 10)

speed=random(55, 90)
weight=random(400, 1500)

car = createSprite(50, 75, 50, 80);
car2 = createSprite(300, 300, 60, 80 );
wall = createSprite(1500, 75, 40, 120 );
wall2 = createSprite(1500, 300, 40, 120);
car.velocityX = speed;
car2.velocityX = speed;
}

function draw() {
  background("black");  
 
divider.shapeColor = color("white");

wall.shapeColor = color(252, 201, 185);
wall2.shapeColor = color(252, 201, 185);

if (wall.x-car.x < (car.width + wall.width)/2) {

  car.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509;

if(deformation > 180) {
  car.shapeColor = color(214,93,78) //sakura red
}

if(deformation < 180 && deformation > 100) {
  car.shapeColor = color(255,243,150) //sakura yellow
}

if(deformation < 100) {
  car.shapeColor = color(123,187,230) //sakura blue
}


}

if (wall2.x-car2.x < (car2.width + wall2.width)/2) {

  car2.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509;

if(deformation > 180) {
 car2.shapeColor = color(214,93,78) //sakura red
}

if(deformation < 180 && deformation > 100) {
  car2.shapeColor = color(255,243,150) //sakura yellow
}

if(deformation < 100) {
  car2.shapeColor = color(123,187,230); //sakura blue
}


}



  drawSprites();
}