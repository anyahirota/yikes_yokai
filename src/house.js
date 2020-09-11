import Sprite from "./sprite";

class House extends Sprite {
  constructor(y) {
    super();
    this.house = {
      x: 0,
      y: y,
      width: 799,
      height: 673,
      frameX: 0,
      frameY: 0,
      speed: 0,
      moving: false,
    };
    this.houseSprite = new Image(); 
    this.houseSprite.src = "dist/images/house.png"; 
  }

  drawHouseSprite(ctx) {
    this.drawSprite(
      ctx,
      this.houseSprite,
      this.house.frameX,
      this.house.frameY,
      this.house.width,
      this.house.height,
      this.house.x,
      this.house.y,
      this.house.width / 10,
      this.house.height / 10
    );
  }

}

export default House; 