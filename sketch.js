var box;
function setup() {
  createCanvas(400,400);
  box = createSprite (200, 200, 20, 20);
}

function draw() 
{
  background(30);
drawSprites();
if (keyDown ("left")){
  box.x -= 5
}
if (keyDown ("right")){
  box.x += 5
}
}




