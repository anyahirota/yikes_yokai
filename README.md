# Yikes, Yokai!
### Introduction

<img align="right" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/welcome.png" /> 

**Yikes, Yokai!** is a cute original shooter game inspired by Space Invaders and Japanese design and patterns. This game was built with vanilla Javascript and HTML Canvas (no additional libraries). 

Check out the live site [here](https://anyahirota.github.io/yikes_yokai/)!

### Game Story

"Yokai" are a class of supernatural monsters and spirits in Japanese folklore.

In old Japan, a small country village is plagued by nightly hauntings and possessions. Tonight, the village has called upon the famous exorcist monk, known for his light wielding abilities. Will he succeed and vanquish the yokai, or will the village continue to suffer under the cruel spirits? 

### Gameplay

Survive 12 hours of night!

Move the monk up and down in front of the village using the up and down arrow keys. Vanquish a yokai by shooting it with a beam of light by pressing the space bar. Every time you shoot a beam, your beam count decreases by 1. Every time a beam hits a yokai, the monk absorbs their spirit energy and your beam count increases by 1. Every level or 15 game minutes (approx. 15 seconds), you gain a beam boost. Use a beam boost by simultaneously pressing the left and right arrow keys to return your beam count to 6. If a yokai reaches the village, you lose. If the "hours left" reaches 0, you have survived the night and win! 

<p align="center">
  <img src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/shootinggif.gif">
</p>


# Technologies Used
- Vanilla JavaScript 
- HTML (Canvas)
- CSS

# Key Features

### Modals

This single page game uses modals to create a multipage story-like feel. Upon loading the game, introductory and instructional modals are displayed, overlaid on top of each other using the CSS z-index property. An example of the HTML and CSS used to display modals is given below: 
```
<!-- HTML -->
<div class="welcome-modal-container" >
  <div class="welcome-modal-background"></div>
  <div class="welcome-form-container" >
      <div class="welcome-form-border">
          <div class="welcome-form">
              <h1 class="welcome-msg1">Welcome to</h1>
              <h1 class="welcome-msg2">Yikes, Yokai!</h1>
              <div class="welcome-img-collage">
                  <img class="welcome-monk" src="dist/images/welcome_monk.png" alt="">
                  <img class="welcome-ghost1" src="dist/images/cute_ghost.png" alt="">
                  <img class="welcome-ghost2" src="dist/images/cute_ghost_2.png" alt="">
              </div>
              <button id="welcome-button" class="welcome-next-button">Next</button>
          </div>
      </div>
  </div>
</div>

/* CSS */

.welcome-modal-container {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.welcome-modal-background {
  z-index: 20;
  position: fixed;
  background-image: url("../images/waves.png");
  background-position: center;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.welcome-form-container {
  z-index: 21;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
}

#close-welcome {
  display: none;
}
```
To close each modal, an event listener is attached to buttons located at the bottom of each modal, labelled "next" or "enter". An example of JavaScript used is displayed below:

```
//JavaScript
const welcomeButton = document.getElementById("welcome-button");

welcomeButton.addEventListener("click", closeWelcomeModal); 

function closeWelcomeModal() {
  const welcomeDiv = document.querySelector(".welcome-modal-container");
  welcomeDiv.setAttribute("id", "close-welcome");
  welcomeButton.removeEventListener("click", closeWelcomeModal);
}
```
<p align="center">
  Introductory and Instructional Modals
</p>

<p align="center">
  <img height="auto" width="600" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/modal1.png">
</p>

<p align="center">
  <img height="auto" width="600" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/modal2.png">
</p>

<p align="center">
  <img height="auto" width="600" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/modal3.png">
</p>

<p align="center">
  <img height="auto" width="600" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/modal4.png">
</p>

### Canvas
Canvas objects and actions are organized into ES6 classes to allow for greater readability and organization. Canvas objects such as the monk and ghosts are manipulated and animated within the game class. The game class is exported to the index.js file to allow for easy interaction between the game within the Canvas and other Dom elements (see Additional Event Listeners - Pause/Play).  

- **Monk**

Users can move the monk up and down by using the arrow keys and shoot beams by pressing the space bar. These actions are managed by functions within the monk class. User input is managed directly by the monk class function: `listenForMovement`

```
listenForMovement() {
    window.addEventListener("keydown", (e) => {
        if (e.keyCode === 38 || e.keyCode === 40) {
            e.preventDefault()
        }
        this.keys[e.keyCode] = true;
        if (e.keyCode === 32) {
            e.preventDefault();
            if (this.beamCount > 0) {
                this.beams.push(
                  new Beam(
                    this.monk.x + this.monk.width / 55,
                    this.monk.y + this.monk.height / 55 / 2
                  )
                );
                this.monk.frameX = 0;    
            }
        }
        if (e.keyCode === 37) {
            e.preventDefault();
            this.keys[37] = "powerup";
        }

        if (e.keyCode === 39) {
            e.preventDefault();
            this.keys[39] = "powerup";
        }

        if (this.keys[39] === "powerup" && this.keys[37] === "powerup" && this.boosts > 0) {
            this.beamCount = 6;
            this.boosts -= 1;
        }
    });

    window.addEventListener("keyup",  (e) => {
         if (e.keyCode === 38 || e.keyCode === 40) {
           e.preventDefault();
         }
        delete this.keys[e.keyCode];
        if (e.keyCode === 32) {
            e.preventDefault();
            if (this.beamCount > 0) {
                this.monk.frameX = 3257.5;
                this.beamCount -= 1; 
            }
        }
    });
}
```


- **Ghosts**

While the ghost class constructs the attributes and functions of a single ghost, ghosts are spawned and animated within the game class. Multiple intervals are set to spawn ghosts in increasing numbers and speed to increase difficulty as the game progresses. This is managed by the game class function: `spawnGhosts`

```
spawnGhosts() {
    let addedSpeed = 1.0;
    let numGhosts = 3; 
    const getRandomGhost = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    setInterval(() => {
        if (!this.paused) {
            const randGhostNum = getRandomGhost(1, numGhosts) 
            for (let i = 0; i < randGhostNum; i++) {
                const id = Math.random()
                this.ghosts[id] = new Ghost(id, addedSpeed); 
            }
        }
    }, 3000)
    setInterval(() => {
        if (!this.paused) {
            if (addedSpeed < 7.0) addedSpeed += 0.75; 
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
```

- **Beams**

<img align="right" height="auto" width="600" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/gameplay.png">

Like ghosts, beam attributes and functions are constructed individually within its own beam class. However, because beams "belong" to the monk, beam manipulation is managed within the monk class. Beams are collected into a beams array that can be easily iterated through to track collisions and update animation. Beams are limited by the monk's "beam count" which has a maximum of 6.  Additionally, the user can restore beam count to 6 by using "beam boosts" incremented at each level up.  

- **Collisions**

With every game animation interval, the game class checks if there are any ghost-beam collisions and ghost-village collisions. When a beam collides with a ghost, both objects dissappear and the user's "hits" and "beam count" increase by 1. The process of collision detection is as follows:

- iterate through ghosts and beams with nested for loops
- check if a beam has intercepted a ghost by checking the distance between objects
- return if there is no overlap; remove both ghost and beam if overlap occurs

This is managed by the game class functions below:
```
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
```

When a ghosts collides with the village, a "Game Over" modal appears, prompting the user to "Play Again".

<p align="center">
  <img src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/gameovergif.gif">
</p>

### Additional Event Listeners
- **Music**

Users have the option to play traditional Japanese shamisen music by clicking the music icon above the top right corner of the game canvas. 

- **Pause/Play**

While styled to act as game elements, the play and pause game buttons are elements constructed outside of the canvas. After every game, the play and pause event listeners are removed and re-added to reflect the current game.   

<p align="center">
  <img src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/pausinggif.gif">
</p>

# Coming Soon

- Easy, Medium, Hard Settings

Soon the user will be able to choose the difficulty of the their game. Users will be given a default of easy, but will be able to easily toggle through difficulty settings. As of right now, the game is set at a medium to hard difficulty to give all users, gamers and non-gamers, a fun challenge!  
