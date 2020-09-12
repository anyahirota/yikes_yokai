import Sprite from "./sprite";
import Beam from "./beam";  

class Monk extends Sprite{
    constructor() {
        super(); 
        this.keys = [];
        this.monk = {
            x: 80,
            y: 187.5,
            width: 3257.5,
            height: 4955.5,
            frameX: 3257.5,
            frameY: 0,
            speed: 6,
            moving: false,
        };
        this.monkSprite = new Image();
        this.monkSprite.src = "dist/images/monk.png";
        this.beams = []; 
  }

  drawMonkSprite(ctx) {
    this.drawSprite(
      ctx,
      this.monkSprite,
      this.monk.frameX,
      this.monk.frameY,
      this.monk.width,
      this.monk.height,
      this.monk.x,
      this.monk.y,
      this.monk.width / 55,
      this.monk.height / 55
    );
    this.animateBeams(ctx); 
  }

  animateBeams(ctx) {
      for (let i = 0; i < this.beams.length; i++) {
          this.beams[i].drawBeam(ctx);
          this.beams[i].moveBeam();
          if (this.beams[i].x > 800 + this.beams[i].radius) {
              this.beams.splice(this.beams.indexOf(this.beams[i]), 1);   
          }
      }
  }

  listenForMovement() {
    window.addEventListener("keydown", (e) => {
        if (e.keyCode === 38 || e.keyCode === 40) {
            e.preventDefault()
        }
        this.keys[e.keyCode] = true;
        if (e.keyCode === 32) {
            this.beams.push(new Beam(this.monk.x + (this.monk.width / 55), this.monk.y + (this.monk.height / 55)/2)); 
            this.monk.frameX = 0;
        }
    });

    window.addEventListener("keyup",  (e) => {
         if (e.keyCode === 38 || e.keyCode === 40) {
           e.preventDefault();
         }
        delete this.keys[e.keyCode];
        if (e.keyCode === 32) {
            this.monk.frameX = 3257.5;
        }
    });

  }

    moveMonk() {
        if (this.keys[38] && this.monk.y > 0) {
            this.monk.y -= this.monk.speed;
        }
        if (this.keys[40] && this.monk.y < 500 - this.monk.height / 55) {
            this.monk.y += this.monk.speed;
        }
    }
}

export default Monk; 