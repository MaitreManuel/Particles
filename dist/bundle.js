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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stats_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stats_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_stats_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Particle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);





const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const NB_PARTICLES = 100;
const particles = [];

for (var i = 0; i < NB_PARTICLES; i++) {
    particles.push(new __WEBPACK_IMPORTED_MODULE_1__Particle__["a" /* default */](canvas));
}

const stats = new __WEBPACK_IMPORTED_MODULE_0_stats_js__["default"]();
document.body.appendChild( stats.dom );

const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

resize();
window.addEventListener('resize', resize);

const animate = () => {
    stats.begin();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.draw(ctx);
        p.update(canvas);
    });

    stats.end();
    requestAnimationFrame(animate);
};

// resize();
requestAnimationFrame(animate);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Particle {
    constructor(canvas) {
        this.color = '#ffffff';
        this.w = 10,
        this.h = 10,
        this.x = Math.random() * 5 + 5,
        this.y = Math.random() * 5 + 5,
        this.speedX = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.speedY = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.angleX = Math.random() > 0.5 ? Math.random() : -Math.random(),
        this.angleY = Math.random() > 0.5 ? Math.random() : -Math.random();
    }

    update(canvas) {
        this.x += this.speedX + this.angleX;
        this.y += this.speedY + this.angleY;
        if (this.x < 0 || this.x + this.w > canvas.width) {
            const sign = this.x < 0 ? 1 : -1;
            this.angleX = Math.random() * 2 * sign;
            this.speedX = -this.speedX;
        }
        if (this.y < 0 || this.y + this.h > canvas.height) {
            const sign = this.y < 0 ? 1 : -1;
            this.angleY = Math.random() * 2 * sign;
            this.speedY = -this.speedY;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Particle);


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "body {\n    margin: 0;\n    overflow: hidden;\n}\ncanvas {\n    background-color: black;\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/particles/node_modules/css-loader/lib/css-base.js'");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/particles/node_modules/style-loader/lib/addStyles.js'");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/particles/node_modules/stats.js/build/stats.min.js'");

/***/ })
/******/ ]);