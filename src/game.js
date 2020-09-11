import Monk from "./monk"; 
import Ghost from "./ghost"; 

class Game {
    constructor() {
        this.monk = new Monk; 
        this.ghosts = {};
        this.score = 0;  
    }

    animate(ctx, canvas) {
        this.monk.listenForMovement(); 
        this.spawnGhosts(); 
        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
            this.monk.drawMonkSprite(ctx); 
            this.monk.moveMonk(); 
            this.animateGhosts(ctx, canvas); 
            this.checkBeamCollision();  
            // if (this.checkBeamCollision()) {
            //     this.score += 1; 
            //     console.log(this.score); 
            // }
            
        }, 20) 
    }

    spawnGhosts() {
        setInterval(() => {
            const id = Math.random()
            this.ghosts[id] = new Ghost(id); 
        }, 6000)
    }

    animateGhosts(ctx, canvas) {
        const ghosts = Object.values(this.ghosts)
        for (let i = 0; i < ghosts.length; i++) {
            ghosts[i].drawGhostSprite(ctx);
            ghosts[i].update(canvas);
        }
    }

    checkBeamCollision() {
        const ghosts = Object.values(this.ghosts); 
        for (let i = 0; i < this.monk.beams.length; i++) {
            for (let j = 0; j < ghosts.length; j++) {
                const beam = this.monk.beams[i]; 
                const ghost = ghosts[j].ghost; 
                this.collision(ghost, beam);
            }
        }
    }

    collision(ghost, beam) {
        const distX = Math.abs(beam.x - ghost.x - (ghost.width / 20) / 2);
        const distY = Math.abs(beam.y - ghost.y - (ghost.height / 20) / 2);
        if (distX > ((ghost.width / 20) / 2 + beam.radius)) { return false; }
        if (distY > ((ghost.height / 20) / 2 + beam.radius)) { return false; }
        if (distX <= ((ghost.width / 20) / 2)) {
            this.removeCollision(beam, ghost);
            return true;
        }
        if (distY <= ((ghost.height / 20) / 2)) {
            this.removeCollision(beam, ghost);
            return true;
        }
        const dx = distX - (ghost.width / 20) / 2;
        const dy = distY - (ghost.height / 20) / 2;
        if (dx * dx + dy * dy <= (beam.radius * beam.radius) &&
            distX <= ((ghost.width / 20) / 2 + beam.radius &&
                distY <= ((ghost.height / 20) / 2 + beam.radius))) {
            this.removeCollision(beam, ghost);
            return true;
        };
    }

    removeCollision(beam, ghost) {
        this.monk.beams.splice(this.monk.beams.indexOf(beam), 1); 
        delete this.ghosts[ghost.id];
        this.score += 1
        console.log(this.score);
    }
    
}

export default Game; 