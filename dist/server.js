/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'navbar' },
                _react2.default.createElement(
                    'nav',
                    { className: 'navbar navbar-new', role: 'navigation' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'navbar-header' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#navbar1' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    'Toggle navigation'
                                ),
                                _react2.default.createElement('span', { className: 'icon-bar' }),
                                _react2.default.createElement('span', { className: 'icon-bar' }),
                                _react2.default.createElement('span', { className: 'icon-bar' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'collapse navbar-collapse navbar-right', id: 'navbar1' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'nav navbar-nav' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/' },
                                        'Home'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/saint-martin' },
                                        'Saint-Martin'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/estates' },
                                        'Estates'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/contact' },
                                        'Contact'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
}(_react2.default.Component);

exports.default = Navbar;
;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _Layout = __webpack_require__(8);

var _Layout2 = _interopRequireDefault(_Layout);

var _Home = __webpack_require__(12);

var _Home2 = _interopRequireDefault(_Home);

var _SaintMartin = __webpack_require__(13);

var _SaintMartin2 = _interopRequireDefault(_SaintMartin);

var _Estates = __webpack_require__(11);

var _Estates2 = _interopRequireDefault(_Estates);

var _Contact = __webpack_require__(10);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes
exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _Layout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/saint-martin', component: _SaintMartin2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/estates', component: _Estates2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _Contact2.default })
);

// Component importing

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var body = _ref.body;

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>test</title>\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" />\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\" />\n        <link rel=\"stylesheet\" href=\"/dist/style.css\" />\n      </head>\n\n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n\n      <script src=\"/dist/client.js\"></script>\n      <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\" integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\" crossorigin=\"anonymous\"></script>\n      <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js\"></script>\n      <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n    </html>\n  ";
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;
;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {

      var estatesArray = [{ id: 1, name: "Summer Hill", url: "dist/img/summer-hill-villa.jpg", type: "Villa" }, { id: 2, name: "Little Dream", url: "dist/img/summer-hill-villa.jpg", type: "Apartment" }, { id: 3, name: "Palm Tree", url: "dist/img/summer-hill-villa.jpg", type: "Apartment" }, { id: 4, name: "Fidji", url: "dist/img/summer-hill-villa.jpg", type: "Duplex" }];

      var generateFirst = function generateFirst(obj) {
        return _react2.default.createElement(
          "div",
          { className: "item active", key: obj.id },
          _react2.default.createElement("img", { src: obj.url, alt: obj.name }),
          _react2.default.createElement(
            "div",
            { className: "carousel-caption" },
            obj.name
          )
        );
      };
      var firstItem = generateFirst(estatesArray[0]);

      var listItems = estatesArray.slice(1, estatesArray.length).map(function (obj) {
        return _react2.default.createElement(
          "div",
          { className: "item", key: obj.id },
          _react2.default.createElement("img", { src: obj.url, alt: obj.name }),
          _react2.default.createElement(
            "div",
            { className: "carousel-caption" },
            obj.name
          )
        );
      });

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "a",
          { href: "#estates-carousel", "data-slide": "prev" },
          "Previous"
        ),
        _react2.default.createElement(
          "a",
          { href: "#estates-carousel", "data-slide": "next" },
          "Next"
        ),
        _react2.default.createElement(
          "div",
          { className: "row carousel-container" },
          _react2.default.createElement(
            "div",
            { id: "estates-carousel", className: "carousel slide", "data-ride": "carousel" },
            _react2.default.createElement(
              "ol",
              { className: "carousel-indicators" },
              _react2.default.createElement("li", { "data-target": "#estates-carousel", "data-slide-to": "0", className: "active" }),
              _react2.default.createElement("li", { "data-target": "#estates-carousel", "data-slide-to": "1" }),
              _react2.default.createElement("li", { "data-target": "#estates-carousel", "data-slide-to": "2" }),
              _react2.default.createElement("li", { "data-target": "#estates-carousel", "data-slide-to": "3" })
            ),
            _react2.default.createElement(
              "div",
              { className: "carousel-inner", role: "listbox" },
              firstItem,
              listItems
            )
          )
        )
      );
    }
  }]);

  return Carousel;
}(_react2.default.Component);

exports.default = Carousel;
;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(1);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'contact-header' },
          _react2.default.createElement(_Navbar2.default, null),
          _react2.default.createElement(
            'h1',
            null,
            ' Contact '
          ),
          _react2.default.createElement('div', { className: 'contact-container' })
        )
      );
    }
  }]);

  return Contact;
}(_react2.default.Component);

