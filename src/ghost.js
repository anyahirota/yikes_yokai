import Sprite from "./sprite"; 

const ghosts = []; 
ghosts.push(new Ghost()); 

class Ghost extends Sprite {
  constructor() {
    this.keys = [];
    this.ghost = {
      x: 900,
      y: 0,
      width: 1408,
      height: 1161,
      frameX: 0,
      frameY: 0,
      speed: Math.random() * 1.5 + 3.5,
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
      this.ghost.width /10,
      this.ghost.height /10
    )
    }
}

export default Ghost; 