function setup() {
  createCanvas(800,400);
  Block1 = createSprite(400, 200, 50, 50);
  Block2 = createSprite(150, 75, 35, 75);

  Thing = createSprite(40,40,40,40)
  Thing2 = createSprite(700,40,40,40)
  Thing.velocityX=4
}

function draw() {
  background("purple");  
  Block1.x = mouseX
  Block1.y = mouseY
  if(collision(Block1,Block2)){
    Block1.shapeColor = "red"
    Block2.shapeColor = "red"
  } else{
    Block1.shapeColor = "blue"
    Block2.shapeColor = "blue"
  }

  if(collision(Thing,Thing2)){
    Thing.height  = Thing.height * 2
  } else{
    Thing.height = 40
  }
  drawSprites();
}


