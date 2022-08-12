var bola;
var database;
var position;

function setup() {
  createCanvas(400, 400);
  bola = createSprite(200, 200, 10, 10);
  bola.shapeColor = "crimson";
  database=firebase.database();
  database.ref('bola/position').on('value',lerpos,erro);
}

function draw() {
  background(0);
  drawSprites();

if (keyDown("up")){
  escreverPos(0,-3);
}
if (keyDown("down")){
  escreverPos(0,3);
}
if (keyDown("left")){
  escreverPos(-3,0);
}
if (keyDown("right")){
  escreverPos(3,0);
}
}
function escreverPos(x,y){
  database.ref('bola/position').set({
    x:position.x + x,
    y:position.y + y,

  });
}

function erro(){
  console.error('erro firebase')
}

function lerpos(data) {
 position=data.val()
 bola.x=position.x
 bola.y=position.y
}