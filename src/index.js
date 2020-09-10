console.log("Webpack is working!");
import Monk from "./monk"; 
import Game from "./game"; 


document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas"); 
    const ctx = canvas.getContext("2d");
    canvas.width = 800; 
    canvas.height = 500; 

    const game = new Game; 
    game.animate(ctx, canvas);

    const music = document.getElementById("game-music");
    const playButton = document.getElementById("play-music");
    const pauseButton = document.getElementById("pause-music");

    playButton.addEventListener("click", function(e) {
        e.preventDefault(); 
        playAudio(); 
    })

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

