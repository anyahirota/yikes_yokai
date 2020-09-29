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

  let currentGame;  

  function startGame() {
    const game = new Game;
    currentGame = game; 
    game.animate(ctx, canvas);
    const pauseGameButton = document.querySelector(".pause-game-button");
    pauseGameButton.removeAttribute("id", "clear-game-pause");
    pauseGame(game); 
    unpauseGame(game);
  }

  //restartGame
  const playAgainButton = document.getElementById("play-again-button");
  
  playAgainButton.addEventListener("click", function(e) {
    e.preventDefault(); 
    pauseGame();
    unpauseGame(); 
    const pauseGameButton = document.querySelector(".pause-game-button");
    pauseGameButton.setAttribute("id", "clear-game-pause");
    const gameOverPopUp = document.querySelector(".game-over-popup");
    gameOverPopUp.setAttribute("id", "clear-game-over-popup");
    startGame(); 
  })

  //restartGame when win
   const playAgainWinnerButton = document.getElementById("play-again-winner-button");

   playAgainWinnerButton.addEventListener("click", function (e) {
     e.preventDefault();
     const pauseGameButton = document.querySelector(".pause-game-button");
     pauseGameButton.setAttribute("id", "clear-game-pause");
     const gameOverPopUp = document.querySelector(".winner-popup");
     gameOverPopUp.setAttribute("id", "clear-winner-popup");
     startGame();
   });

  //pauseGame

  const _func1 = function (e) {
    e.preventDefault();
    const pauseGameButton = document.querySelector(".pause-game-button");
    const playGameButton = document.querySelector(".play-game-button");
    currentGame.paused = true;
    pauseGameButton.setAttribute("id", "clear-game-pause");
    playGameButton.removeAttribute("id", "clear-game-play");
  };
  
  function pauseGame(game) {
    const pauseGameButton = document.querySelector(".pause-game-button");
    const playGameButton = document.querySelector(".play-game-button");
    if (game) {
      pauseGameButton.addEventListener("click", _func1);
    } else {
      pauseGameButton.removeEventListener("click", _func1);
    }
    
  }

  //unpause Game
  const _func2 = function () {
    event.preventDefault();
    const playGameButton = document.querySelector(".play-game-button");
    const pauseGameButton = document.querySelector(".pause-game-button");
    currentGame.paused = false; 
    playGameButton.setAttribute("id", "clear-game-play");
    pauseGameButton.removeAttribute("id", "clear-game-pause");
  };

  function unpauseGame(game) {
    const playGameButton = document.querySelector(".play-game-button");
    const pauseGameButton = document.querySelector(".pause-game-button");
    if (game) {
      playGameButton.addEventListener("click", _func2.bind(event, game))
    } else {
      playGameButton.removeEventListener("click", _func2.bind(event, game));
    }
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

  //Close instructions2 beams modal
  const beamsButton = document.getElementById("beams-button");

  beamsButton.addEventListener("click", function (e) {
    e.preventDefault();
    closeBeamsModal();
  })

  function closeBeamsModal() {
    const instructionsDiv = document.querySelector(
      ".instructions2-modal-container"
    );
    instructionsDiv.setAttribute("id", "close-instructions2");
    beamsButton.removeEventListener("click", function (e) {
      e.preventDefault();
      closeBeamsModal();
    });
  }


  //Music buttons
  const music = document.getElementById("game-music");
  const playButton = document.getElementById("play-music");
  const pauseButton = document.getElementById("pause-music");

  playButton.addEventListener("click", function (e) {
    e.preventDefault();
    playAudio();
    playButton.setAttribute("class", "clear-music-button");
    pauseButton.removeAttribute("class", "clear-music-button"); 
  });

  pauseButton.addEventListener("click", function (e) {
    e.preventDefault();
    pauseAudio();
    pauseButton.setAttribute("class", "clear-music-button");
    playButton.removeAttribute("class", "clear-music-button");
  });

  function playAudio() {
    music.play();
  }

  function pauseAudio() {
    music.pause();
  }
})

