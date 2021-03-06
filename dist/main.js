/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/beam.js":
/*!*********************!*\
  !*** ./src/beam.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Beam {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;  \n    this.vel = 3; \n    this.radius = 10; \n    this.color = \"#ffff89\"; \n  }\n\n  drawBeam(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(\n      this.x,\n      this.y,\n      this.radius,\n      0,\n      2 * Math.PI,\n      false\n    );\n    ctx.fill();\n  }\n\n  moveBeam() {\n    let new_x = this.x + this.vel;\n    this.x = new_x;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Beam); \n\n//# sourceURL=webpack:///./src/beam.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monk */ \"./src/monk.js\");\n/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ghost */ \"./src/ghost.js\");\n/* harmony import */ var _house__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./house */ \"./src/house.js\");\n \n \n \n\nclass Game {\n    constructor() {\n        this.monk = new _monk__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; \n        this.ghosts = {};\n        this.village = this.createVillage(); \n        this.score = 0;   \n        this.level = 1\n        this.paused = false;   \n        this.hours = 12;    \n    }\n\n    animate(ctx, canvas) {\n        this.monk.listenForMovement(); \n        this.spawnGhosts();  \n        setInterval(() => {\n            if (!this.paused) {\n                ctx.clearRect(0, 0, canvas.width, canvas.height); \n                ctx.font = \"30px mikiyu\";\n                ctx.fillStyle = \"black\";  \n                ctx.fillText(`Hits: ${this.score}`, 350, 40); \n                ctx.fillText(`Beams: ${this.monk.beamCount}`, 120, 40); \n                ctx.fillText(`Level: ${this.level}`, 550, 40); \n                ctx.fillText(`Hours Left: ${this.hours}`, 120, 480); \n                ctx.fillText(`Beam Boosts: ${this.monk.boosts}`, 475, 480); \n\n                this.drawVillage(ctx);\n                this.monk.drawMonkSprite(ctx); \n                this.monk.moveMonk(); \n                this.animateGhosts(ctx, canvas); \n                this.checkBeamCollision();  \n                this.checkGhostCollision(); \n\n                if (this.hours === 0) {\n                    this.winGame(); \n                }\n            }\n        }, 20) \n    }\n\n    spawnGhosts() {\n        let addedSpeed = 1.0;\n        let numGhosts = 3; \n        const getRandomGhost = (min, max) => {\n            return Math.floor(Math.random() * (max - min + 1) + min);\n        }\n\n        setInterval(() => {\n            if (!this.paused) {\n                const randGhostNum = getRandomGhost(1, numGhosts) \n                for (let i = 0; i < randGhostNum; i++) {\n                    const id = Math.random()\n                    this.ghosts[id] = new _ghost__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id, addedSpeed); \n                }\n            }\n        }, 3000)\n        setInterval(() => {\n            if (!this.paused) {\n                if (addedSpeed < 7.0) addedSpeed += 0.75; \n                this.level += 1; \n                this.monk.boosts += 1; \n                this.hours -= 0.25; \n            }\n        }, 15000)\n\n        setInterval(() => {\n            if (!this.paused) {\n              if (numGhosts < 5) numGhosts += 1;\n            }\n        }, 30000)\n    }\n\n    animateGhosts(ctx, canvas) {\n        const ghosts = Object.values(this.ghosts)\n        for (let i = 0; i < ghosts.length; i++) {\n            ghosts[i].drawGhostSprite(ctx);\n            ghosts[i].update(canvas);\n        }\n    }\n\n    createVillage() {\n        let y = 12;\n        const height = 67.3; \n        const village = []; \n        for (let i = 0; i < 7; i++) {\n            village.push(new _house__WEBPACK_IMPORTED_MODULE_2__[\"default\"](y)); \n            y += height; \n        }\n        return village; \n    }\n\n    drawVillage(ctx) {\n        for (let i = 0; i < this.village.length; i++) {\n          this.village[i].drawHouseSprite(ctx);\n        }\n    }\n\n    checkBeamCollision() {\n        const ghosts = Object.values(this.ghosts); \n        for (let i = 0; i < this.monk.beams.length; i++) {\n            for (let j = 0; j < ghosts.length; j++) {\n                const beam = this.monk.beams[i]; \n                const ghost = ghosts[j].ghost; \n                this.collision(ghost, beam);\n            }\n        }\n    }\n\n    collision(ghost, beam) {\n        if (ghost === undefined || beam === undefined) {return}; \n        const distX = Math.abs(beam.x - ghost.x - (ghost.width / 20) / 2);\n        const distY = Math.abs(beam.y - ghost.y - (ghost.height / 20) / 2);\n        if (distX > ((ghost.width / 20) / 2 + beam.radius)) { return false; }\n        if (distY > ((ghost.height / 20) / 2 + beam.radius)) { return false; }\n        if (distX <= ((ghost.width / 20) / 2)) {\n            this.removeCollision(beam, ghost);\n            return true;\n        }\n        if (distY <= ((ghost.height / 20) / 2)) {\n            this.removeCollision(beam, ghost);\n            return true;\n        }\n        const dx = distX - (ghost.width / 20) / 2;\n        const dy = distY - (ghost.height / 20) / 2;\n        if (dx * dx + dy * dy <= (beam.radius * beam.radius) &&\n            distX <= ((ghost.width / 20) / 2 + beam.radius &&\n                distY <= ((ghost.height / 20) / 2 + beam.radius))) {\n            this.removeCollision(beam, ghost);\n            return true;\n        };\n    }\n\n    removeCollision(beam, ghost) {\n        this.monk.beams.splice(this.monk.beams.indexOf(beam), 1); \n        delete this.ghosts[ghost.id];\n        this.score += 1\n        this.monk.beamCount += 1; \n    }\n\n    checkGhostCollision() {\n        const ghosts = Object.values(this.ghosts);\n        for (let i = 0; i < ghosts.length; i++) {\n           let ghost = ghosts[i].ghost;\n           if(!this.paused) {\n               if (ghost.x < 70) {\n                   this.loseGame(); \n               } \n           }\n        }\n    }\n\n    loseGame() {\n        this.paused = true; \n        const gameOverPopUp = document.querySelector(\".game-over-popup1\");\n        gameOverPopUp.removeAttribute(\"id\", \"clear-game-over-popup\"); \n        const pauseGameButton = document.querySelector(\".pause-game-button\");\n        pauseGameButton.setAttribute(\"id\", \"clear-game-pause\");\n    }\n\n    winGame() {\n        this.paused = true;\n        const winnerPopUp = document.querySelector(\".winner-popup\"); \n        winnerPopUp.removeAttribute(\"id\", \"clear-winner-popup\"); \n        const pauseGameButton = document.querySelector(\".pause-game-button\");\n        pauseGameButton.setAttribute(\"id\", \"clear-game-pause\");\n    }\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game); \n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/ghost.js":
