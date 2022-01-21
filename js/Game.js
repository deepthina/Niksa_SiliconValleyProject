class Game {
  constructor() {}

  start() {
    form = new Form();
    form.play();

    player = new Player();
    //Adding the Images
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", playerCarimg);
    car1.scale = 1;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", playerCarimg2);
    car2.scale = 1;

    car3 = createSprite();
    car3.addImage("car1", playerCarimg3);
    car3.scale = 1;

    car4 = createSprite();
    car4.addImage("car2", playerCarimg4);
    car4.scale = 1;
  }
  play() {
    image(TrackImg, 0, 0, width, height);

    //For moving the car in Up direction
    if (keyIsDown(UP_ARROW)) {
      car1.y -= 9;

      console.log(car1.x);
      console.log(car1.y);
    }
    //For moving the car in Left direction
    if (keyIsDown(LEFT_ARROW)) {
      car1.x -= 5;
    }
    //For moving the car in Right direction
    if (keyIsDown(RIGHT_ARROW)) {
      car1.x += 5;
    }

    drawSprites();
  }
}
