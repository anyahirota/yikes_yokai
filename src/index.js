console.log("Webpack is working!");
import Monk from "./monk"; 
import Game from "./game"; 


document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 500;

  //Start Game
  const startGameButton = document.querySelector(".game-start-button"); 

  startGameButton.addEventListener("click", function(e) {
    e.preventDefault();
    closeStartGameButton();  
    startGame(); 
  })

  function closeStartGameButton() {
    startGameButton.setAttribute("id", "close-start-button");
    startGameButton.removeEventListener("click", function(e) {
      e.preventDefault(); 
      closeStartGameButton();
      startGame(); 
    })
  }

  function startGame() {
    const game = new Game;
    game.animate(ctx, canvas);
  }
  


  //Close welcome modal
  const welcomeButton = document.getElementById("welcome-button");

  welcomeButton.addEventListener("click", function (e) {
    e.preventDefault();
    closeWelcomeModal();
  });

  function closeWelcomeModal() {
    const welcomeDiv = document.querySelector(".welcome-modal-container");
    welcomeDiv.setAttribute("id", "close-welcome");
    welcomeButton.removeEventListener("click", function (e) {
      e.preventDefault();
      closeWelcomeModal();
    });
  }

  //Close story modal
  const storyButton = document.getElementById("story-button");

  storyButton.addEventListener("click", function (e) {
    e.preventDefault();
    closeStoryModal();
  });

  function closeStoryModal() {
    const storyDiv = document.querySelector(".story-modal-container");
    storyDiv.setAttribute("id", "close-story");
    storyButton.removeEventListener("click", function (e) {
      e.preventDefault();
      closeStoryModal();
    });
  }

  //Close instruction modal
  const instButton = document.getElementById("instructions-button");

  instButton.addEventListener("click", function (e) {
    e.preventDefault();
    closeInstModal();
  });

  function closeInstModal() {
    const instructionsDiv = document.querySelector(
      ".instructions-modal-container"
    );
    instructionsDiv.setAttribute("id", "close-instructions");
    instButton.removeEventListener("click", function (e) {
      e.preventDefault();
      closeInstModal();
    });
  }



  //Music buttons
  const music = document.getElementById("game-music");
  const playButton = document.getElementById("play-music");
  const pauseButton = document.getElementById("pause-music");

  playButton.addEventListener("click", function (e) {
    e.preventDefault();
    playAudio();
  });

  pauseButton.addEventListener("click", function (e) {
    e.preventDefault();
    pauseAudio();
  });

  function playAudio() {
    music.play();
  }

  function pauseAudio() {
    music.pause();
  }
})