/*!**********************!*\
  !*** ./src/ghost.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n \n\nclass Ghost extends _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(id, addedSpeed) {\n    super();\n    this.ghost = {\n      id: id,\n      x: 900,\n      y: this.getRandomY(50, 450),\n      width: 1408,\n      height: 1161,\n      frameX: 0,\n      frameY: 0,\n      speed: Math.random() * 1.5 + addedSpeed,\n      // moving: false,\n    };\n    this.ghostImgs = [\n      \"dist/images/ghost_cartoon_1.png\",\n      \"dist/images/ghost_cartoon_2.png\",\n      \"dist/images/ghost_cartoon_3.png\",\n      \"dist/images/ghost_cartoon_4.png\",\n      \"dist/images/ghost_cartoon_5.png\",\n    ];\n    this.ghostSprite = new Image();\n    this.ghostSprite.src = this.ghostImgs[\n      Math.floor(Math.random() * this.ghostImgs.length)\n    ];\n  }\n\n  getRandomY(min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n  }\n\n  drawGhostSprite(ctx) {\n    this.drawSprite(\n      ctx,\n      this.ghostSprite,\n      this.ghost.frameX,\n      this.ghost.frameY,\n      this.ghost.width,\n      this.ghost.height,\n      this.ghost.x,\n      this.ghost.y,\n      this.ghost.width / 20,\n      this.ghost.height / 20\n    );\n  }\n\n  update(canvas) {\n    if (this.ghost.x > 0 - this.ghost.width / 20) {\n      this.ghost.x -= this.ghost.speed;\n    } else {\n      this.ghost.x = canvas.width + this.ghost.width / 20;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ghost); \n\n//# sourceURL=webpack:///./src/ghost.js?");

/***/ }),

