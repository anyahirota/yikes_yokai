class Sprite {
    constructor() {

    }

    drawSprite(ctx, img, sX, sY, sW, sH, dX, dY, dW, dH) {
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }


}

export default Sprite; 