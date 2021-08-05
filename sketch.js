var canvas;

var background_img;

var gameState = 0;

var score = 120;

var randomPos;

var randomHouse;

//sprites for the game

var gameOver_img, gameOver_sprite;

var youwin_img, youwin;

var palace, palaceSprite;

var houseImg1, house = [];

var changedHouse;

var queBoard, queBoard_img;

var map, map_img;

var Hfence = [], H_fence, V_fence;

var a;

//Buttons for the game

var que, que_img;

var playbutton, playImage;

var sound_Sprite, sound_img;

//Sounds for the game 

var youwin_sound;

var soundButton;

var reset_sound;

var instructions2;

var gameOver;

var play;

var bgmusic;

//Playing charachter

var player;

var playerRightStand, playerLeftStand, playerUpStand, playerDownStand;

var playerLeft, playerRight, playerUp, playerDown;

var car, car_L, car_R, car_F, car_B;

//Here are the Non playing characters

var ghost_img1, ghost1;

var queen_L, queen_R, queen_F, queen_B;

var queen, queen_img;

var bat, bat_img;

var button;

var instructionButton;

function preload() {

  //WORLD ITEMS************************************

  background_img = loadImage("world/homePage.jpg");
  palace = loadImage("house/queenH.png");
  youwin_img = loadImage("world/youwin.png");
  gameOver_img = loadImage("world/gameover.png");
  playImage = loadImage("world/play.png");
  que_img = loadImage("world/question.png");
  queBoard_img = loadImage("world/greenBoard.jpg");
  map_img = loadImage("world/image.jpg");


  //NON PLAYING  CHARACHTER IMAGES***************************

  queen_img = loadImage("world/rani (2).png");
  queen_F = loadImage("world/rani (2).png");
  queen_B = loadImage("world/rani (1).png")
  queen_L = loadImage("world/rani (4).png")
  queen_R = loadImage("world/rani (3).png")

  ghost_img1 = loadImage("ghost/ghost (1).png");
  ghost_img2 = loadImage("ghost/ghost (2).png");
  ghost_img3 = loadImage("ghost/ghost (3).png");


  bat_img = loadAnimation(
    "bat/bat1.png",
    "bat/bat2.png",
    "bat/bat3.png",
    "bat/bat4.png",
    "bat/bat5.png"
  )

  //house images*********************************************

  // houseImg5 = loadImage("house/house (5).png")

  // houseImg19 = loadImage("house/old/house (9).png");

  //PLAYING CHARACHTERS*************************************

  car_F = loadImage("world/car2.png")
  car_B = loadImage("world/car4.png")
  car_L = loadImage("world/car3.png")
  car_R = loadImage("world/car1.png")

  //The player will move left ward 
  playerLeft = loadAnimation(
    "player/leftmove (1).png",
    "player/leftmove (2).png",
    "player/leftmove (3).png",
    "player/leftmove (4).png",
  )

  //the player will move right ward
  playerRight = loadAnimation(
    "player/rightmove (1).png",
    "player/rightmove (2).png",
    "player/rightmove (3).png",
    "player/rightmove (4).png",
  )

  //the player will move up ward
  playerUp = loadAnimation(
    "player/frontmove (1).png",
    "player/frontmove (2).png",
    "player/frontmove (3).png",
    "player/frontmove (4).png",
  );

  //the player will move down ward
  playerDown = loadAnimation(
    "player/backmove (1).png",
    "player/backmove (2).png",
    "player/backmove (3).png",
    "player/backmove (4).png",
  )

  playerUpStand = loadAnimation("player/backstand.png");
  playerLeftStand = loadAnimation("player/leftstand.png");
  playerRightStand = loadAnimation("player/rightstand.png");
  playerDownStand = loadAnimation("player/fronstand.png");

  // LOADING SOUNDS **************************************

  gameOver = loadSound("music/gameOver.mp3")
  youwin_sound = loadSound('music/youWin.mp3');
  play = loadSound("music/Play.wav")
  reset_sound = loadSound("music/reset_sound.mp3")
  instructions2 = loadSound("music/instructions2.mp3")
  bgmusic = loadSound("music/Music.mp3")

}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight - 24);

  //All the sprites are here****************************

  playbutton = createSprite(windowWidth / 2, windowHeight / 2);
  playbutton.addImage(playImage);
  playbutton.scale = 0.3;

  // button = createButton('Mute')
  // button.mousePressed(mute);
  // button.position(windowWidth - windowWidth + 70, windowHeight - windowHeight)

  // instructionButton = createButton('Play Instructions')
  // instructionButton.mousePressed(instruction);
  // instructionButton.position(windowWidth - windowWidth + 150, windowHeight - windowHeight)

  que = createSprite(windowWidth - windowWidth + 100, windowHeight - windowHeight + 100);
  que.addImage(que_img);
  que.scale = 0.1;

  queBoard = createSprite(windowWidth / 2, windowHeight / 2 - 130);
  queBoard.addImage(queBoard_img);
  queBoard.scale = 0.3;

  // map = createSprite(windowWidth / 2, windowHeight / 2 + 28);
  // map.addImage(map_img);
  // map.scale = 0.25;

  queen = createSprite(windowWidth / 2, windowHeight / 2);
  queen.addImage(queen_img);
  queen.scale = 0.05;

  // fences();

  // houses();

  //THEY ARE THE SPRITES WHICH WILL BE IN RANDOM POSITION IN THE GAME;

  changedHouse = createSprite(windowWidth / 2, windowHeight / 2);
  // changedHouse.addImage(houseImg19);
  changedHouse.scale = 0.16;
  changedHouse.setCollider("rectangle", 0, 0, 400, 350)

  // palaceSprite = createSprite(a.x, a.y);
  // palaceSprite.addImage(palace);
  // palaceSprite.scale = 0.2;

  //RANDOM FOR MAKING HOUSE AT THE DIFERENT POSITIONS

  // randomSketch();

  changedHouse.x = queen.x;
  changedHouse.y = queen.y;

  console.log(changedHouse.x, changedHouse.y)
  console.log(queen.x, queen.y)

  //PLAYING CHARACHTERS******************************************

  // player = createSprite(windowWidth / 2, windowHeight / 2);
  // player.addAnimation("player3", playerDownStand);
  // player.scale = 0.5;
  // player.setCollider("rectangle", 0, 0, 20, 20)

  // car = createSprite(windowWidth / 2 - 100, windowHeight / 2);
  // car.addImage(car_B);
  // car.scale = 0.07;

  //NON PLAYING CHARACHTERS******************************************

  // ghost1 = createSprite(windowWidth / 2 + 300, windowHeight / 2);
  // ghost1.addImage(ghost_img1);
  // ghost1.scale = 0.03;

  // ghost4 = createSprite(windowWidth / 2 + 115, windowHeight / 2 - 240);
  // ghost4.addAnimation("bat", bat_img);
  // ghost4.scale = 1;

  // ghost2 = createSprite(windowWidth / 2 - 150, windowHeight / 2);
  // ghost2.addImage(ghost_img2);
  // ghost2.scale = 0.04;

  // ghost3 = createSprite(windowWidth / 2, windowHeight / 2 + 140);
  // ghost3.addAnimation("bat", bat_img);
  // ghost3.scale = 1;

  // ghost5 = createSprite(windowWidth / 2 - 150, windowHeight / 2 - 131);
  // ghost5.addImage(ghost_img3);
  // ghost5.scale = 0.06;

  // ghost6 = createSprite(windowWidth / 2 + 345, windowHeight / 2 - 301);
  // ghost6.addImage(ghost_img3);
  // ghost6.scale = 0.06;

  // ghost7 = createSprite(random(windowWidth / 2 - 100), windowHeight / 2 + 325);
  // ghost7.addAnimation("bat", bat_img);
  // ghost7.scale = 1;

  // youwin = createSprite(windowWidth / 2, windowHeight / 2);
  // youwin.addImage(youwin_img);
  // youwin.scale = 0.2;

  // gameOver_sprite = createSprite(windowWidth / 2, windowHeight / 2);
  // gameOver_sprite.addImage(gameOver_img);
  // gameOver_sprite.scale = 0.4;

  // bgmusic.play();
  // bgmusic.setVolume(0.3)

  gameState = 0;
}


