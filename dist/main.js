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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monk */ \"./src/monk.js\");\n/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ghost */ \"./src/ghost.js\");\n \n \n\nclass Game {\n    constructor() {\n        this.monk = new _monk__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; \n        this.ghosts = [];\n         \n    }\n\n    animate(ctx, canvas) {\n        this.monk.listenForMovement(); \n        // this.spawnGhosts(); \n        setInterval(() => {\n            ctx.clearRect(0, 0, canvas.width, canvas.height); \n            this.monk.drawMonkSprite(ctx); \n            this.monk.moveMonk(); \n            // this.animateGhosts(ctx, canvas); \n        }, 20)\n    }\n\n    spawnGhosts() {\n        setInterval(() => {\n            this.ghosts.push(new _ghost__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); \n        }, 6000)\n    }\n\n    animateGhosts(ctx, canvas) {\n        for (let i = 0; i < this.ghosts.length; i++) {\n            this.ghosts[i].drawGhostSprite(ctx);\n            this.ghosts[i].update(canvas);\n        }\n    }\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game); \n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/ghost.js":
/*!**********************!*\
  !*** ./src/ghost.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n \n\nclass Ghost extends _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super(); \n    this.keys = [];\n    this.ghost = {\n      x: 700,\n      y: this.getRandomY(50, 450),\n      width: 1408,\n      height: 1161,\n      frameX: 0,\n      frameY: 0,\n      speed: Math.random() * 1.5 + 1.0,\n      // moving: false,\n    };\n    this.ghostImgs = [\n      \"ghost_cartoon_1.png\",\n      \"ghost_cartoon_2.png\",\n      \"ghost_cartoon_3.png\",\n      \"ghost_cartoon_4.png\",\n      \"ghost_cartoon_5.png\",\n    ];\n    this.ghostSprite = new Image();\n    this.ghostSprite.src = this.ghostImgs[\n      Math.floor(Math.random() * this.ghostImgs.length)\n    ];\n  }\n\n  getRandomY(min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n  }\n\n  drawGhostSprite(ctx) {\n    this.drawSprite(\n      ctx,\n      this.ghostSprite,\n      this.ghost.frameX,\n      this.ghost.frameY,\n      this.ghost.width,\n      this.ghost.height,\n      this.ghost.x,\n      this.ghost.y,\n      this.ghost.width /20,\n      this.ghost.height /20\n    )\n  }\n\n  update(canvas) {\n    if (this.ghost.x > 0 - (this.ghost.width/20)) {\n      this.ghost.x -= this.ghost.speed; \n    } else {\n      this.ghost.x = canvas.width + (this.ghost.width / 20)\n    }\n  }\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ghost); \n\n//# sourceURL=webpack:///./src/ghost.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monk */ \"./src/monk.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconsole.log(\"Webpack is working!\");\n \n \n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    const canvas = document.getElementById(\"game-canvas\"); \n    const ctx = canvas.getContext(\"2d\");\n    canvas.width = 800; \n    canvas.height = 500; \n\n    const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; \n    game.animate(ctx, canvas);\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/monk.js":
/*!*********************!*\
  !*** ./src/monk.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n \n\nclass Monk extends _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor() {\n        super(); \n        this.keys = [];\n        this.monk = {\n            x: 80,\n            y: 187.5,\n            width: 3257.5,\n            height: 4955.5,\n            frameX: 3257.5,\n            frameY: 0,\n            speed: 4,\n            moving: false,\n        };\n        this.monkSprite = new Image();\n        this.monkSprite.src = \"monk.png\";\n  }\n\n  drawMonkSprite(ctx) {\n    this.drawSprite(\n      ctx,\n      this.monkSprite,\n      this.monk.frameX,\n      this.monk.frameY,\n      this.monk.width,\n      this.monk.height,\n      this.monk.x,\n      this.monk.y,\n      this.monk.width / 55,\n      this.monk.height / 55\n    );\n  }\n\n\n//   animate(ctx, canvas) {\n//       this.listenForMovement(); \n//       setInterval(() => {\n//         ctx.clearRect(0, 0, canvas.width, canvas.height);\n//         this.drawSprite(\n//             ctx, \n//             this.monkSprite,\n//             this.monk.frameX,\n//             this.monk.frameY,\n//             this.monk.width,\n//             this.monk.height,\n//             this.monk.x,\n//             this.monk.y,\n//             this.monk.width / 55,\n//             this.monk.height / 55\n//             );\n//         this.moveMonk();\n//     }, 20)\n//   }\n\n  listenForMovement() {\n    window.addEventListener(\"keydown\", (e) => {\n        this.keys[e.keyCode] = true;\n        if (e.keyCode === 32) {\n            this.monk.frameX = 0;\n        }\n    });\n\n    window.addEventListener(\"keyup\",  (e) => {\n        delete this.keys[e.keyCode];\n        if (e.keyCode === 32) {\n            this.monk.frameX = 3257.5;\n        }\n    });\n\n  }\n\n    moveMonk() {\n        if (this.keys[38] && this.monk.y > 0) {\n            this.monk.y -= this.monk.speed;\n        }\n        if (this.keys[40] && this.monk.y < 500 - this.monk.height / 55) {\n            this.monk.y += this.monk.speed;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Monk); \n\n//# sourceURL=webpack:///./src/monk.js?");

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