import Monk from "./monk"; 
import Ghost from "./ghost"; 

class Game {
    constructor() {
        this.monk = new Monk; 
        this.ghosts = [];
         
    }

    animate(ctx, canvas) {
        this.monk.listenForMovement(); 
        // this.spawnGhosts(); 
        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
            this.monk.drawMonkSprite(ctx); 
            this.monk.moveMonk(); 
            // this.animateGhosts(ctx, canvas); 
        }, 20)
    }

    spawnGhosts() {
        setInterval(() => {
            this.ghosts.push(new Ghost); 
        }, 6000)
    }

    animateGhosts(ctx, canvas) {
        for (let i = 0; i < this.ghosts.length; i++) {
            this.ghosts[i].drawGhostSprite(ctx);
            this.ghosts[i].update(canvas);
        }
    }
    
}

export default Game; 