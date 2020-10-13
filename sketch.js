function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  block1 = new Block(330,255,30,40);
  drawSprites();
}