/***/ "./src/house.js":
/*!**********************!*\
  !*** ./src/house.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\nclass House extends _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(y) {\n    super();\n    this.house = {\n      x: 0,\n      y: y,\n      width: 799,\n      height: 673,\n      frameX: 0,\n      frameY: 0,\n      speed: 0,\n      moving: false,\n    };\n    this.houseSprite = new Image(); \n    this.houseSprite.src = \"dist/images/house.png\"; \n  }\n\n  drawHouseSprite(ctx) {\n    this.drawSprite(\n      ctx,\n      this.houseSprite,\n      this.house.frameX,\n      this.house.frameY,\n      this.house.width,\n      this.house.height,\n      this.house.x,\n      this.house.y,\n      this.house.width / 10,\n      this.house.height / 10\n    );\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (House); \n\n//# sourceURL=webpack:///./src/house.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n \n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = 800;\n  canvas.height = 500;\n\n  //Start Game\n  const startGameButton = document.querySelector(\".game-start-button\"); \n\n  startGameButton.addEventListener(\"click\", function(e) {\n    e.preventDefault();\n    closeStartGameButton();  \n    startGame(); \n  })\n\n  function closeStartGameButton() {\n    startGameButton.setAttribute(\"id\", \"close-start-button\");\n    startGameButton.removeEventListener(\"click\", function(e) {\n      e.preventDefault(); \n      closeStartGameButton();\n      startGame(); \n    })\n  }\n\n  let currentGame;  \n\n  function startGame() {\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    currentGame = game; \n    game.animate(ctx, canvas);\n    const pauseGameButton = document.querySelector(\".pause-game-button\");\n    pauseGameButton.removeAttribute(\"id\", \"clear-game-pause\");\n    pauseGame(game); \n    unpauseGame(game);\n  }\n\n  //restartGame\n  const playAgainButton = document.getElementById(\"play-again-button\");\n  \n  playAgainButton.addEventListener(\"click\", function(e) {\n    e.preventDefault(); \n    pauseGame();\n    unpauseGame(); \n    const pauseGameButton = document.querySelector(\".pause-game-button\");\n    pauseGameButton.setAttribute(\"id\", \"clear-game-pause\");\n    const gameOverPopUp = document.querySelector(\".game-over-popup\");\n    gameOverPopUp.setAttribute(\"id\", \"clear-game-over-popup\");\n    startGame(); \n  })\n\n  //restartGame when win\n   const playAgainWinnerButton = document.getElementById(\"play-again-winner-button\");\n\n   playAgainWinnerButton.addEventListener(\"click\", function (e) {\n     e.preventDefault();\n     const pauseGameButton = document.querySelector(\".pause-game-button\");\n     pauseGameButton.setAttribute(\"id\", \"clear-game-pause\");\n     const gameOverPopUp = document.querySelector(\".winner-popup\");\n     gameOverPopUp.setAttribute(\"id\", \"clear-winner-popup\");\n     startGame();\n   });\n\n  //pauseGame\n\n  const _func1 = function (e) {\n    e.preventDefault();\n    const pauseGameButton = document.querySelector(\".pause-game-button\");\n    const playGameButton = document.querySelector(\".play-game-button\");\n    currentGame.paused = true;\n    pauseGameButton.setAttribute(\"id\", \"clear-game-pause\");\n    playGameButton.removeAttribute(\"id\", \"clear-game-play\");\n  };\n  \n  function pauseGame(game) {\n    const pauseGameButton = document.querySelector(\".pause-game-button\");\n    const playGameButton = document.querySelector(\".play-game-button\");\n    if (game) {\n      pauseGameButton.addEventListener(\"click\", _func1);\n    } else {\n      pauseGameButton.removeEventListener(\"click\", _func1);\n    }\n    \n  }\n\n  //unpause Game\n  const _func2 = function () {\n    event.preventDefault();\n    const playGameButton = document.querySelector(\".play-game-button\");\n    const pauseGameButton = document.querySelector(\".pause-game-button\");\n    currentGame.paused = false; \n    playGameButton.setAttribute(\"id\", \"clear-game-play\");\n    pauseGameButton.removeAttribute(\"id\", \"clear-game-pause\");\n  };\n\n  function unpauseGame(game) {\n    const playGameButton = document.querySelector(\".play-game-button\");\n    const pauseGameButton = document.querySelector(\".pause-game-button\");\n    if (game) {\n      playGameButton.addEventListener(\"click\", _func2.bind(event, game))\n    } else {\n      playGameButton.removeEventListener(\"click\", _func2.bind(event, game));\n    }\n  }\n\n  //Close welcome modal\n  const welcomeButton = document.getElementById(\"welcome-button\");\n\n  welcomeButton.addEventListener(\"click\", closeWelcomeModal); \n\n  function closeWelcomeModal() {\n    const welcomeDiv = document.querySelector(\".welcome-modal-container\");\n    welcomeDiv.setAttribute(\"id\", \"close-welcome\");\n    welcomeButton.removeEventListener(\"click\", closeWelcomeModal);\n  }\n\n  //Close story modal\n  const storyButton = document.getElementById(\"story-button\");\n\n  storyButton.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    closeStoryModal();\n  });\n\n  function closeStoryModal() {\n    const storyDiv = document.querySelector(\".story-modal-container\");\n    storyDiv.setAttribute(\"id\", \"close-story\");\n    storyButton.removeEventListener(\"click\", function (e) {\n      e.preventDefault();\n      closeStoryModal();\n    });\n  }\n\n  //Close instruction modal\n  const instButton = document.getElementById(\"instructions-button\");\n\n  instButton.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    closeInstModal();\n  });\n\n  function closeInstModal() {\n    const instructionsDiv = document.querySelector(\n      \".instructions-modal-container\"\n    );\n    instructionsDiv.setAttribute(\"id\", \"close-instructions\");\n    instButton.removeEventListener(\"click\", function (e) {\n      e.preventDefault();\n      closeInstModal();\n    });\n  }\n\n  //Close instructions2 beams modal\n  const beamsButton = document.getElementById(\"beams-button\");\n\n  beamsButton.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    closeBeamsModal();\n  })\n\n  function closeBeamsModal() {\n    const instructionsDiv = document.querySelector(\n      \".instructions2-modal-container\"\n    );\n    instructionsDiv.setAttribute(\"id\", \"close-instructions2\");\n    beamsButton.removeEventListener(\"click\", function (e) {\n      e.preventDefault();\n      closeBeamsModal();\n    });\n  }\n\n\n  //Music buttons\n  const music = document.getElementById(\"game-music\");\n  const playButton = document.getElementById(\"play-music\");\n  const pauseButton = document.getElementById(\"pause-music\");\n\n  playButton.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    playAudio();\n    playButton.setAttribute(\"class\", \"clear-music-button\");\n    pauseButton.removeAttribute(\"class\", \"clear-music-button\"); \n  });\n\n  pauseButton.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    pauseAudio();\n    pauseButton.setAttribute(\"class\", \"clear-music-button\");\n    playButton.removeAttribute(\"class\", \"clear-music-button\");\n  });\n\n  function playAudio() {\n    music.play();\n  }\n\n  function pauseAudio() {\n    music.pause();\n  }\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/monk.js":
/*!*********************!*\
  !*** ./src/monk.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n/* harmony import */ var _beam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beam */ \"./src/beam.js\");\n\n  \n\nclass Monk extends _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor() {\n        super(); \n        this.keys = [];\n        this.monk = {\n            x: 80,\n            y: 187.5,\n            width: 3257.5,\n            height: 4955.5,\n            frameX: 3257.5,\n            frameY: 0,\n            speed: 6,\n            moving: false,\n        };\n        this.monkSprite = new Image();\n        this.monkSprite.src = \"dist/images/monk.png\";\n        this.beams = []; \n        this.beamCount = 6; \n        this.boosts = 0; \n  }\n\n  drawMonkSprite(ctx) {\n    this.drawSprite(\n      ctx,\n      this.monkSprite,\n      this.monk.frameX,\n      this.monk.frameY,\n      this.monk.width,\n      this.monk.height,\n      this.monk.x,\n      this.monk.y,\n      this.monk.width / 55,\n      this.monk.height / 55\n    );\n    this.animateBeams(ctx); \n  }\n\n  animateBeams(ctx) {\n      for (let i = 0; i < this.beams.length; i++) {\n          this.beams[i].drawBeam(ctx);\n          this.beams[i].moveBeam();\n          if (this.beams[i].x > 800 + this.beams[i].radius) {\n              this.beams.splice(this.beams.indexOf(this.beams[i]), 1);   \n          }\n      }\n  }\n\n  listenForMovement() {\n    window.addEventListener(\"keydown\", (e) => {\n        if (e.keyCode === 38 || e.keyCode === 40) {\n            e.preventDefault()\n        }\n        this.keys[e.keyCode] = true;\n        if (e.keyCode === 32) {\n            e.preventDefault();\n            if (this.beamCount > 0) {\n                this.beams.push(\n                  new _beam__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n                    this.monk.x + this.monk.width / 55,\n                    this.monk.y + this.monk.height / 55 / 2\n                  )\n                );\n                this.monk.frameX = 0;    \n            }\n        }\n        if (e.keyCode === 37) {\n            e.preventDefault();\n            this.keys[37] = \"powerup\";\n        }\n\n        if (e.keyCode === 39) {\n            e.preventDefault();\n            this.keys[39] = \"powerup\";\n        }\n\n        if (this.keys[39] === \"powerup\" && this.keys[37] === \"powerup\" && this.boosts > 0) {\n            this.beamCount = 6;\n            this.boosts -= 1;\n        }\n\n        \n    });\n\n    window.addEventListener(\"keyup\",  (e) => {\n         if (e.keyCode === 38 || e.keyCode === 40) {\n           e.preventDefault();\n         }\n        delete this.keys[e.keyCode];\n        if (e.keyCode === 32) {\n            e.preventDefault();\n            if (this.beamCount > 0) {\n                this.monk.frameX = 3257.5;\n                this.beamCount -= 1; \n            }\n        }\n    });\n\n  }\n\n    moveMonk() {\n        if (this.keys[38] && this.monk.y > 0) {\n            this.monk.y -= this.monk.speed;\n        }\n        if (this.keys[40] && this.monk.y < 500 - this.monk.height / 55) {\n            this.monk.y += this.monk.speed;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Monk); \n\n//# sourceURL=webpack:///./src/monk.js?");

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sprite {\n    constructor() {\n\n    }\n\n    drawSprite(ctx, img, sX, sY, sW, sH, dX, dY, dW, dH) {\n        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite); \n\n//# sourceURL=webpack:///./src/sprite.js?");

/***/ })

/******/ });