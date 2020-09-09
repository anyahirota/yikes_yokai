import Monk from "./monk"; 
// import Ghost from "./ghost"; 

class Game {
    constructor() {
        this.monk = new Monk; 
    }

    animate(ctx, canvas) {
        this.monk.listenForMovement(); 
        setInterval(() => {
           ctx.clearRect(0, 0, canvas.width, canvas.height); 
           this.monk.drawMonkSprite(ctx); 
           this.monk.moveMonk(); 
        }, 20)
    }
}

export default Game; 