//************************THIS IS THE DRAW FUNCTION************************************ */

function draw() {
  background(0);

  //GIVING THE DEPTH 


  //THIS IS THE INITIAL STATE OF GAME************************************

  if (gameState === 0) {
    background(background_img);

    //VISIBLING THE THINGS IN THE GAME

    // queBoard.visible = false;
    // map.visible = false;
    // player.visible = false;
    // playbutton.visible = true;


    // que.visible = true;
    // changedHouse.visible = false;
    // palaceSprite.visible = false;
    // youwin.visible = false;
    // gameOver_sprite.visible = false;
    // camera.zoom = 1;

    // for (var x = 0; x < 93; x++) {
    //   Hfence[x].visible = false;
    // }

    // a.visible = false;
    // b.visible = false;
    // c.visible = false;
    // d.visible = false;
    // e.visible = false;
    // f.visible = false;
    // g.visible = false;
    // h.visible = false;
    // k.visible = false;
    // l.visible = false;
    // m.visible = false;
    // n.visible = false;
    // o.visible = false;
    // p.visible = false;
    // q.visible = false;
    // r.visible = false;
    // s.visible = false;
    // t.visible = false;
    // j.visible = false;
    // i.visible = false;
    // queen.visible = false;

    // ghost1.visible = false;
    // ghost2.visible = false;
    // ghost3.visible = false;
    // ghost4.visible = false;
    // ghost5.visible = false;
    // ghost6.visible = false;
    // ghost7.visible = false;

    // car.visible = false;

    //HERE ARE THE LOGICS IN THE GAME

    // player.depth = player.depth + 1

    // if (keyDown(ENTER) || mousePressedOver(playbutton)) {
    //   console.log("play the game");
    //   car.visible = true;

    //   car.x = windowWidth / 2 - 100;
    //   car.y = windowHeight / 2;

    //   play.play();
    //   play.setVolume(0.1)

    //   camera.zoom = 5
    //   gameState = 1;
    // }
  }

  //THIS IS THE FIRST  STATE*******************************************

 

  //THIS IS THE SECOND STATE*****************************************

 

  //THIS IS THE GAME OVER STATE***********************************

  

  keyPressed();
  drawSprites();

  push()
  fill('white')
  textSize(6)
  stroke("black")
  text("Time left:" + score, player.x - 140, player.y - 60);
  pop();

  textSize(30)
  fill('#906a00')
  textFont("ALGERIAN")
  text("Click on 'RESTART' button to restart", player.x - 240, player.y + 170);

}

