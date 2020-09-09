import Sprite from "./sprite"; 

class Ghost extends Sprite {
  constructor(id) {
    super(); 
    this.ghost = {
      id: id, 
      x: 700,
      y: this.getRandomY(50, 450),
      width: 1408,
      height: 1161,
      frameX: 0,
      frameY: 0,
      speed: Math.random() * 1.5 + 1.0,
      // moving: false,
    };
    this.ghostImgs = [
      "ghost_cartoon_1.png",
      "ghost_cartoon_2.png",
      "ghost_cartoon_3.png",
      "ghost_cartoon_4.png",
      "ghost_cartoon_5.png",
    ];
    this.ghostSprite = new Image();
    this.ghostSprite.src = this.ghostImgs[
      Math.floor(Math.random() * this.ghostImgs.length)
    ];
  }

  getRandomY(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  drawGhostSprite(ctx) {
    this.drawSprite(
      ctx,
      this.ghostSprite,
      this.ghost.frameX,
      this.ghost.frameY,
      this.ghost.width,
      this.ghost.height,
      this.ghost.x,
      this.ghost.y,
      this.ghost.width /20,
      this.ghost.height /20
    )
  }

  update(canvas) {
    if (this.ghost.x > 0 - (this.ghost.width/20)) {
      this.ghost.x -= this.ghost.speed; 
    } else {
      this.ghost.x = canvas.width + (this.ghost.width / 20)
    }
  }
  
}

export default Ghost; 