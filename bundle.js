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

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"./node_modules/bootstrap/dist/css/bootstrap.min.css\">\n  <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>\n  <link rel=\"stylesheet\" href=\"./styles.css\">\n  <title>App</title>\n</head>\n\n<body>\n  <!-- <header>\n    <nav class=\"navbar fixed-top navbar-expand-md navbar-dark bg-dark cbp-af-header\">\n      <a href=\"#\" id=\"brand\"><img src=\"./images/site-logo-white-70pct.png\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#sights\">Sights</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#sports\">Sports</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#activities\">Activities</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#contact-us\">Contact Us</a>\n          </li>\n        </ul>\n\n      </div>\n    </nav>\n  </header> -->\n\n  <!-- <div class=\"container-fluid \">\n    <div class=\"row \">\n\n      <section class=\"col-sm-9 col-lg-8 order-1 order-sm-2 order-lg-2 \">\n        <article>\n          <h2>Why I Went Into the Lake</h2>\n          <img src=\"../../images/lake.jpg\" />\n          <div class=\"row\">\n            <p class=\"col-sm-10\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </p>\n            <div class=\"col-sm-2\">\n              <input type=\"button\" class=\"btn btn-primary\" value=\"More...\" />\n            </div>\n          </div>\n        </article>\n\n        <article>\n          <h2>My Name is NOT Bullwinkle</h2>\n          <img src=\"../../images/elk.jpg\" />\n          <div class=\"row\">\n            <p class=\"col-sm-10\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </p>\n            <div class=\"col-sm-2\">\n              <input type=\"button\" class=\"btn btn-primary\" value=\"More...\" />\n            </div>\n          </div>\n        </article>\n\n        <article>\n          <h2>There's Gotta be a Penguin Up Here Somewhere</h2>\n          <img src=\"../../images/snowboarder.jpg\" />\n          <div class=\"row\">\n            <p class=\"col-sm-10\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n            <div class=\"col-sm-2\">\n              <input type=\"button\" class=\"btn btn-primary\" value=\"More...\" />\n            </div>\n          </div>\n        </article>\n      </section>\n\n      <aside class=\"col-sm-3 col-lg-2 order-2 order-sm-1 order-lg-1 \">\n        <h4 class=\"range-title\">\n          <b>Mountain Ranges</b>\n        </h4>\n        <div class=\"range-list\">\n          <a href=\"wasatch-range.html\">\n            <img src=\"../../images/range-1.png\" />\n            <h4>Wasatch Range</h4>\n          </a>\n\n          <a href=\"mummy-range.html\">\n            <img src=\"../../images/range-2.png\" />\n            <h4>Mummy Range</h4>\n          </a>\n\n          <a href=\"front-range.html\">\n            <img src=\"../../images/range-3.png\" />\n            <h4>Front Range</h4>\n          </a>\n\n          <a href=\"sawtooth-range.html\">\n            <img src=\"../../images/range-4.png\" />\n            <h4>Sawtooth Range</h4>\n          </a>\n\n          <a href=\"west-elk-mountains.html\">\n            <img src=\"../../images/range-5.png\" />\n            <h4>West Elk Mountains</h4>\n          </a>\n        </div>\n      </aside>\n\n\n\n      <aside class=\"sports-icon-list col order-3 d-md-none d-lg-inline-block \">\n        <a href=\"downhill.html\">\n          <img src=\"../../images/icon-downhill.png\" alt=\"Downhill\" />\n          <h6>Downhill</h6>\n        </a>\n\n        <a href=\"snowboarding.html\">\n          <img src=\"../../images/icon-snowboard.png\" alt=\"Snowboarding\" />\n          <h6>Snowboarding</h6>\n        </a>\n\n        <a href=\"bobsled.html\">\n          <img src=\"../../images/icon-bobsled.png\" alt=\"Bobsled\" />\n          <h6>Bobsled</h6>\n        </a>\n\n        <a href=\"cross-country.html\">\n          <img src=\"../../images/icon-cross-country.png\" alt=\"Cross Country\" />\n          <h6>Cross Country</h6>\n        </a>\n\n        <a href=\"biathlon.html\">\n          <img src=\"../../images/icon-biathlon.png\" alt=\"Biathlon\" />\n          <h6>Biathlon</h6>\n        </a>\n      </aside>\n    </div>\n  </div> -->\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!-- <img src=\"./images/elk.jpg\" alt=\"\"> -->\n      <div class=\"fill-screen\"></div>\n    </div>\n  </div>\n\n <!--  <footer class=\"container-fluid\">\n    <h1>FOOTER</h1>\n  </footer> -->\n  <script type=\"text/javascript\" src=\"bundle.js\"></script>\n  <script src=\"./node_modules/jquery/dist/jquery.min.js\"></script>\n  <script src=\"./node_modules/popper.js/dist/umd/popper.min.js\"></script>\n  <script src=\"./node_modules/bootstrap/dist/js/bootstrap.min.js\"></script>\n  <!-- <script src=\"./js/classie.js\"></script>\n  <script src=\"./js/cbpAnimatedHeader.js\"></script> -->\n  <script>\n    $(function() {\n      $(window).on('load resize', function() {\n        $('.fill-screen').css('height', window.innerHeight);\n      });\n    });\n  </script>\n</body>\n\n</html>"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Open Sans', sans-serif;\n  padding-top: 80px;\n}\n\n.navbar {\n  padding: 30px 15px;\n  -webkit-transition:  all 0.25s;\n  transition: all 0.25s;\n}\n\n@media (max-width: 400px) {\n  header {\n    position: relative;\n  }\n\n  .navbar img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 70%;\n  }\n}\n\n#brand {\n  max-width: 80%\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: #bbb;\n}\n\n.cbp-af-header-shrink {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  opacity: 0.9;\n}\n\n.fill-screen {\n  background-image: url(elk.jpg);\n  /* background-size: cover; */\n  background-size: 100% 100%;\n  background-position: center;\n}\n\nfooter {\n  background-color: #333;\n  color: #ddd;\n  padding: 20px;\n  text-align: center;\n}\n\naside {\n  background-color: #f7f7f7;\n  text-align: center;\n  padding-top: 40px;\n}\n\n.range-list {\n  padding-bottom: 40px;\n  padding-top: 40px;\n}\n.range-list h4 {\n  margin-bottom: 40px;\n  color: darkorange;\n  font-weight: bold;\n}\n.range-list img {\n  width: 100%;\n  height: 100%;\n  max-width: 140px;\n  max-height: 60px;\n}\n.range-title {\n  color: darkblue;\n}\n\n.sports-icon-list {\n  background-color: #333;\n  padding-bottom: 40px;\n}\n.sports-icon-list a {\n  color: white;\n}\n.sports-icon-list a h6 {\n  margin-top: 2px;\n  margin-bottom: 14px;\n}\n.sports-icon-list img {\n  width:70px;\n  height:70px;\n}\n\n.sports-list-top div {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.sports-list-top a {\n  margin-left: 30px;\n  margin-right: 30px;\n  display: inline-block;\n}\n\narticle {\n  padding: 40px;\n}\narticle img {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  box-shadow: 6px 6px 8px #777;\n  margin-bottom: 20px;\n}\narticle p {\n  font-size: 16px;\n}\n\n@media (max-width: 767px) {\n\n  .range-list h4 {\n      display: inline;\n      font-size: 18px;\n  }\n\n  .range-list a {\n      display: block;\n  }\n\n  .range-list img {\n      width: 33%;\n      height: 33%;\n      margin-right: 10px;\n      margin-bottom: 30px;\n      margin-top: 20px;\n  }\n\n}\n\n\n/* The following code is used to create same-sized columns \n in a multi-column layout.\n Code from:  \n http://www.minimit.com/articles/solutions-tutorials/bootstrap-3-responsive-columns-of-same-height\n*/\n/* columns of same height styles */\n.container-xs-height {\n  display:table;\n  padding-left:0px;\n  padding-right:0px;\n}\n.row-xs-height {\n  display:table-row;\n}\n.col-xs-height {\n  display:table-cell;\n  float:none;\n}\n@media (min-width: 768px) {\n  .container-sm-height {\n      display:table;\n      padding-left:0px;\n      padding-right:0px;\n  }\n  .row-sm-height {\n      display:table-row;\n  }\n  .col-sm-height {\n      display:table-cell;\n      float:none;\n  }\n}\n@media (min-width: 992px) {\n  .container-md-height {\n      display:table;\n      padding-left:0px;\n      padding-right:0px;\n  }\n  .row-md-height {\n      display:table-row;\n  }\n  .col-md-height {\n      display:table-cell;\n      float:none;\n  }\n}\n@media (min-width: 1200px) {\n  .container-lg-height {\n      display:table;\n      padding-left:0px;\n      padding-right:0px;\n  }\n  .row-lg-height {\n      display:table-row;\n  }\n  .col-lg-height {\n      display:table-cell;\n      float:none;\n  }\n}"

/***/ })
/******/ ]);