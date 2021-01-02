var r;
var i;
var obj1,obj2;

function setup() {
  createCanvas(800,400);
  r=createSprite(400, 200, 50, 50);
  r.shapeColor="green";
  i=createSprite(300,100,30,30);
  i.shapeColor= "green";

  obj1 = createSprite(100,250,50,50);
  obj1.shapeColor="yellow";
  

  obj2=createSprite(200,100,40,40);
  obj2.shapeColor="pink";

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  i.x=World.mouseX;
  i.y=World.mouseY;

  if(isTouching(i,obj1))
  {
    obj1.shapeColor ="yellow";
    i.shapeColor="yellow";
  }

  else{
    obj1.shapeColor ="red";
    i.shapeColor="red";
  }
}

function isTouching(obj1,obj2)
{
  if((obj1.x-obj2.x)<(obj1.width/2+obj2.width/2) && (obj2.x-obj1.x)<(obj1.width/2+obj2.width/2) && 
  (obj1.y-obj2.y)<(obj1.height/2+obj2.height/2) &&( obj1.y-obj2.y)<obj2.height/2+obj1.height/2) {
    return true;
    }
    else {
      return false;
  
    }
}
