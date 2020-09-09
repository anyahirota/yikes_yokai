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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monk */ \"./src/monk.js\");\nconsole.log(\"Webpack is working!\");\n \n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    const canvas = document.getElementById(\"game-canvas\"); \n    const ctx = canvas.getContext(\"2d\");\n    canvas.width = 800; \n    canvas.height = 500; \n\n    const monk = new _monk__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; \n    monk.animate(ctx, canvas);\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/monk.js":
/*!*********************!*\
  !*** ./src/monk.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Monk {\n    constructor() {\n        this.keys = [];\n        this.monk = {\n            x: 80,\n            y: 187.5,\n            width: 3257.5,\n            height: 4955.5,\n            frameX: 3257.5,\n            frameY: 0,\n            speed: 4,\n            moving: false,\n        };\n        this.monkSprite = new Image();\n        this.monkSprite.src = \"monk.png\";\n  }\n\n  drawMonkSprite(ctx, img, sX, sY, sW, sH, dX, dY, dW, dH) {\n    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n  }\n\n  animate(ctx, canvas) {\n      this.listenForMovement(); \n      setInterval(() => {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        this.drawMonkSprite(\n            ctx, \n            this.monkSprite,\n            this.monk.frameX,\n            this.monk.frameY,\n            this.monk.width,\n            this.monk.height,\n            this.monk.x,\n            this.monk.y,\n            this.monk.width / 55,\n            this.monk.height / 55\n            );\n        this.moveMonk();\n    }, 20)\n  }\n\n  listenForMovement() {\n    window.addEventListener(\"keydown\", (e) => {\n        this.keys[e.keyCode] = true;\n        if (e.keyCode === 32) {\n            this.monk.frameX = 0;\n        }\n    });\n\n    window.addEventListener(\"keyup\",  (e) => {\n        delete this.keys[e.keyCode];\n        if (e.keyCode === 32) {\n            this.monk.frameX = 3257.5;\n        }\n    });\n\n  }\n\n    moveMonk() {\n        if (this.keys[38] && this.monk.y > 0) {\n            this.monk.y -= this.monk.speed;\n        }\n        if (this.keys[40] && this.monk.y < 500 - this.monk.height / 55) {\n            this.monk.y += this.monk.speed;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Monk); \n\n//# sourceURL=webpack:///./src/monk.js?");

/***/ })

/******/ });