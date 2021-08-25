var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;
var redB,blueB,greenB,pinkB,arrowsgroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(370,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  arrow = createSprite(360,220,50,10);
  arrow.addImage(arrowImage);
  arrow.scale = 0.3;

redB = new Group();
blueB = new Group();
greenB = new Group();
pinkB = new Group();
arrowsgroup = new Group();

  score = 0
}

function draw() {
 
 background("white");

 

  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  arrow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 40 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    if (select_balloon == 2) {
      blueBalloon();
    }
    if (select_balloon == 3) {
      greenBalloon();
    }
    if (select_balloon == 4) {
      pinkBalloon();
    }

  }
  drawSprites();
  
  textSize(20);
  text("Score: "+score,270,30);
  //score = score + Math.round(frameCount/40);
  stroke ("black")
}







// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowsgroup.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 4;
  red.lifetime = 90;
  red.scale = 0.1;
  redB.add(redBalloon);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 90;
  blue.scale = 0.1;
  blueB.add(blueBalloon);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(10, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 4;
  green.lifetime = 90;
  green.scale = 0.1;
  greenB.add(greenBalloon);
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 4;
  pink.lifetime = 90;
  pink.scale = 1.4;
  pinkB.add(pinkBalloon);
}

// if(arrowsgroup.isTouching(redB)){
 // redB.destroyEach();
 // arrowsgroup.destroyEach();
 // }