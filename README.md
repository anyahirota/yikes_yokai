# Yikes, Yokai!
### Introduction

<img align="right" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/welcome.png" /> 

**Yikes, Yokai!** is a cute original shooter game inspired by Space Invaders and Japanese design and patterns. This game was built with vanilla Javascript and HTML Canvas (no additional libraries). 

### Game Story

"Yokai" are a class of supernatural monsters and spirits in Japanese folklore.

In old Japan, a small country village is plagued by nightly hauntings and possessions. Tonight, the village has called upon the famous exorcist monk, known for his light wielding abilities. Will he succeed and vanquish the yokai, or will the village continue to suffer under the cruel spirits? 

### Gameplay

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
To close each modal, an event listener was attached to buttons located at the bottom of each modal, labelled "next" or "enter". Example of JS used is displayed below:

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
  <img height="auto" width="500" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/modal1.png">
  <img height="auto" width="500" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/modal2.png">
  <img height="auto" width="500" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/modal3.png">
  <img height="auto" width="500" src="https://yikes-yokai.s3-us-west-1.amazonaws.com/yy_readme/modal4.png">
</p>




### Canvas
- **Monk**
- **Ghosts**
- **Beams**
- **Collisions**

### Additional Event Listeners
- **Music**
- **Pause/Play**

# Coming Soon

- Easy, Medium, Hard Settings

Soon the user will be able to choose the difficulty of the their game. Users will be given a default of easy, but will be able to easily toggle through difficulty settings. As of right now, the game is set at a medium to hard difficulty to give all users, gamers and non-gamers, a fun challenge.  