function playerMovement() {

  //PLAYER MOVEMEN ADDING ANIMATION TO THE PLAYER

  if (keyDown(LEFT_ARROW)) {
    player.x = player.x - 2;
    player.addAnimation("player3", playerLeft);
    queen.addImage(queen_L);
  }
  if (keyDown(RIGHT_ARROW)) {
    player.x = player.x + 2;
    player.addAnimation("player3", playerRight);
    queen.addImage(queen_R);
  }
  if (keyDown(UP_ARROW)) {
    player.y = player.y - 2;
    player.addAnimation("player3", playerDown);
    queen.addImage(queen_B);
  }
  if (keyDown(DOWN_ARROW)) {
    player.y = player.y + 2;
    player.addAnimation("player3", playerUp);
    queen.addImage(queen_F);
  }
}

function carMovement() {

  //ADDING THE ANIMATION TO THE CAR 

  if (keyDown(LEFT_ARROW)) {
    player.x = player.x - 1;
    player.addAnimation("player3", playerLeft);
    car.addImage(car_L);
  }
  if (keyDown(RIGHT_ARROW)) {
    player.x = player.x + 1;
    player.addAnimation("player3", playerRight);
    car.addImage(car_R);
  }
  if (keyDown(UP_ARROW)) {
    player.y = player.y - 1;
    player.addAnimation("player3", playerDown);
    car.addImage(car_B);
  }
  if (keyDown(DOWN_ARROW)) {
    player.y = player.y + 1;
    player.addAnimation("player3", playerUp);
    car.addImage(car_F);
  }
}

