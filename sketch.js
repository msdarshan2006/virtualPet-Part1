var dog,dogHappy,dogImage;
var foodS,foodStock;
var database;

function preload()
{
  dogImage = loadImage("images/Dog.png");
  dogHappy = loadImage("images/happydog.png");


}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250,50,100);
  dog.addImage(dogImage);
  dog.scale= 0.15 ;
  database = firebase.database();
  dbRef = database.ref("food");
  //listner function to read from dtabase
  
  dbRef.on("value",readStock);
  

}
function readStock(data){
  foodS = data.val();
  console.log(foodS);

}
function writeStock(stock){
  if(stock===0){
    stock=0;
  }else{
    stock=stock-1
  }
  dbRef = database.ref("/");
  dbRef.update({
    food:stock
  });

}
function draw() {  
background(46,139,87);
text("foodRemaining:-"+foodS,100,100);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here

}



