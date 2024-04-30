var garden,rabbit;
var gardenImg,rabbitImg, appleImg, orangeImg;
var appleGroup, orangeGroup;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // mover o fundo
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //criar sprite do coelho
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  //criar grupos para as maçãs e laranjas
  appleGroup = new Group();
  orangeGroup = new Group();
}

function draw() {
  background(0);

  // fazer o coelho seguir o mouse
  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  // criar maçãs e laranjas a cada 80 e 100 quadros
  if (frameCount % 80 == 0) {
    createApples();
  }

  if (frameCount % 100 == 0) {
    createOranges();
  }

  drawSprites();
}

function createApples() {
  var apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
  appleGroup.add(apple);
}

function createOranges() {
  var orange = createSprite(random(50, 350),40, 10, 10);
  orange.addImage(orangeImg);
  orange.scale=0.08;
  orange.velocityY = 3;
  orange.lifetime = 150;
  orangeGroup.add(orange);
}
