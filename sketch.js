function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(350,200,20,10)
  fixedrect.shapeColor="green"
  movingrect=createSprite(470,200,20,10)
  movingrect.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
&& fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
&& fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2
&& movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2
)
{fixedrect.shapeColor="red"
movingrect.shapeColor="red"

}
else{fixedrect.shapeColor="green"
movingrect.shapeColor="green"

}
}