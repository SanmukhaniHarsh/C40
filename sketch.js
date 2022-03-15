var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game
var gameState=0;
var playerCount;
var car1,car1Img
var car2, car2Img
var trackImg
var cars = []
var allPlayers
var fuelImg, fuels
var powerCoinImg, powerCoins

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("./assets/car1.png")
  car2Img = loadImage("./assets/car2.png")
  trackImg = loadImage("./assets/track.jpg")
  fuelImg = loadImage("./assets/fuel.png")
  powerCoinsImage = loadImage("./assets/goldCoin.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  console.log(playerCount," playerCount")
  background(backgroundImage);

  if (playerCount === 2) {
    game.update(1)
  }

  if (gameState == 1) {
    console.log("gameStatePlay")
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
