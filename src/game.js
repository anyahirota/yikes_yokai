import Monk from "./monk"; 
import Ghost from "./ghost"; 
import House from "./house"; 

class Game {
    constructor() {
        this.monk = new Monk; 
        this.ghosts = {};
        this.village = this.createVillage(); 
        this.score = 0;   
        this.level = 1
        this.paused = false;   
        this.hours = 12;    
    }

    animate(ctx, canvas) {
        this.monk.listenForMovement(); 
        this.spawnGhosts();  
        setInterval(() => {
            if (!this.paused) {
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                ctx.font = "30px mikiyu";
                ctx.fillStyle = "black";  
                ctx.fillText(`Hits: ${this.score}`, 350, 40); 
                ctx.fillText(`Beams: ${this.monk.beamCount}`, 120, 40); 
                ctx.fillText(`Level: ${this.level}`, 550, 40); 
                ctx.fillText(`Hours Left: ${this.hours}`, 120, 480); 
                ctx.fillText(`Beam Boosts: ${this.monk.boosts}`, 475, 480); 

                this.drawVillage(ctx);
                this.monk.drawMonkSprite(ctx); 
                this.monk.moveMonk(); 
                this.animateGhosts(ctx, canvas); 
                this.checkBeamCollision();  
                this.checkGhostCollision(); 

                if (this.hours === 0) {
                    this.winGame(); 
                }
            }
        }, 20) 
    }

    spawnGhosts() {
        let addedSpeed = 1.0;
        let numGhosts = 3; 
        const getRandomGhost = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        setInterval(() => {
            if (!this.paused) {
                if (this.score < 500) {
                    const randGhostNum = getRandomGhost(1, numGhosts) 
                    for (let i = 0; i < randGhostNum; i++) {
                        const id = Math.random()
                        this.ghosts[id] = new Ghost(id, addedSpeed); 
                    }
                }
            }
        }, 3000)
        setInterval(() => {
            if (!this.paused) {
                if (addedSpeed < 7.0) addedSpeed += 1.5; 
                this.level += 1; 
                this.monk.boosts += 1; 
                this.hours -= 0.25; 
            }
        }, 15000)

        setInterval(() => {
            if (!this.paused) {
              if (numGhosts < 5) numGhosts += 1;
            }
        }, 30000)
    }

    animateGhosts(ctx, canvas) {
        const ghosts = Object.values(this.ghosts)
        for (let i = 0; i < ghosts.length; i++) {
            ghosts[i].drawGhostSprite(ctx);
            ghosts[i].update(canvas);
        }
    }

    createVillage() {
        let y = 12;
        const height = 67.3; 
        const village = []; 
        for (let i = 0; i < 7; i++) {
            village.push(new House(y)); 
            y += height; 
        }
        return village; 
    }

    drawVillage(ctx) {
        for (let i = 0; i < this.village.length; i++) {
          this.village[i].drawHouseSprite(ctx);
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
        if (ghost === undefined || beam === undefined) {return}; 
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
        this.monk.beamCount += 1; 
    }

    checkGhostCollision() {
        const ghosts = Object.values(this.ghosts);
        for (let i = 0; i < ghosts.length; i++) {
           let ghost = ghosts[i].ghost;
           if(!this.paused) {
               if (ghost.x < 70) {
                   this.loseGame(); 
               } 
           }
        }
    }

    loseGame() {
        this.paused = true; 
        const gameOverPopUp = document.querySelector(".game-over-popup1");
        gameOverPopUp.removeAttribute("id", "clear-game-over-popup"); 
        const pauseGameButton = document.querySelector(".pause-game-button");
        pauseGameButton.setAttribute("id", "clear-game-pause");
    }

    winGame() {
        this.paused = true;
        const winnerPopUp = document.querySelector(".winner-popup"); 
        winnerPopUp.removeAttribute("id", "clear-winner-popup"); 
        const pauseGameButton = document.querySelector(".pause-game-button");
        pauseGameButton.setAttribute("id", "clear-game-pause");
    }
    
}

export default Game; 