exports.default = Contact;
;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(1);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Estates = function (_React$Component) {
  _inherits(Estates, _React$Component);

  function Estates() {
    _classCallCheck(this, Estates);

    return _possibleConstructorReturn(this, (Estates.__proto__ || Object.getPrototypeOf(Estates)).apply(this, arguments));
  }

  _createClass(Estates, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, null)
      );
    }
  }]);

  return Estates;
}(_react2.default.Component);

exports.default = Estates;
;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(1);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Carousel = __webpack_require__(9);

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'home-header' },
          _react2.default.createElement(_Navbar2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'home-header-title' },
            _react2.default.createElement(
              'h1',
              null,
              ' Blue Marine Vacation '
            ),
            _react2.default.createElement(
              'h2',
              null,
              ' Location saisoni\xE8re de standing || St.Marteen '
            ),
            _react2.default.createElement(
              'button',
              null,
              ' ',
              _react2.default.createElement(
                'h1',
                null,
                'R\xE9servez d\xE8s maintenant !'
              ),
              ' '
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row home-intro' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4 col-sm-4' },
            _react2.default.createElement(
              'h2',
              { style: { textAlign: "right" } },
              ' ',
              _react2.default.createElement(
                'strong',
                { style: { color: "#135589" } },
                'Profitez'
              ),
              ' ',
              _react2.default.createElement('br', null),
              ' de Saint-Martin. '
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-8 col-sm-8' },
            _react2.default.createElement(
              'p',
              { style: { textAlign: "left", marginTop: "20px", marginRight: "30px" } },
              ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row home-st-martin' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6 col-sm-6' },
            _react2.default.createElement('div', { className: 'home-st-martin-img' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6 col-sm-6' },
            _react2.default.createElement(
              'h1',
              null,
              ' ',
              _react2.default.createElement(
                'strong',
                { style: { color: "#135589" } },
                ' Saint-Martin, '
              ),
              ' ',
              _react2.default.createElement('br', null),
              ' la friendly island. '
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
            ),
            _react2.default.createElement(
              'button',
              null,
              ' Pour en apprendre plus sur Saint-Martin '
            )
          )
        ),
        _react2.default.createElement(_Carousel2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'row home-contact' },
          _react2.default.createElement(
            'button',
            { ref: 'button' },
            ' ',
            _react2.default.createElement(
              'h1',
              null,
              'Contactez-nous !'
            ),
            ' '
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;
;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(1);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaintMartin = function (_React$Component) {
  _inherits(SaintMartin, _React$Component);

  function SaintMartin() {
    _classCallCheck(this, SaintMartin);

    return _possibleConstructorReturn(this, (SaintMartin.__proto__ || Object.getPrototypeOf(SaintMartin)).apply(this, arguments));
  }

  _createClass(SaintMartin, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'saint-martin-header' },
          _react2.default.createElement(_Navbar2.default, null),
          _react2.default.createElement(
            'h1',
            null,
            ' Saint-Martin '
          )
        )
      );
    }
  }]);

  return SaintMartin;
}(_react2.default.Component);

exports.default = SaintMartin;
;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(25);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = __webpack_require__(15);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _estate = __webpack_require__(16);

var _estate2 = _interopRequireDefault(_estate);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _reactRouter = __webpack_require__(2);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _template = __webpack_require__(4);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Restful API module imports
// Express app init


//  RESTFUL API
app.use(_bodyParser2.default.json());

// Connect to mongoose
_mongoose2.default.connect('mongodb://localhost/bookstore');
var db = _mongoose2.default.connection;

// Get EstateS
app.get('/api/estates', function (req, res) {
    _estate2.default.getEstates(function (err, estates) {
        if (err) {
            throw err;
        } else {
            res.json(estates);
        }
    });
});

// Get Estate :/id
app.get('/api/estates/:_id', function (req, res) {
    _estate2.default.getEstateById(req.params._id, function (err, estate) {
        if (err) {
            throw err;
        } else {
            res.json(estate);
        }
    });
});

// Post Estate
app.post('/api/estates', function (req, res) {
    var estate = req.body;
    _estate2.default.addEstate(estate, function (err, estate) {
        if (err) {
            throw err;
        } else {
            res.json(estate);
        }
    });
});

// Update Estate

// Delete Estate /:id
app.delete('/api/estates/:_id', function (req, res) {
    var id = req.params._id;
    _estate2.default.deleteEstate(id, function (err, estate) {
        if (err) {
            throw err;
        } else {
            res.json(estate);
        }
    });
});

// Server-side rendering module imports


//  SERVER-SIDE RENDERING
app.use('/dist', _express2.default.static(__dirname));

app.get('*', function (req, res) {
    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            var html = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
            res.status(200).send((0, _template2.default)({ body: html }));
        } else {
            res.status(400).send('Not found.');
        }
    });
});