function stand() {

  //ADDING THE ANIMATION TO THE PLAYER WHEN IT STANDS

  if (keyWentUp(LEFT_ARROW)) {
    player.addAnimation("player3", playerLeftStand);
  }
  if (keyWentUp(RIGHT_ARROW)) {
    player.addAnimation("player3", playerRightStand);
  }
  if (keyWentUp(DOWN_ARROW)) {
    player.addAnimation("player3", playerDownStand);
  }
  if (keyWentUp(UP_ARROW)) {
    player.addAnimation("player3", playerUpStand);
  }
}

function keyPressed() {

  if (keyDown('shift')) {
    queBoard.visible = true;
  }
  if (mousePressedOver(que)) {
    queBoard.visible = true;
    console.log("hi");
  }
}

function switchHouse() {

  // this ths switch for making the palace at random position**********

  if (frameCount % 400 === 0) {
    randomHouse = Math.round(random(1, 20))
    switch (randomHouse) {
      case 1: palaceSprite.x = a.x; palaceSprite.y = a.y; a.visible = false;
        break;
      case 2: palaceSprite.x = b.x; palaceSprite.y = b.y; b.visible = false;
        break;
      case 3: palaceSprite.x = c.x; palaceSprite.y = c.y; c.visible = false;
        break;
      case 4: palaceSprite.x = d.x; palaceSprite.y = d.y; d.visible = false;
        break;
      case 5: palaceSprite.x = e.x; palaceSprite.y = e.y; e.visible = false;
        break;
      case 6: palaceSprite.x = f.x; palaceSprite.y = f.y; f.visible = false;
        break;
      case 7: palaceSprite.x = g.x; palaceSprite.y = g.y; g.visible = false;
        break;
      case 8: palaceSprite.x = h.x; palaceSprite.y = h.y; h.visible = false;
        break;
      case 9: palaceSprite.x = i.x; palaceSprite.y = i.y; i.visible = false;
        break;
      case 10: palaceSprite.x = j.x; palaceSprite.y = j.y; k.visible = false;
        break;
      case 11: palaceSprite.x = k.x; palaceSprite.y = k.y; l.visible = false;
        break;
      case 12: palaceSprite.x = l.x; palaceSprite.y = l.y; m.visible = false;
        break;
      case 13: palaceSprite.x = n.x; palaceSprite.y = n.y; n.visible = false;
        break;
      case 14: palaceSprite.x = o.x; palaceSprite.y = o.y; o.visible = false;
        break;
      case 15: palaceSprite.x = p.x; palaceSprite.y = p.y; p.visible = false;
        break;
      case 16: palaceSprite.x = q.x; palaceSprite.y = q.y; q.visible = false;
        break;
      case 17: palaceSprite.x = r.x; palaceSprite.y = r.y; r.visible = false;
        break;
      case 18: palaceSprite.x = s.x; palaceSprite.y = s.y; s.visible = false;
        break;
      case 19: palaceSprite.x = t.x; palaceSprite.y = t.y; t.visible = false;
        break;
    }
  }

}

