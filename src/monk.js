class Monk {
    constructor() {
        this.keys = [];
        this.monk = {
            x: 80,
            y: 187.5,
            width: 3257.5,
            height: 4955.5,
            frameX: 3257.5,
            frameY: 0,
            speed: 4,
            moving: false,
        };
        this.monkSprite = new Image();
        this.monkSprite.src = "monk.png";
  }

  drawMonkSprite(ctx, img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  animate(ctx, canvas) {
      this.listenForMovement(); 
      setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawMonkSprite(
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
        this.moveMonk();
    }, 20)
  }

  listenForMovement() {
    window.addEventListener("keydown", (e) => {
        this.keys[e.keyCode] = true;
        if (e.keyCode === 32) {
            this.monk.frameX = 0;
        }
    });

    window.addEventListener("keyup",  (e) => {
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