// Local-dev listening
var PORT = 3000;
app.listen(PORT, console.log('App ready: Listening on port' + PORT));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(15);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Estates Schema
var estateSchema = _mongoose2.default.Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  mainImageUrl: {
    type: String,
    require: true
  },
  information: {
    description: {
      type: String,
      require: true
    },
    capacity: {
      type: String,
      require: true
    },
    equipment: {
      type: String,
      require: true
    },
    moreFeatures: {
      type: String,
      require: true
    }
  },
  location: {
    lat: {
      type: String,
      require: true
    },
    lon: {
      type: String,
      require: true
    }
  },
  imageGalleryUrls: [String]
});

var Estate = module.exports = _mongoose2.default.model('Estate', estateSchema);

// Get EstateS
module.exports.getEstates = function (callback) {
  Estate.find(callback);
};

// Get Estate /:id
module.exports.getEstateById = function (id, callback) {
  Estate.findById(id, callback);
};

// Post Estate
module.exports.addEstate = function (estate, callback) {
  Estate.create(estate, callback);
};

// Update Estate
// Delete Estate /:id
module.exports.deleteEstate = function (id, estate, callback) {
  var query = { _id: id };
  Estate.remove(query, estate, callback);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = bytes;
module.exports.format = format;
module.exports.parse = parse;

/**
 * Module variables.
 * @private
 */

var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;

var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

var map = {
  b:  1,
  kb: 1 << 10,
  mb: 1 << 20,
  gb: 1 << 30,
  tb: ((1 << 30) * 1024)
};

// TODO: use is-finite module?
var numberIsFinite = Number.isFinite || function (v) { return typeof v === 'number' && isFinite(v); };

var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;

/**
 * Convert the given value in bytes into a string or parse to string to an integer in bytes.
 *
 * @param {string|number} value
 * @param {{
 *  case: [string],
 *  decimalPlaces: [number]
 *  fixedDecimals: [boolean]
 *  thousandsSeparator: [string]
 *  unitSeparator: [string]
 *  }} [options] bytes options.
 *
 * @returns {string|number|null}
 */

function bytes(value, options) {
  if (typeof value === 'string') {
    return parse(value);
  }

  if (typeof value === 'number') {
    return format(value, options);
  }

  return null;
}

/**
 * Format the given value in bytes into a string.
 *
 * If the value is negative, it is kept as such. If it is a float,
 * it is rounded.
 *
 * @param {number} value
 * @param {object} [options]
 * @param {number} [options.decimalPlaces=2]
 * @param {number} [options.fixedDecimals=false]
 * @param {string} [options.thousandsSeparator=]
 * @param {string} [options.unitSeparator=]
 *
 * @returns {string|null}
 * @public
 */

function format(value, options) {
  if (!numberIsFinite(value)) {
    return null;
  }

  var mag = Math.abs(value);
  var thousandsSeparator = (options && options.thousandsSeparator) || '';
  var unitSeparator = (options && options.unitSeparator) || '';
  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;
  var fixedDecimals = Boolean(options && options.fixedDecimals);
  var unit = 'B';

  if (mag >= map.tb) {
    unit = 'TB';
  } else if (mag >= map.gb) {
    unit = 'GB';
  } else if (mag >= map.mb) {
    unit = 'MB';
  } else if (mag >= map.kb) {
    unit = 'kB';
  }

  var val = value / map[unit.toLowerCase()];
  var str = val.toFixed(decimalPlaces);

  if (!fixedDecimals) {
    str = str.replace(formatDecimalsRegExp, '$1');
  }

  if (thousandsSeparator) {
    str = str.replace(formatThousandsRegExp, thousandsSeparator);
  }

  return str + unitSeparator + unit;
}

/**
 * Parse the string value into an integer in bytes.
 *
 * If no unit is given, it is assumed the value is in bytes.
 *
 * @param {number|string} val
 *
 * @returns {number|null}
 * @public
 */

function parse(val) {
  if (typeof val === 'number' && !isNaN(val)) {
    return val;
  }

  if (typeof val !== 'string') {
    return null;
  }

  // Test if the string passed is valid
  var results = parseRegExp.exec(val);
  var floatValue;
  var unit = 'b';

  if (!results) {
    // Nothing could be extracted from the given string
    floatValue = parseInt(val, 10);
    unit = 'b'
  } else {
    // Retrieve the value and the unit
    floatValue = parseFloat(results[1]);
    unit = results[4].toLowerCase();
  }

  return Math.floor(map[unit] * floatValue);
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var createError = __webpack_require__(22)
var getBody = __webpack_require__(30)
var iconv = __webpack_require__(24)
var onFinished = __webpack_require__(31)
var zlib = __webpack_require__(35)

/**
 * Module exports.
 */

module.exports = read

/**
 * Read a request into a buffer and parse.
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @param {function} parse
 * @param {function} debug
 * @param {object} options
 * @private
 */

function read (req, res, next, parse, debug, options) {
  var length
  var opts = options
  var stream

  // flag as parsed
  req._body = true

  // read options
  var encoding = opts.encoding !== null
    ? opts.encoding
    : null
  var verify = opts.verify

  try {
    // get the content stream
    stream = contentstream(req, debug, opts.inflate)
    length = stream.length
    stream.length = undefined
  } catch (err) {
    return next(err)
  }

  // set raw-body options
  opts.length = length
  opts.encoding = verify
    ? null
    : encoding

  // assert charset is supported
  if (opts.encoding === null && encoding !== null && !iconv.encodingExists(encoding)) {
    return next(createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
      charset: encoding.toLowerCase()
    }))
  }

  // read body
  debug('read body')
  getBody(stream, opts, function (err, body) {
    if (err) {
      // default to 400
      setErrorStatus(err, 400)

      // echo back charset
      if (err.type === 'encoding.unsupported') {
        err = createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
          charset: encoding.toLowerCase()
        })
      }

      // read off entire request
      stream.resume()
      onFinished(req, function onfinished () {
        next(err)
      })
      return
    }

    // verify
    if (verify) {
      try {
        debug('verify body')
        verify(req, res, body, encoding)
      } catch (err) {
        // default to 403
        setErrorStatus(err, 403)
        next(err)
        return
      }
    }

    // parse
    var str
    try {
      debug('parse body')
      str = typeof body !== 'string' && encoding !== null
        ? iconv.decode(body, encoding)
        : body
      req.body = parse(str)
    } catch (err) {
      err.body = str === undefined
        ? body
        : str

      // default to 400
      setErrorStatus(err, 400)

      next(err)
      return
    }

    next()
  })
}