function ghost1Move() {

  //GIVING MOVEMENT TO THE NON PLAYING CHARACHTER

  if (ghost1.x < windowWidth / 2 - 50) {
    ghost1.velocityX = 2;
  }
  else if (ghost1.x > windowWidth / 2 + 299) {
    ghost1.velocityX = -2;
  }
  if (ghost2.x < windowWidth / 2 - 50) {
    ghost2.velocityX = 2;
  }
  else if (ghost2.x > windowWidth / 2 + 299) {
    ghost2.velocityX = -2;
  }
  if (ghost3.y < windowHeight / 2 - 130) {
    ghost3.velocityY = 2;
  }
  else if (ghost3.y > windowHeight / 2 + 139) {
    ghost3.velocityY = -2;
  }
  if (ghost4.x < windowWidth / 2 - 200) {
    ghost4.velocityX = 2;
  }
  else if (ghost4.x > windowWidth / 2 + 114) {
    ghost4.velocityX = -2;
  }
  if (ghost5.y < windowHeight / 2 - 130) {
    ghost5.velocityY = 2;
  }
  else if (ghost5.y > windowHeight / 2 + 139) {
    ghost5.velocityY = -2;
  }

  if (ghost6.y < windowHeight / 2 - 300) {
    ghost6.velocityY = 2;
  }
  else if (ghost6.y > windowHeight / 2 + 300) {
    ghost6.velocityY = -2;
  }

  if (ghost7.x < windowWidth / 2 - 50) {
    ghost7.velocityX = 2;
  }
  else if (ghost7.x > windowWidth / 2 + 299) {
    ghost7.velocityX = -2;
  }


}

function reset_fnsound() {
  //RESET SOUND
  reset_sound.play();

}

function instructions_2() {
  //INSTRUCTION WILL BE IN SOUND
  instructions2.play();
}

function houses() {

  //ALL THE HOUSES ARE HERE FOR THE GAME ****************************************

  house.push(a = createSprite(windowWidth / 2 + 180, windowHeight / 2 - 80));
  a.addImage(houseImg5);
  a.scale = 0.3;
  a.setCollider("rectangle", 0, 0, 200, 150)

  house.push(b = createSprite(windowWidth / 2 + 65, windowHeight / 2 - 80));
  b.addImage(houseImg5);
  b.scale = 0.3;
  b.setCollider("rectangle", 0, 0, 200, 150)

  house.push(c = createSprite(windowWidth / 2 - 65, windowHeight / 2 - 300));
  c.addImage(houseImg5);
  c.scale = 0.3;
  c.setCollider("rectangle", 0, 0, 200, 150)

  house.push(d = createSprite(windowWidth / 2 - 70, windowHeight / 2 + 80));
  d.addImage(houseImg5);
  d.scale = 0.3;
  d.setCollider("rectangle", 0, 0, 200, 150)

  house.push(e = createSprite(windowWidth / 2 + 170, windowHeight / 2 - 260));
  e.addImage(houseImg5);
  e.scale = 0.3;
  e.setCollider("rectangle", 0, 0, 200, 150)

  house.push(f = createSprite(windowWidth / 2 - 20, windowHeight / 2 + 200));
  f.addImage(houseImg5);
  f.scale = 0.3;
  f.setCollider("rectangle", 0, 0, 200, 150)

  house.push(g = createSprite(windowWidth / 2 - 200, windowHeight / 2 - 310));
  g.addImage(houseImg5);
  g.scale = 0.3;
  g.setCollider("rectangle", 0, 0, 200, 150)

  house.push(h = createSprite(windowWidth / 2 + 65, windowHeight / 2 + 65));
  h.addImage(houseImg5);
  h.scale = 0.3;
  h.setCollider("rectangle", 0, 0, 200, 150)

  house.push(i = createSprite(windowWidth / 2 + 220, windowHeight / 2 + 70));
  i.addImage(houseImg5);
  i.scale = 0.3;
  i.setCollider("rectangle", 0, 0, 200, 150)

  house.push(j = createSprite(windowWidth / 2 - 70, windowHeight / 2 - 70));
  j.addImage(houseImg5);
  j.scale = 0.3;
  j.setCollider("rectangle", 0, 0, 200, 150)

  house.push(k = createSprite(windowWidth / 2 - 320, windowHeight / 2 - 310));
  k.addImage(houseImg5);
  k.scale = 0.3;
  k.setCollider("rectangle", 0, 0, 200, 150)

  house.push(l = createSprite(windowWidth / 2 + 250, windowHeight / 2 + 220));
  l.addImage(houseImg5);
  l.scale = 0.3;
  l.setCollider("rectangle", 0, 0, 200, 150)

  house.push(m = createSprite(windowWidth / 2 - 220, windowHeight / 2 + 20));
  m.addImage(houseImg5);
  m.scale = 0.3;
  m.setCollider("rectangle", 0, 0, 200, 150)

  house.push(n = createSprite(windowWidth / 2 - 120, windowHeight / 2 - 190));
  n.addImage(houseImg5);
  n.scale = 0.3;
  n.setCollider("rectangle", 0, 0, 200, 150)

  house.push(o = createSprite(windowWidth / 2 + 55, windowHeight / 2 - 300));
  o.addImage(houseImg5);
  o.scale = 0.3;
  o.setCollider("rectangle", 0, 0, 200, 150)

  house.push(p = createSprite(windowWidth / 2 + 290, windowHeight / 2 - 100));
  p.addImage(houseImg5);
  p.scale = 0.3;
  p.setCollider("rectangle", 0, 0, 200, 150)

  house.push(q = createSprite(windowWidth / 2 - 160, windowHeight / 2 + 280));
  q.addImage(houseImg5);
  q.scale = 0.3;
  q.setCollider("rectangle", 0, 0, 200, 150)

  house.push(r = createSprite(windowWidth / 2 + 320, windowHeight / 2 - 300));
  r.addImage(houseImg5);
  r.scale = 0.3;
  r.setCollider("rectangle", 0, 0, 200, 150)

  house.push(s = createSprite(windowWidth / 2 + 50, windowHeight / 2 - 200));
  s.addImage(houseImg5);
  s.scale = 0.3;
  s.setCollider("rectangle", 0, 0, 200, 150)

  house.push(t = createSprite(windowWidth / 2 - 310, windowHeight / 2 + 260));
  t.addImage(houseImg5);
  t.scale = 0.3;
  t.setCollider("rectangle", 0, 0, 200, 150)
}

