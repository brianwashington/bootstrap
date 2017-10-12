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
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"./bootstrap/css/bootstrap.min.css\">\n  <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>\n  <link rel=\"stylesheet\" href=\"./styles.css\">\n  <title>App</title>\n</head>\n\n<body>\n  <header class=\"container-fluid\">\n    <h1>HEADER</h1>\n  </header>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <aside class=\"sports-icon-list sports-list-top col d-none d-md-inline-block\">\n        <a href=\"downhill.html\">\n          <img src=\"../../images/icon-downhill.png\" alt=\"Downhill\" />\n          <h6>Downhill</h6>\n        </a>\n\n        <a href=\"snowboarding.html\">\n          <img src=\"../../images/icon-snowboard.png\" alt=\"Snowboarding\" />\n          <h6>Snowboarding</h6>\n        </a>\n\n        <a href=\"bobsled.html\">\n          <img src=\"../../images/icon-bobsled.png\" alt=\"Bobsled\" />\n          <h6>Bobsled</h6>\n        </a>\n\n        <a href=\"cross-country.html\">\n          <img src=\"../../images/icon-cross-country.png\" alt=\"Cross Country\" />\n          <h6>Cross Country</h6>\n        </a>\n\n        <a href=\"biathlon.html\">\n          <img src=\"../../images/icon-biathlon.png\" alt=\"Biathlon\" />\n          <h6>Biathlon</h6>\n        </a>\n      </aside>\n    </div>\n\n    <div class=\"row\">\n      <section class=\"col-sm-9 col-lg-8 order-1 order-sm-2 order-lg-2\">\n        <article>\n          <h2>Why I Went Into the Lake</h2>\n          <img src=\"../../images/lake.jpg\" />\n          <div class=\"row\">\n            <p class=\"col-sm-10\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </p>\n            <div class=\"col-sm-2\">\n              <input type=\"button\" class=\"btn btn-primary\" value=\"More...\" />\n            </div>\n          </div>\n        </article>\n\n        <article>\n          <h2>My Name is NOT Bullwinkle</h2>\n          <img src=\"../../images/elk.jpg\" />\n          <div class=\"row\">\n            <p class=\"col-sm-10\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </p>\n            <div class=\"col-sm-2\">\n              <input type=\"button\" class=\"btn btn-primary\" value=\"More...\" />\n            </div>\n          </div>\n        </article>\n\n        <article>\n          <h2>There's Gotta be a Penguin Up Here Somewhere</h2>\n          <img src=\"../../images/snowboarder.jpg\" />\n          <div class=\"row\">\n            <p class=\"col-sm-10\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n            <div class=\"col-sm-2\">\n              <input type=\"button\" class=\"btn btn-primary\" value=\"More...\" />\n            </div>\n          </div>\n        </article>\n      </section>\n\n      <aside class=\"col-sm-3 col-lg-2 order-2 order-sm-1 order-lg-1\">\n        <h4 class=\"range-title\">\n          <b>Mountain Ranges</b>\n        </h4>\n        <div class=\"range-list\">\n          <a href=\"wasatch-range.html\">\n            <img src=\"../../images/range-1.png\" />\n            <h4>Wasatch Range</h4>\n          </a>\n\n          <a href=\"mummy-range.html\">\n            <img src=\"../../images/range-2.png\" />\n            <h4>Mummy Range</h4>\n          </a>\n\n          <a href=\"front-range.html\">\n            <img src=\"../../images/range-3.png\" />\n            <h4>Front Range</h4>\n          </a>\n\n          <a href=\"sawtooth-range.html\">\n            <img src=\"../../images/range-4.png\" />\n            <h4>Sawtooth Range</h4>\n          </a>\n\n          <a href=\"west-elk-mountains.html\">\n            <img src=\"../../images/range-5.png\" />\n            <h4>West Elk Mountains</h4>\n          </a>\n        </div>\n      </aside>\n\n      <aside class=\"sports-icon-list col order-3 d-md-none\">\n        <a href=\"downhill.html\">\n          <img src=\"../../images/icon-downhill.png\" alt=\"Downhill\" />\n          <h6>Downhill</h6>\n        </a>\n\n        <a href=\"snowboarding.html\">\n          <img src=\"../../images/icon-snowboard.png\" alt=\"Snowboarding\" />\n          <h6>Snowboarding</h6>\n        </a>\n\n        <a href=\"bobsled.html\">\n          <img src=\"../../images/icon-bobsled.png\" alt=\"Bobsled\" />\n          <h6>Bobsled</h6>\n        </a>\n\n        <a href=\"cross-country.html\">\n          <img src=\"../../images/icon-cross-country.png\" alt=\"Cross Country\" />\n          <h6>Cross Country</h6>\n        </a>\n\n        <a href=\"biathlon.html\">\n          <img src=\"../../images/icon-biathlon.png\" alt=\"Biathlon\" />\n          <h6>Biathlon</h6>\n        </a>\n      </aside>\n    </div>\n  </div>\n  <footer class=\"container-fluid\">\n    <h1>FOOTER</h1>\n  </footer>\n  <script type=\"text/javascript\" src=\"bundle.js\"></script>\n</body>\n\n</html>"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Open Sans', sans-serif;\n}\n\nheader, footer {\n  background-color: #333;\n  color: #ddd;\n  padding: 20px;\n  text-align: center;\n}\n\naside {\n  background-color: #f7f7f7;\n  text-align: center;\n  padding-top: 40px;\n}\n\n.range-list {\n  padding-bottom: 40px;\n  padding-top: 40px;\n}\n.range-list h4 {\n  margin-bottom: 40px;\n  color: darkorange;\n  font-weight: bold;\n}\n.range-list img {\n  width: 100%;\n  height: 100%;\n  max-width: 140px;\n  max-height: 60px;\n}\n.range-title {\n  color: darkblue;\n}\n\n.sports-icon-list {\n  background-color: #333;\n  padding-bottom: 40px;\n}\n.sports-icon-list a {\n  color: white;\n}\n.sports-icon-list a h6 {\n  margin-top: 2px;\n  margin-bottom: 14px;\n}\n.sports-icon-list img {\n  width:70px;\n  height:70px;\n}\n\n.sports-list-top div {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.sports-list-top a {\n  margin-left: 30px;\n  margin-right: 30px;\n  display: inline-block;\n}\n\narticle {\n  padding: 40px;\n}\narticle img {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  box-shadow: 6px 6px 8px #777;\n  margin-bottom: 20px;\n}\narticle p {\n  font-size: 16px;\n}"

/***/ })
/******/ ]);