/**
 * Get the content stream of the request.
 *
 * @param {object} req
 * @param {function} debug
 * @param {boolean} [inflate=true]
 * @return {object}
 * @api private
 */

function contentstream (req, debug, inflate) {
  var encoding = (req.headers['content-encoding'] || 'identity').toLowerCase()
  var length = req.headers['content-length']
  var stream

  debug('content-encoding "%s"', encoding)

  if (inflate === false && encoding !== 'identity') {
    throw createError(415, 'content encoding unsupported')
  }

  switch (encoding) {
    case 'deflate':
      stream = zlib.createInflate()
      debug('inflate body')
      req.pipe(stream)
      break
    case 'gzip':
      stream = zlib.createGunzip()
      debug('gunzip body')
      req.pipe(stream)
      break
    case 'identity':
      stream = req
      stream.length = length
      break
    default:
      throw createError(415, 'unsupported content encoding "' + encoding + '"', {
        encoding: encoding
      })
  }

  return stream
}

/**
 * Set a status on an error object, if ones does not exist
 * @private
 */

function setErrorStatus (error, status) {
  if (!error.status && !error.statusCode) {
    error.status = status
    error.statusCode = status
  }
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("type-is");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("content-type");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("depd");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var deprecate = __webpack_require__(23)('body-parser')

/**
 * Cache of loaded parsers.
 * @private
 */

var parsers = Object.create(null)

/**
 * @typedef Parsers
 * @type {function}
 * @property {function} json
 * @property {function} raw
 * @property {function} text
 * @property {function} urlencoded
 */

/**
 * Module exports.
 * @type {Parsers}
 */

exports = module.exports = deprecate.function(bodyParser,
  'bodyParser: use individual json/urlencoded middlewares')

/**
 * JSON parser.
 * @public
 */

Object.defineProperty(exports, 'json', {
  configurable: true,
  enumerable: true,
  get: createParserGetter('json')
})

/**
 * Raw parser.
 * @public
 */

Object.defineProperty(exports, 'raw', {
  configurable: true,
  enumerable: true,
  get: createParserGetter('raw')
})

/**
 * Text parser.
 * @public
 */

Object.defineProperty(exports, 'text', {
  configurable: true,
  enumerable: true,
  get: createParserGetter('text')
})

/**
 * URL-encoded parser.
 * @public
 */

Object.defineProperty(exports, 'urlencoded', {
  configurable: true,
  enumerable: true,
  get: createParserGetter('urlencoded')
})

/**
 * Create a middleware to parse json and urlencoded bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @deprecated
 * @public
 */

function bodyParser (options) {
  var opts = {}

  // exclude type option
  if (options) {
    for (var prop in options) {
      if (prop !== 'type') {
        opts[prop] = options[prop]
      }
    }
  }

  var _urlencoded = exports.urlencoded(opts)
  var _json = exports.json(opts)

  return function bodyParser (req, res, next) {
    _json(req, res, function (err) {
      if (err) return next(err)
      _urlencoded(req, res, next)
    })
  }
}

/**
 * Create a getter for loading a parser.
 * @private
 */

function createParserGetter (name) {
  return function get () {
    return loadParser(name)
  }
}

/**
 * Load a parser module.
 * @private
 */

function loadParser (parserName) {
  var parser = parsers[parserName]

  if (parser !== undefined) {
    return parser
  }

  // this uses a switch for static require analysis
  switch (parserName) {
    case 'json':
      parser = __webpack_require__(26)
      break
    case 'raw':
      parser = __webpack_require__(27)
      break
    case 'text':
      parser = __webpack_require__(28)
      break
    case 'urlencoded':
      parser = __webpack_require__(29)
      break
  }

  // store to prevent invoking require()
  return (parsers[parserName] = parser)
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var bytes = __webpack_require__(17)
var contentType = __webpack_require__(21)
var createError = __webpack_require__(22)
var debug = __webpack_require__(19)('body-parser:json')
var read = __webpack_require__(18)
var typeis = __webpack_require__(20)

/**
 * Module exports.
 */

module.exports = json

/**
 * RegExp to match the first non-space in a string.
 *
 * Allowed whitespace is defined in RFC 7159:
 *
 *    ws = *(
 *            %x20 /              ; Space
 *            %x09 /              ; Horizontal tab
 *            %x0A /              ; Line feed or New line
 *            %x0D )              ; Carriage return
 */

var FIRST_CHAR_REGEXP = /^[\x20\x09\x0a\x0d]*(.)/ // eslint-disable-line no-control-regex

/**
 * Create a middleware to parse JSON bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @public
 */

function json (options) {
  var opts = options || {}

  var limit = typeof opts.limit !== 'number'
    ? bytes.parse(opts.limit || '100kb')
    : opts.limit
  var inflate = opts.inflate !== false
  var reviver = opts.reviver
  var strict = opts.strict !== false
  var type = opts.type || 'application/json'
  var verify = opts.verify || false

  if (verify !== false && typeof verify !== 'function') {
    throw new TypeError('option verify must be function')
  }

  // create the appropriate type checking function
  var shouldParse = typeof type !== 'function'
    ? typeChecker(type)
    : type

  function parse (body) {
    if (body.length === 0) {
      // special-case empty json body, as it's a common client-side mistake
      // TODO: maybe make this configurable or part of "strict" option
      return {}
    }

    if (strict) {
      var first = firstchar(body)

      if (first !== '{' && first !== '[') {
        debug('strict violation')
        throw new SyntaxError('Unexpected token ' + first)
      }
    }

    debug('parse json')
    return JSON.parse(body, reviver)
  }

  return function jsonParser (req, res, next) {
    if (req._body) {
      debug('body already parsed')
      next()
      return
    }

    req.body = req.body || {}

    // skip requests without bodies
    if (!typeis.hasBody(req)) {
      debug('skip empty body')
      next()
      return
    }

    debug('content-type %j', req.headers['content-type'])

    // determine if request should be parsed
    if (!shouldParse(req)) {
      debug('skip parsing')
      next()
      return
    }

    // assert charset per RFC 7159 sec 8.1
    var charset = getCharset(req) || 'utf-8'
    if (charset.substr(0, 4) !== 'utf-') {
      debug('invalid charset')
      next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
        charset: charset
      }))
      return
    }

    // read
    read(req, res, next, parse, debug, {
      encoding: charset,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
}

/**
 * Get the first non-whitespace character in a string.
 *
 * @param {string} str
 * @return {function}
 * @private
 */

function firstchar (str) {
  return FIRST_CHAR_REGEXP.exec(str)[1]
}

/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */

function getCharset (req) {
  try {
    return contentType.parse(req).parameters.charset.toLowerCase()
  } catch (e) {
    return undefined
  }
}

/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */

function typeChecker (type) {
  return function checkType (req) {
    return Boolean(typeis(req, type))
  }
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 */

var bytes = __webpack_require__(17)
var debug = __webpack_require__(19)('body-parser:raw')
var read = __webpack_require__(18)
var typeis = __webpack_require__(20)

/**
 * Module exports.
 */

module.exports = raw

/**
 * Create a middleware to parse raw bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @api public
 */

function raw (options) {
  var opts = options || {}

  var inflate = opts.inflate !== false
  var limit = typeof opts.limit !== 'number'
    ? bytes.parse(opts.limit || '100kb')
    : opts.limit
  var type = opts.type || 'application/octet-stream'
  var verify = opts.verify || false

  if (verify !== false && typeof verify !== 'function') {
    throw new TypeError('option verify must be function')
  }

  // create the appropriate type checking function
  var shouldParse = typeof type !== 'function'
    ? typeChecker(type)
    : type

  function parse (buf) {
    return buf
  }

  return function rawParser (req, res, next) {
    if (req._body) {
      debug('body already parsed')
      next()
      return
    }

    req.body = req.body || {}

    // skip requests without bodies
    if (!typeis.hasBody(req)) {
      debug('skip empty body')
      next()
      return
    }

    debug('content-type %j', req.headers['content-type'])

    // determine if request should be parsed
    if (!shouldParse(req)) {
      debug('skip parsing')
      next()
      return
    }

    // read
    read(req, res, next, parse, debug, {
      encoding: null,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
}

/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */

function typeChecker (type) {
  return function checkType (req) {
    return Boolean(typeis(req, type))
  }
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 */

var bytes = __webpack_require__(17)
var contentType = __webpack_require__(21)
var debug = __webpack_require__(19)('body-parser:text')
var read = __webpack_require__(18)
var typeis = __webpack_require__(20)

/**
 * Module exports.
 */

module.exports = text

/**
 * Create a middleware to parse text bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @api public
 */

function text (options) {
  var opts = options || {}

  var defaultCharset = opts.defaultCharset || 'utf-8'
  var inflate = opts.inflate !== false
  var limit = typeof opts.limit !== 'number'
    ? bytes.parse(opts.limit || '100kb')
    : opts.limit
  var type = opts.type || 'text/plain'
  var verify = opts.verify || false

  if (verify !== false && typeof verify !== 'function') {
    throw new TypeError('option verify must be function')
  }

  // create the appropriate type checking function
  var shouldParse = typeof type !== 'function'
    ? typeChecker(type)
    : type

  function parse (buf) {
    return buf
  }

  return function textParser (req, res, next) {
    if (req._body) {
      debug('body already parsed')
      next()
      return
    }

    req.body = req.body || {}

    // skip requests without bodies
    if (!typeis.hasBody(req)) {
      debug('skip empty body')
      next()
      return
    }

    debug('content-type %j', req.headers['content-type'])

    // determine if request should be parsed
    if (!shouldParse(req)) {
      debug('skip parsing')
      next()
      return
    }

    // get charset
    var charset = getCharset(req) || defaultCharset

    // read
    read(req, res, next, parse, debug, {
      encoding: charset,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
}

/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */

function getCharset (req) {
  try {
    return contentType.parse(req).parameters.charset.toLowerCase()
  } catch (e) {
    return undefined
  }
}

/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */

function typeChecker (type) {
  return function checkType (req) {
    return Boolean(typeis(req, type))
  }
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var bytes = __webpack_require__(17)
var contentType = __webpack_require__(21)
var createError = __webpack_require__(22)
var debug = __webpack_require__(19)('body-parser:urlencoded')
var deprecate = __webpack_require__(23)('body-parser')
var read = __webpack_require__(18)
var typeis = __webpack_require__(20)

/**
 * Module exports.
 */

module.exports = urlencoded

/**
 * Cache of parser modules.
 */

var parsers = Object.create(null)

/**
 * Create a middleware to parse urlencoded bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @public
 */

function urlencoded (options) {
  var opts = options || {}

  // notice because option default will flip in next major
  if (opts.extended === undefined) {
    deprecate('undefined extended: provide extended option')
  }

  var extended = opts.extended !== false
  var inflate = opts.inflate !== false
  var limit = typeof opts.limit !== 'number'
    ? bytes.parse(opts.limit || '100kb')
    : opts.limit
  var type = opts.type || 'application/x-www-form-urlencoded'
  var verify = opts.verify || false

  if (verify !== false && typeof verify !== 'function') {
    throw new TypeError('option verify must be function')
  }

  // create the appropriate query parser
  var queryparse = extended
    ? extendedparser(opts)
    : simpleparser(opts)

  // create the appropriate type checking function
  var shouldParse = typeof type !== 'function'
    ? typeChecker(type)
    : type

  function parse (body) {
    return body.length
      ? queryparse(body)
      : {}
  }

  return function urlencodedParser (req, res, next) {
    if (req._body) {
      debug('body already parsed')
      next()
      return
    }

    req.body = req.body || {}

    // skip requests without bodies
    if (!typeis.hasBody(req)) {
      debug('skip empty body')
      next()
      return
    }

    debug('content-type %j', req.headers['content-type'])

    // determine if request should be parsed
    if (!shouldParse(req)) {
      debug('skip parsing')
      next()
      return
    }

    // assert charset
    var charset = getCharset(req) || 'utf-8'
    if (charset !== 'utf-8') {
      debug('invalid charset')
      next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
        charset: charset
      }))
      return
    }

    // read
    read(req, res, next, parse, debug, {
      debug: debug,
      encoding: charset,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
}

/**
 * Get the extended query parser.
 *
 * @param {object} options
 */

function extendedparser (options) {
  var parameterLimit = options.parameterLimit !== undefined
    ? options.parameterLimit
    : 1000
  var parse = parser('qs')

  if (isNaN(parameterLimit) || parameterLimit < 1) {
    throw new TypeError('option parameterLimit must be a positive number')
  }

  if (isFinite(parameterLimit)) {
    parameterLimit = parameterLimit | 0
  }

  return function queryparse (body) {
    var paramCount = parameterCount(body, parameterLimit)

    if (paramCount === undefined) {
      debug('too many parameters')
      throw createError(413, 'too many parameters')
    }

    var arrayLimit = Math.max(100, paramCount)

    debug('parse extended urlencoding')
    return parse(body, {
      allowPrototypes: true,
      arrayLimit: arrayLimit,
      depth: Infinity,
      parameterLimit: parameterLimit
    })
  }
}

/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */

function getCharset (req) {
  try {
    return contentType.parse(req).parameters.charset.toLowerCase()
  } catch (e) {
    return undefined
  }
}

/**
 * Count the number of parameters, stopping once limit reached
 *
 * @param {string} body
 * @param {number} limit
 * @api private
 */

function parameterCount (body, limit) {
  var count = 0
  var index = 0

  while ((index = body.indexOf('&', index)) !== -1) {
    count++
    index++

    if (count === limit) {
      return undefined
    }
  }

  return count
}

/**
 * Get parser for module name dynamically.
 *
 * @param {string} name
 * @return {function}
 * @api private
 */

function parser (name) {
  var mod = parsers[name]

  if (mod !== undefined) {
    return mod.parse
  }

  // this uses a switch for static require analysis
  switch (name) {
    case 'qs':
      mod = __webpack_require__(32)
      break
    case 'querystring':
      mod = __webpack_require__(33)
      break
  }

  // store to prevent invoking require()
  parsers[name] = mod

  return mod.parse
}

/**
 * Get the simple query parser.
 *
 * @param {object} options
 */

function simpleparser (options) {
  var parameterLimit = options.parameterLimit !== undefined
    ? options.parameterLimit
    : 1000
  var parse = parser('querystring')

  if (isNaN(parameterLimit) || parameterLimit < 1) {
    throw new TypeError('option parameterLimit must be a positive number')
  }

  if (isFinite(parameterLimit)) {
    parameterLimit = parameterLimit | 0
  }

  return function queryparse (body) {
    var paramCount = parameterCount(body, parameterLimit)

    if (paramCount === undefined) {
      debug('too many parameters')
      throw createError(413, 'too many parameters')
    }

    debug('parse urlencoding')
    return parse(body, undefined, undefined, {maxKeys: parameterLimit})
  }
}

/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */

function typeChecker (type) {
  return function checkType (req) {
    return Boolean(typeis(req, type))
  }
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * raw-body
 * Copyright(c) 2013-2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var bytes = __webpack_require__(17)
var iconv = __webpack_require__(24)
var unpipe = __webpack_require__(34)

/**
 * Module exports.
 * @public
 */

module.exports = getRawBody

/**
 * Module variables.
 * @private
 */

var iconvEncodingMessageRegExp = /^Encoding not recognized: /

/**
 * Get the decoder for a given encoding.
 *
 * @param {string} encoding
 * @private
 */

function getDecoder (encoding) {
  if (!encoding) return null

  try {
    return iconv.getDecoder(encoding)
  } catch (e) {
    // error getting decoder
    if (!iconvEncodingMessageRegExp.test(e.message)) throw e

    // the encoding was not found
    throw createError(415, 'specified encoding unsupported', 'encoding.unsupported', {
      encoding: encoding
    })
  }
}

/**
 * Get the raw body of a stream (typically HTTP).
 *
 * @param {object} stream
 * @param {object|string|function} [options]
 * @param {function} [callback]
 * @public
 */

function getRawBody (stream, options, callback) {
  var done = callback
  var opts = options || {}

  if (options === true || typeof options === 'string') {
    // short cut for encoding
    opts = {
      encoding: options
    }
  }

  if (typeof options === 'function') {
    done = options
    opts = {}
  }

  // validate callback is a function, if provided
  if (done !== undefined && typeof done !== 'function') {
    throw new TypeError('argument callback must be a function')
  }

  // require the callback without promises
  if (!done && !global.Promise) {
    throw new TypeError('argument callback is required')
  }

  // get encoding
  var encoding = opts.encoding !== true
    ? opts.encoding
    : 'utf-8'

  // convert the limit to an integer
  var limit = bytes.parse(opts.limit)

  // convert the expected length to an integer
  var length = opts.length != null && !isNaN(opts.length)
    ? parseInt(opts.length, 10)
    : null

  if (done) {
    // classic callback style
    return readStream(stream, encoding, length, limit, done)
  }

  return new Promise(function executor (resolve, reject) {
    readStream(stream, encoding, length, limit, function onRead (err, buf) {
      if (err) return reject(err)
      resolve(buf)
    })
  })
}

/**
 * Halt a stream.
 *
 * @param {Object} stream
 * @private
 */

function halt (stream) {
  // unpipe everything from the stream
  unpipe(stream)

  // pause stream
  if (typeof stream.pause === 'function') {
    stream.pause()
  }
}

/**
 * Make a serializable error object.
 *
 * To create serializable errors you must re-set message so
 * that it is enumerable and you must re configure the type
 * property so that is writable and enumerable.
 *
 * @param {number} status
 * @param {string} message
 * @param {string} type
 * @param {object} props
 * @private
 */

function createError (status, message, type, props) {
  var error = new Error()

  // capture stack trace
  Error.captureStackTrace(error, createError)

  // set free-form properties
  for (var prop in props) {
    error[prop] = props[prop]
  }

  // set message
  error.message = message

  // set status
  error.status = status
  error.statusCode = status

  // set type
  Object.defineProperty(error, 'type', {
    value: type,
    enumerable: true,
    writable: true,
    configurable: true
  })

  return error
}

/**
 * Read the data from the stream.
 *
 * @param {object} stream
 * @param {string} encoding
 * @param {number} length
 * @param {number} limit
 * @param {function} callback
 * @public
 */

function readStream (stream, encoding, length, limit, callback) {
  var complete = false
  var sync = true

  // check the length and limit options.
  // note: we intentionally leave the stream paused,
  // so users should handle the stream themselves.
  if (limit !== null && length !== null && length > limit) {
    return done(createError(413, 'request entity too large', 'entity.too.large', {
      expected: length,
      length: length,
      limit: limit
    }))
  }

  // streams1: assert request encoding is buffer.
  // streams2+: assert the stream encoding is buffer.
  //   stream._decoder: streams1
  //   state.encoding: streams2
  //   state.decoder: streams2, specifically < 0.10.6
  var state = stream._readableState
  if (stream._decoder || (state && (state.encoding || state.decoder))) {
    // developer error
    return done(createError(500, 'stream encoding should not be set', 'stream.encoding.set'))
  }

  var received = 0
  var decoder

  try {
    decoder = getDecoder(encoding)
  } catch (err) {
    return done(err)
  }

  var buffer = decoder
    ? ''
    : []

  // attach listeners
  stream.on('aborted', onAborted)
  stream.on('close', cleanup)
  stream.on('data', onData)
  stream.on('end', onEnd)
  stream.on('error', onEnd)

  // mark sync section complete
  sync = false

  function done () {
    var args = new Array(arguments.length)

    // copy arguments
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }

    // mark complete
    complete = true

    if (sync) {
      process.nextTick(invokeCallback)
    } else {
      invokeCallback()
    }

    function invokeCallback () {
      cleanup()

      if (args[0]) {
        // halt the stream on error
        halt(stream)
      }

      callback.apply(null, args)
    }
  }

  function onAborted () {
    if (complete) return

    done(createError(400, 'request aborted', 'request.aborted', {
      code: 'ECONNABORTED',
      expected: length,
      length: length,
      received: received
    }))
  }

  function onData (chunk) {
    if (complete) return

    received += chunk.length
    decoder
      ? buffer += decoder.write(chunk)
      : buffer.push(chunk)

    if (limit !== null && received > limit) {
      done(createError(413, 'request entity too large', 'entity.too.large', {
        limit: limit,
        received: received
      }))
    }
  }

  function onEnd (err) {
    if (complete) return
    if (err) return done(err)

    if (length !== null && received !== length) {
      done(createError(400, 'request size did not match content length', 'request.size.invalid', {
        expected: length,
        length: length,
        received: received
      }))
    } else {
      var string = decoder
        ? buffer + (decoder.end() || '')
        : Buffer.concat(buffer)
      done(null, string)
    }
  }

  function cleanup () {
    buffer = null

    stream.removeListener('aborted', onAborted)
    stream.removeListener('data', onData)
    stream.removeListener('end', onEnd)
    stream.removeListener('error', onEnd)
    stream.removeListener('close', cleanup)
  }
}


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("on-finished");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("unpipe");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map