function fences() {

  // THEY ARE THE FENCES WHICH IS THE KIND OF OBSTACLES;

  Hfence.push(u = createSprite(windowWidth / 2 + 230, windowHeight / 2 + 310, 202, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 50, windowHeight / 2 + 310, 110, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 60, windowHeight / 2 + 310, 60, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 195, windowHeight / 2 + 340, 337, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 171, windowHeight / 2 + 370, 395, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 159, windowHeight / 2 + 340, 138, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 312, windowHeight / 2 + 340, 110, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 245, windowHeight / 2 + 160, 149, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 245, windowHeight / 2 + 130, 149, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 120, windowHeight / 2 - 14, 209, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 46, windowHeight / 2 + 130, 60, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 38, windowHeight / 2 + 130, 50, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 160, windowHeight / 2 + 202, 100, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 175, windowHeight / 2 + 230, 133, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 15, windowHeight / 2 + 158, 130, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 137, windowHeight / 2 + 160, 54, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 274, windowHeight / 2 + 165, 65, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 287, windowHeight / 2 + 195, 92, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 228, windowHeight / 2 + 85, 130, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 271, windowHeight / 2 + 57, 40, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 182, windowHeight / 2 + 57, 40, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 112, windowHeight / 2 + 130, 40, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 265, windowHeight / 2 - 33, 205, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 305, windowHeight / 2 - 3, 65, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 290, windowHeight / 2 + 26, 35, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 225, windowHeight / 2 - 64, 125, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 80, windowHeight / 2 + 15, 123, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 248, windowHeight / 2 + 15, 156, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 35, windowHeight / 2 + 17, 45, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 35, windowHeight / 2 - 13, 45, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 289, windowHeight / 2 - 13, 68, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 343, windowHeight / 2 - 64, 54, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 73, windowHeight / 2 - 112, 120, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 137, windowHeight / 2 - 142, 50, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 63, windowHeight / 2 - 142, 40, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2, windowHeight / 2 - 142, 30, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 57, windowHeight / 2 - 137, 76, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 176, windowHeight / 2 - 137, 100, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 190, windowHeight / 2 - 167, 127, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 43, windowHeight / 2 - 224, 115, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 120, windowHeight / 2 - 224, 152, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 280, windowHeight / 2 - 234, 100, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 8, windowHeight / 2 - 258, 95, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 175, windowHeight / 2 - 258, 95, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 187, windowHeight / 2 - 321, 117, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 187, windowHeight / 2 - 351, 185, 5))
  u.shapeColor = "#612f00";

  //vertical fences****************************************************************

  Hfence.push(u = createSprite(windowWidth / 2 + 362, windowHeight / 2 + 40, 5, 750))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 332, windowHeight / 2 - 147, 5, 180))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 330, windowHeight / 2 + 57, 5, 148))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 172, windowHeight / 2 + 220, 5, 120))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 172, windowHeight / 2 + 75, 5, 115))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 18, windowHeight / 2 + 72, 5, 117))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 15, windowHeight / 2 + 73, 5, 117))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 139, windowHeight / 2 + 165, 5, 295))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 78, windowHeight / 2 + 217, 5, 180));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 47, windowHeight / 2 + 219, 5, 120));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 78, windowHeight / 2 + 232, 5, 152));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 111, windowHeight / 2 + 262, 5, 60));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 226, windowHeight / 2 + 322, 5, 35));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 256, windowHeight / 2 + 324, 5, 38));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 91, windowHeight / 2 + 324, 5, 32));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 240, windowHeight / 2 + 211, 5, 36));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 330, windowHeight / 2 + 237, 5, 152));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 210, windowHeight / 2 + 174, 5, 60));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 239, windowHeight / 2 + 155, 5, 25));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 335, windowHeight / 2 + 95, 5, 204));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 305, windowHeight / 2 + 95, 5, 140));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 164, windowHeight / 2 + 125, 5, 76));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 130, windowHeight / 2 + 10, 5, 244));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 162, windowHeight / 2 + 12, 5, 95));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 16, windowHeight / 2 - 78, 5, 130));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 14, windowHeight / 2 - 62, 5, 102));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 225, windowHeight / 2 - 75, 5, 126));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 255, windowHeight / 2 - 90, 5, 156));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 128, windowHeight / 2 - 120, 5, 35));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 98, windowHeight / 2 - 120, 5, 37));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 99, windowHeight / 2 - 197, 5, 60));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 245, windowHeight / 2 - 293, 5, 60));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 280, windowHeight / 2 - 310, 5, 87));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 362, windowHeight / 2 - 300, 5, 99));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 97, windowHeight / 2 - 305, 5, 95));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 + 130, windowHeight / 2 - 245, 5, 155));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 45, windowHeight / 2 - 185, 5, 85));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 13, windowHeight / 2 - 185, 5, 85));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 198, windowHeight / 2 - 163, 5, 127));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 224, windowHeight / 2 - 180, 5, 160));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 285, windowHeight / 2 - 160, 5, 194));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 318, windowHeight / 2 - 160, 5, 194));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 96, windowHeight / 2 - 310, 5, 108));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 128, windowHeight / 2 - 310, 5, 108));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 128, windowHeight / 2 - 310, 5, 108));
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2 - 370, windowHeight / 2 + 20, 5, 750))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2, windowHeight / 2 - 355, 750, 5))
  u.shapeColor = "#612f00";

  Hfence.push(u = createSprite(windowWidth / 2, windowHeight / 2 + 370, 750, 5))
  u.shapeColor = "#612f00";

}






