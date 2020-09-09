console.log("Webpack is working!");
import Monk from "./monk"; 


document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas"); 
    const ctx = canvas.getContext("2d");
    canvas.width = 800; 
    canvas.height = 500; 

    const monk = new Monk; 
    monk.animate(ctx, canvas);
})

