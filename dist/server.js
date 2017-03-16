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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _Layout = __webpack_require__(11);

var _Layout2 = _interopRequireDefault(_Layout);

var _Home = __webpack_require__(16);

var _Home2 = _interopRequireDefault(_Home);

var _SaintMartin = __webpack_require__(17);

var _SaintMartin2 = _interopRequireDefault(_SaintMartin);

var _Estates = __webpack_require__(15);

var _Estates2 = _interopRequireDefault(_Estates);

var _Contact = __webpack_require__(14);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(3);

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
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EstatesMap = function (_React$Component) {
  _inherits(EstatesMap, _React$Component);

  function EstatesMap() {
    _classCallCheck(this, EstatesMap);

    return _possibleConstructorReturn(this, (EstatesMap.__proto__ || Object.getPrototypeOf(EstatesMap)).apply(this, arguments));
  }

  _createClass(EstatesMap, [{
    key: 'render',
    value: function render() {
      var mapContainer = _react2.default.createElement('div', { style: { height: '100%', width: '100%' } });

      var markers = this.props.markers.map(function (venue, i) {
        var marker = {
          position: {
            lat: venue.center.lat,
            lng: venue.center.lng
          }
        };
        return _react2.default.createElement(_reactGoogleMaps.Marker, _extends({ key: i }, marker));
      });

      return _react2.default.createElement(_reactGoogleMaps.GoogleMapLoader, {
        containerElement: mapContainer,
        googleMapElement: _react2.default.createElement(
          _reactGoogleMaps.GoogleMap,
          {
            defaultZoom: 13,
            defaultCenter: this.props.center,
            options: { streetViewControl: false,
              mapTypeControl: false,
              scrollwheel: false } },
          markers
        ) });
    }
  }]);

  return EstatesMap;
}(_react2.default.Component);

exports.default = EstatesMap;
;

/***/ }),
/* 14 */
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
/* 15 */
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

var _EstatesMap = __webpack_require__(13);

var _EstatesMap2 = _interopRequireDefault(_EstatesMap);

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
/* 16 */
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

var _Carousel = __webpack_require__(12);

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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(7);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _estate = __webpack_require__(5);

var _estate2 = _interopRequireDefault(_estate);

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _reactRouter = __webpack_require__(2);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

var _template = __webpack_require__(6);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _warning = __webpack_require__(28);

var _warning2 = _interopRequireDefault(_warning);

var _eventListsGoogleMapEventList = __webpack_require__(55);

var _eventListsGoogleMapEventList2 = _interopRequireDefault(_eventListsGoogleMapEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var mapControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  center: _react.PropTypes.object,
  heading: _react.PropTypes.number,
  mapTypeId: _react.PropTypes.any,
  options: _react.PropTypes.object,
  streetView: _react.PropTypes.any,
  tilt: _react.PropTypes.number,
  zoom: _react.PropTypes.number
};

exports.mapControlledPropTypes = mapControlledPropTypes;
var mapDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(mapControlledPropTypes);

exports.mapDefaultPropTypes = mapDefaultPropTypes;
var mapUpdaters = {
  center: function center(_center, component) {
    component.getMap().setCenter(_center);
  },
  heading: function heading(_heading, component) {
    component.getMap().setHeading(_heading);
  },
  mapTypeId: function mapTypeId(_mapTypeId, component) {
    component.getMap().setMapTypeId(_mapTypeId);
  },
  options: function options(_options, component) {
    component.getMap().setOptions(_options);
  },
  streetView: function streetView(_streetView, component) {
    component.getMap().setStreetView(_streetView);
  },
  tilt: function tilt(_tilt, component) {
    component.getMap().setTilt(_tilt);
  },
  zoom: function zoom(_zoom, component) {
    component.getMap().setZoom(_zoom);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsGoogleMapEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var mapEventPropTypes = eventPropTypes;

exports.mapEventPropTypes = mapEventPropTypes;

var GoogleMapHolder = (function (_Component) {
  _inherits(GoogleMapHolder, _Component);

  function GoogleMapHolder() {
    _classCallCheck(this, _GoogleMapHolder);

    _get(Object.getPrototypeOf(_GoogleMapHolder.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GoogleMapHolder, [{
    key: "getMap",
    value: function getMap() {
      return this.props.map;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react2["default"].createElement(
        "div",
        null,
        _react.Children.map(this.props.children, function (childElement) {
          if (_react2["default"].isValidElement(childElement)) {
            return _react2["default"].cloneElement(childElement, {
              mapHolderRef: _this
            });
          } else {
            return childElement;
          }
        })
      );
    }
  }], [{
    key: "_createMap",
    value: function _createMap(domEl, mapProps) {
      (0, _warning2["default"])("undefined" !== typeof google, "Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.\n If you're looking for built-in support to load it for you, use the \"async/ScriptjsLoader\" instead.\n See https://github.com/tomchentw/react-google-maps/pull/168");
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
      return new google.maps.Map(domEl, (0, _utilsComposeOptions2["default"])(mapProps, mapControlledPropTypes));
    }
  }, {
    key: "propTypes",
    value: {
      map: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _GoogleMapHolder = GoogleMapHolder;
  GoogleMapHolder = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getMap",
    updaters: mapUpdaters
  })(GoogleMapHolder) || GoogleMapHolder;
  return GoogleMapHolder;
})(_react.Component);

exports["default"] = GoogleMapHolder;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = composeOptions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _controlledOrDefault = __webpack_require__(64);

var _controlledOrDefault2 = _interopRequireDefault(_controlledOrDefault);

function composeOptions(props, controlledPropTypes) {
  var optionNameList = Object.keys(controlledPropTypes);
  var getter = (0, _controlledOrDefault2["default"])(props);

  // props from arguments may contain unknow props.
  // We only interested those in optionNameList
  return optionNameList.reduce(function (acc, optionName) {
    if ("options" !== optionName) {
      var value = getter(optionName);
      if ("undefined" !== typeof value) {
        acc[optionName] = value;
      }
    }
    return acc;
  }, _extends({}, getter("options")));
}

module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defaultPropsCreator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _addDefaultPrefix = __webpack_require__(26);

var _addDefaultPrefix2 = _interopRequireDefault(_addDefaultPrefix);

function defaultPropsCreator(propTypes) {
  return Object.keys(propTypes).reduce(function (acc, name) {
    acc[(0, _addDefaultPrefix2["default"])(name)] = propTypes[name];
    return acc;
  }, {});
}

module.exports = exports["default"];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = componentLifecycleDecorator;

function componentLifecycleDecorator(_ref) {
  var registerEvents = _ref.registerEvents;
  var instanceMethodName = _ref.instanceMethodName;
  var updaters = _ref.updaters;

  // This modify the Component.prototype directly
  return function (Component) {
    function register() {
      this._unregisterEvents = registerEvents(google.maps.event, this.props, this[instanceMethodName]());
    }

    function unregister() {
      if (this._unregisterEvents) {
        this._unregisterEvents();
        this._unregisterEvents = null;
      }
    }

    function noop() {}

    // Stash component's own lifecycle methods to be invoked later
    var componentDidMount = Component.prototype.hasOwnProperty("componentDidMount") ? Component.prototype.componentDidMount : noop;
    var componentDidUpdate = Component.prototype.hasOwnProperty("componentDidUpdate") ? Component.prototype.componentDidUpdate : noop;
    var componentWillUnmount = Component.prototype.hasOwnProperty("componentWillUnmount") ? Component.prototype.componentWillUnmount : noop;

    Object.defineProperty(Component.prototype, "componentDidMount", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
        // Hook into client's implementation, if it has any
        componentDidMount.call(this);

        register.call(this);
      }
    });

    Object.defineProperty(Component.prototype, "componentDidUpdate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(prevProps) {
        unregister.call(this);

        for (var _name in updaters) {
          if (Object.prototype.hasOwnProperty.call(this.props, _name)) {
            updaters[_name](this.props[_name], this);
          }
        }

        // Hook into client's implementation, if it has any
        componentDidUpdate.call(this, prevProps);

        register.call(this);
      }
    });

    Object.defineProperty(Component.prototype, "componentWillUnmount", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
        // Hook into client's implementation, if it has any
        componentWillUnmount.call(this);

        unregister.call(this);
        var instance = this[instanceMethodName]();
        if ("setMap" in instance) {
          instance.setMap(null);
        }
      }
    });

    return Component;
  };
}

module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = eventHandlerCreator;

var _react = __webpack_require__(0);

function groupToUpperCase(match, group) {
  return group.toUpperCase();
}

function toOnEventName(rawName) {
  return "on" + rawName.replace(/^(.)/, groupToUpperCase).replace(/_(.)/g, groupToUpperCase);
}

function eventHandlerCreator(rawNameList) {
  var eventPropTypes = {};
  var onEventNameByRawName = {};

  rawNameList.forEach(function (rawName) {
    var onEventName = toOnEventName(rawName);
    eventPropTypes[onEventName] = _react.PropTypes.func;
    onEventNameByRawName[rawName] = onEventName;
  });

  function registerEvents(event, props, googleMapInstance) {
    var registered = rawNameList.reduce(function (acc, rawName) {
      var onEventName = onEventNameByRawName[rawName];

      if (Object.prototype.hasOwnProperty.call(props, onEventName)) {
        acc.push(event.addListener(googleMapInstance, rawName, props[onEventName]));
      }
      return acc;
    }, []);

    return registered.forEach.bind(registered, event.removeListener, event);
  }

  return {
    eventPropTypes: eventPropTypes,
    registerEvents: registerEvents
  };
}

module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("can-use-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _creatorsGoogleMapHolder = __webpack_require__(19);

var _creatorsGoogleMapHolder2 = _interopRequireDefault(_creatorsGoogleMapHolder);

var USE_NEW_BEHAVIOR_TAG_NAME = "__new_behavior__"; /* CIRCULAR_DEPENDENCY */

var GoogleMapLoader = (function (_Component) {
  _inherits(GoogleMapLoader, _Component);

  function GoogleMapLoader() {
    _classCallCheck(this, GoogleMapLoader);

    _get(Object.getPrototypeOf(GoogleMapLoader.prototype), "constructor", this).apply(this, arguments);

    this.state = {
      map: null
    };
  }

  _createClass(GoogleMapLoader, [{
    key: "mountGoogleMap",
    value: function mountGoogleMap(domEl) {
      if (this.state.map || domEl === null) {
        return;
      }
      var _props$googleMapElement$props = this.props.googleMapElement.props;
      var children = _props$googleMapElement$props.children;

      var mapProps = _objectWithoutProperties(_props$googleMapElement$props, ["children"]);

      //
      // Create google.maps.Map instance so that dom is initialized before
      // React's children creators.
      //
      var map = _creatorsGoogleMapHolder2["default"]._createMap(domEl, mapProps);
      this.setState({ map: map });
    }
  }, {
    key: "renderChild",
    value: function renderChild() {
      if (this.state.map) {
        // Notice: implementation details
        //
        // In this state, the DOM of google.maps.Map is already initialized in
        // my innerHTML. Adding extra React components will not clean it
        // in current version*. It will use prepend to add DOM of
        // GoogleMapHolder and become a sibling of the DOM of google.maps.Map
        // Not sure this is subject to change
        //
        // *current version: 0.13.3, 0.14.2
        //
        return _react2["default"].cloneElement(this.props.googleMapElement, {
          map: this.state.map,
          // ------------ Deprecated ------------
          containerTagName: USE_NEW_BEHAVIOR_TAG_NAME
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].cloneElement(this.props.containerElement, {
        ref: this.mountGoogleMap.bind(this)
      }, this.renderChild());
    }
  }], [{
    key: "propTypes",
    value: {
      containerElement: _react.PropTypes.node.isRequired,
      googleMapElement: _react.PropTypes.element.isRequired },
    enumerable: true
  }, {
    key: "defaultProps",
    /* CIRCULAR_DEPENDENCY. Uncomment when 5.0.0 comes: propTypesElementOfType(GoogleMap).isRequired, */
    value: {
      containerElement: _react2["default"].createElement("div", null)
    },
    enumerable: true
  }]);

  return GoogleMapLoader;
})(_react.Component);

exports["default"] = GoogleMapLoader;
module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addDefaultPrefix;

function addDefaultPrefix(name) {
  return "default" + (name[0].toUpperCase() + name.slice(1));
}

module.exports = exports["default"];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsCircleCreator = __webpack_require__(41);

var _creatorsCircleCreator2 = _interopRequireDefault(_creatorsCircleCreator);

var Circle = (function (_Component) {
  _inherits(Circle, _Component);

  function Circle() {
    _classCallCheck(this, Circle);

    _get(Object.getPrototypeOf(Circle.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Circle, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getBounds() {
      return this.state.circle.getBounds();
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.state.circle.getCenter();
    }
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state.circle.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.circle.getEditable();
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return this.state.circle.getMap();
    }
  }, {
    key: "getRadius",
    value: function getRadius() {
      return this.state.circle.getRadius();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.circle.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var circle = _creatorsCircleCreator2["default"]._createCircle(this.props);

      this.setState({ circle: circle });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.circle) {
        return _react2["default"].createElement(
          _creatorsCircleCreator2["default"],
          _extends({ circle: this.state.circle }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsCircleCreator.circleDefaultPropTypes, _creatorsCircleCreator.circleControlledPropTypes, _creatorsCircleCreator.circleEventPropTypes),
    enumerable: true
  }]);

  return Circle;
})(_react.Component);

exports["default"] = Circle;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsDirectionsRendererCreator = __webpack_require__(42);

var _creatorsDirectionsRendererCreator2 = _interopRequireDefault(_creatorsDirectionsRendererCreator);

/*
 * Original author: @alexishevia
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/22
 */

var DirectionsRenderer = (function (_Component) {
  _inherits(DirectionsRenderer, _Component);

  function DirectionsRenderer() {
    _classCallCheck(this, DirectionsRenderer);

    _get(Object.getPrototypeOf(DirectionsRenderer.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(DirectionsRenderer, [{
    key: "getDirections",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDirections() {
      return this.state.directionsRenderer.getDirections();
    }
  }, {
    key: "getPanel",
    value: function getPanel() {
      return this.state.directionsRenderer.getPanel();
    }
  }, {
    key: "getRouteIndex",
    value: function getRouteIndex() {
      return this.state.directionsRenderer.getRouteIndex();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var directionsRenderer = _creatorsDirectionsRendererCreator2["default"]._createDirectionsRenderer(this.props);

      this.setState({ directionsRenderer: directionsRenderer });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.directionsRenderer) {
        return _react2["default"].createElement(
          _creatorsDirectionsRendererCreator2["default"],
          _extends({ directionsRenderer: this.state.directionsRenderer }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsDirectionsRendererCreator.directionsRendererDefaultPropTypes, _creatorsDirectionsRendererCreator.directionsRendererControlledPropTypes, _creatorsDirectionsRendererCreator.directionsRendererEventPropTypes),
    enumerable: true
  }]);

  return DirectionsRenderer;
})(_react.Component);

exports["default"] = DirectionsRenderer;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsDrawingManagerCreator = __webpack_require__(43);

var _creatorsDrawingManagerCreator2 = _interopRequireDefault(_creatorsDrawingManagerCreator);

/*
 * Original author: @idolize
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/46
 */

var DrawingManager = (function (_Component) {
  _inherits(DrawingManager, _Component);

  function DrawingManager() {
    _classCallCheck(this, DrawingManager);

    _get(Object.getPrototypeOf(DrawingManager.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(DrawingManager, [{
    key: "getDrawingMode",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDrawingMode() {
      return this.state.drawingManager.getDrawingMode();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var drawingManager = _creatorsDrawingManagerCreator2["default"]._createDrawingManager(this.props);

      this.setState({ drawingManager: drawingManager });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.drawingManager) {
        return _react2["default"].createElement(
          _creatorsDrawingManagerCreator2["default"],
          _extends({ drawingManager: this.state.drawingManager }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsDrawingManagerCreator.drawingManagerDefaultPropTypes, _creatorsDrawingManagerCreator.drawingManagerControlledPropTypes, _creatorsDrawingManagerCreator.drawingManagerEventPropTypes),
    enumerable: true
  }]);

  return DrawingManager;
})(_react.Component);

exports["default"] = DrawingManager;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _warning = __webpack_require__(28);

var _warning2 = _interopRequireDefault(_warning);

var _creatorsGoogleMapHolder = __webpack_require__(19);

var _creatorsGoogleMapHolder2 = _interopRequireDefault(_creatorsGoogleMapHolder);

var _GoogleMapLoader = __webpack_require__(25);

var _GoogleMapLoader2 = _interopRequireDefault(_GoogleMapLoader);

var USE_NEW_BEHAVIOR_TAG_NAME = "__new_behavior__";

var GoogleMap = (function (_Component) {
  _inherits(GoogleMap, _Component);

  function GoogleMap() {
    _classCallCheck(this, GoogleMap);

    _get(Object.getPrototypeOf(GoogleMap.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GoogleMap, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getBounds() {
      return (this.props.map || this.refs.delegate).getBounds();
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return (this.props.map || this.refs.delegate).getCenter();
    }
  }, {
    key: "getDiv",
    value: function getDiv() {
      return (this.props.map || this.refs.delegate).getDiv();
    }
  }, {
    key: "getHeading",
    value: function getHeading() {
      return (this.props.map || this.refs.delegate).getHeading();
    }
  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      return (this.props.map || this.refs.delegate).getMapTypeId();
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return (this.props.map || this.refs.delegate).getProjection();
    }
  }, {
    key: "getStreetView",
    value: function getStreetView() {
      return (this.props.map || this.refs.delegate).getStreetView();
    }
  }, {
    key: "getTilt",
    value: function getTilt() {
      return (this.props.map || this.refs.delegate).getTilt();
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      return (this.props.map || this.refs.delegate).getZoom();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // Public APIs - Use this carefully
    // See discussion in https://github.com/tomchentw/react-google-maps/issues/62
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return !it.match(/^get/) && !it.match(/^set/) && !it.match(/Map$/); })
  }, {
    key: "fitBounds",
    value: function fitBounds(bounds) {
      return (this.props.map || this.refs.delegate).fitBounds(bounds);
    }
  }, {
    key: "panBy",
    value: function panBy(x, y) {
      return (this.props.map || this.refs.delegate).panBy(x, y);
    }
  }, {
    key: "panTo",
    value: function panTo(latLng) {
      return (this.props.map || this.refs.delegate).panTo(latLng);
    }
  }, {
    key: "panToBounds",
    value: function panToBounds(latLngBounds) {
      return (this.props.map || this.refs.delegate).panToBounds(latLngBounds);
    }

    // END - Public APIs - Use this carefully
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var containerTagName = this.props.containerTagName;

      var isUsingNewBehavior = USE_NEW_BEHAVIOR_TAG_NAME === containerTagName;

      (0, _warning2["default"])(isUsingNewBehavior, "\"GoogleMap\" with containerTagName is deprecated now and will be removed in next major release (5.0.0).\nUse \"GoogleMapLoader\" instead. See https://github.com/tomchentw/react-google-maps/pull/157 for more details.");
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var containerTagName = _props.containerTagName;
      var _props$containerProps = _props.containerProps;
      var containerProps = _props$containerProps === undefined ? {} : _props$containerProps;
      var children = _props.children;

      var mapProps = _objectWithoutProperties(_props, ["containerTagName", "containerProps", "children"]);

      var isUsingNewBehavior = USE_NEW_BEHAVIOR_TAG_NAME === containerTagName;

      if (isUsingNewBehavior) {
        return _react2["default"].createElement(
          _creatorsGoogleMapHolder2["default"],
          mapProps,
          children
        );
      } else {
        // ------------ Deprecated ------------
        var realContainerTagName = containerTagName === undefined || containerTagName === null ? "div" : containerTagName;

        return _react2["default"].createElement(_GoogleMapLoader2["default"], {
          ref: "loader",
          containerElement: _react2["default"].createElement(realContainerTagName, containerProps),
          googleMapElement: _react2["default"].createElement(
            GoogleMap,
            _extends({ ref: "delegate", containerTagName: USE_NEW_BEHAVIOR_TAG_NAME }, mapProps),
            children
          )
        });
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({
      containerTagName: _react.PropTypes.string,
      containerProps: _react.PropTypes.object,
      map: _react.PropTypes.object
    }, _creatorsGoogleMapHolder.mapDefaultPropTypes, _creatorsGoogleMapHolder.mapControlledPropTypes, _creatorsGoogleMapHolder.mapEventPropTypes),
    enumerable: true
  }]);

  return GoogleMap;
})(_react.Component);

exports["default"] = GoogleMap;
module.exports = exports["default"];
// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsInfoWindowCreator = __webpack_require__(44);

var _creatorsInfoWindowCreator2 = _interopRequireDefault(_creatorsInfoWindowCreator);

var InfoWindow = (function (_Component) {
  _inherits(InfoWindow, _Component);

  function InfoWindow() {
    _classCallCheck(this, InfoWindow);

    _get(Object.getPrototypeOf(InfoWindow.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(InfoWindow, [{
    key: "getContent",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getContent() {/* TODO: children */}
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.state.infoWindow.getPosition();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.infoWindow.getZIndex();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var infoWindow = _creatorsInfoWindowCreator2["default"]._createInfoWindow(this.props);

      this.setState({ infoWindow: infoWindow });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.infoWindow) {
        return _react2["default"].createElement(
          _creatorsInfoWindowCreator2["default"],
          _extends({ infoWindow: this.state.infoWindow }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsInfoWindowCreator.infoWindowDefaultPropTypes, _creatorsInfoWindowCreator.infoWindowControlledPropTypes, _creatorsInfoWindowCreator.infoWindowEventPropTypes),
    enumerable: true
  }]);

  return InfoWindow;
})(_react.Component);

exports["default"] = InfoWindow;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsKmlLayerCreator = __webpack_require__(45);

var _creatorsKmlLayerCreator2 = _interopRequireDefault(_creatorsKmlLayerCreator);

var KmlLayer = (function (_Component) {
  _inherits(KmlLayer, _Component);

  function KmlLayer() {
    _classCallCheck(this, KmlLayer);

    _get(Object.getPrototypeOf(KmlLayer.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(KmlLayer, [{
    key: "getDefaultViewport",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getDefaultViewport() {
      return this.state.kmlLayer.getDefaultViewport();
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      return this.state.kmlLayer.getMetadata();
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.state.kmlLayer.getStatus();
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.state.kmlLayer.getUrl();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.marker.getZIndex();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var kmlLayer = _creatorsKmlLayerCreator2["default"]._createKmlLayer(this.props);

      this.setState({ kmlLayer: kmlLayer });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.kmlLayer) {
        return _react2["default"].createElement(
          _creatorsKmlLayerCreator2["default"],
          _extends({ kmlLayer: this.state.kmlLayer }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsKmlLayerCreator.kmlLayerDefaultPropTypes, _creatorsKmlLayerCreator.kmlLayerControlledPropTypes, _creatorsKmlLayerCreator.kmlLayerEventPropTypes),
    enumerable: true
  }]);

  return KmlLayer;
})(_react.Component);

exports["default"] = KmlLayer;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsMarkerCreator = __webpack_require__(46);

var _creatorsMarkerCreator2 = _interopRequireDefault(_creatorsMarkerCreator);

var Marker = (function (_Component) {
  _inherits(Marker, _Component);

  function Marker() {
    _classCallCheck(this, Marker);

    _get(Object.getPrototypeOf(Marker.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Marker, [{
    key: "getAnimation",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getAnimation() {
      return this.state.marker.getAnimation();
    }
  }, {
    key: "getAttribution",
    value: function getAttribution() {
      return this.state.marker.getAttribution();
    }
  }, {
    key: "getClickable",
    value: function getClickable() {
      return this.state.marker.getClickable();
    }
  }, {
    key: "getCursor",
    value: function getCursor() {
      return this.state.marker.getCursor();
    }
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state.marker.getDraggable();
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      return this.state.marker.getIcon();
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.state.marker.getLabel();
    }
  }, {
    key: "getOpacity",
    value: function getOpacity() {
      return this.state.marker.getOpacity();
    }
  }, {
    key: "getPlace",
    value: function getPlace() {
      return this.state.marker.getPlace();
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.state.marker.getPosition();
    }
  }, {
    key: "getShape",
    value: function getShape() {
      return this.state.marker.getShape();
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.state.marker.getTitle();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.marker.getVisible();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.marker.getZIndex();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var marker = _creatorsMarkerCreator2["default"]._createMarker(this.props);

      this.setState({ marker: marker });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_canUseDom2["default"]) {
        return;
      }

      var anchorHolderRef = this.props.anchorHolderRef;
      var marker = this.state.marker;

      if (anchorHolderRef) {
        if ("MarkerClusterer" === anchorHolderRef.getAnchorType()) {
          anchorHolderRef.getAnchor().removeMarker(marker);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.marker) {
        return _react2["default"].createElement(
          _creatorsMarkerCreator2["default"],
          _extends({ marker: this.state.marker }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsMarkerCreator.markerDefaultPropTypes, _creatorsMarkerCreator.markerControlledPropTypes, _creatorsMarkerCreator.markerEventPropTypes),
    enumerable: true
  }]);

  return Marker;
})(_react.Component);

exports["default"] = Marker;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsOverlayViewCreator = __webpack_require__(47);

var _creatorsOverlayViewCreator2 = _interopRequireDefault(_creatorsOverlayViewCreator);

/*
 * Original author: @petebrowne
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/63
 */

var OverlayView = (function (_Component) {
  _inherits(OverlayView, _Component);

  function OverlayView() {
    _classCallCheck(this, OverlayView);

    _get(Object.getPrototypeOf(OverlayView.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(OverlayView, [{
    key: "getPanes",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getPanes() {
      return this.state.overlayView.getPanes();
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return this.state.overlayView.getProjection();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var overlayView = _creatorsOverlayViewCreator2["default"]._createOverlayView(this.props);

      this.setState({ overlayView: overlayView });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.overlayView) {
        return _react2["default"].createElement(
          _creatorsOverlayViewCreator2["default"],
          _extends({ overlayView: this.state.overlayView }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "FLOAT_PANE",
    value: "floatPane",
    enumerable: true
  }, {
    key: "MAP_PANE",
    value: "mapPane",
    enumerable: true
  }, {
    key: "MARKER_LAYER",
    value: "markerLayer",
    enumerable: true
  }, {
    key: "OVERLAY_LAYER",
    value: "overlayLayer",
    enumerable: true
  }, {
    key: "OVERLAY_MOUSE_TARGET",
    value: "overlayMouseTarget",
    enumerable: true
  }, {
    key: "propTypes",
    value: _extends({}, _creatorsOverlayViewCreator.overlayViewDefaultPropTypes, _creatorsOverlayViewCreator.overlayViewControlledPropTypes),
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      mapPaneName: OverlayView.OVERLAY_LAYER
    },
    enumerable: true
  }]);

  return OverlayView;
})(_react.Component);

exports["default"] = OverlayView;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsPolygonCreator = __webpack_require__(48);

var _creatorsPolygonCreator2 = _interopRequireDefault(_creatorsPolygonCreator);

var Polygon = (function (_Component) {
  _inherits(Polygon, _Component);

  function Polygon() {
    _classCallCheck(this, Polygon);

    _get(Object.getPrototypeOf(Polygon.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Polygon, [{
    key: "getDraggable",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDraggable() {
      return this.state.polygon.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.polygon.getEditable();
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this.state.polygon.getPath();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      return this.state.polygon.getPaths();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.polygon.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var polygon = _creatorsPolygonCreator2["default"]._createPolygon(this.props);

      this.setState({ polygon: polygon });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.polygon) {
        return _react2["default"].createElement(
          _creatorsPolygonCreator2["default"],
          _extends({ polygon: this.state.polygon }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsPolygonCreator.polygonDefaultPropTypes, _creatorsPolygonCreator.polygonControlledPropTypes, _creatorsPolygonCreator.polygonEventPropTypes),
    enumerable: true
  }]);

  return Polygon;
})(_react.Component);

exports["default"] = Polygon;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsPolylineCreator = __webpack_require__(49);

var _creatorsPolylineCreator2 = _interopRequireDefault(_creatorsPolylineCreator);

var Polyline = (function (_Component) {
  _inherits(Polyline, _Component);

  function Polyline() {
    _classCallCheck(this, Polyline);

    _get(Object.getPrototypeOf(Polyline.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Polyline, [{
    key: "getDraggable",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDraggable() {
      return this.state.polyline.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.polyline.getEditable();
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this.state.polyline.getPath();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.polyline.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var polyline = _creatorsPolylineCreator2["default"]._createPolyline(this.props);

      this.setState({ polyline: polyline });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.polyline) {
        return _react2["default"].createElement(
          _creatorsPolylineCreator2["default"],
          _extends({ polyline: this.state.polyline }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsPolylineCreator.polylineDefaultPropTypes, _creatorsPolylineCreator.polylineControlledPropTypes, _creatorsPolylineCreator.polylineEventPropTypes),
    enumerable: true
  }]);

  return Polyline;
})(_react.Component);

exports["default"] = Polyline;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsRectangleCreator = __webpack_require__(50);

var _creatorsRectangleCreator2 = _interopRequireDefault(_creatorsRectangleCreator);

/*
 * Original author: @alistairjcbrown
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/80
 */

var Rectangle = (function (_Component) {
  _inherits(Rectangle, _Component);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    _get(Object.getPrototypeOf(Rectangle.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Rectangle, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getBounds() {
      return this.state.rectangle.getBounds();
    }
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state.rectangle.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.rectangle.getEditable();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.rectangle.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var rectangle = _creatorsRectangleCreator2["default"]._createRectangle(this.props);

      this.setState({ rectangle: rectangle });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.rectangle) {
        return _react2["default"].createElement(
          _creatorsRectangleCreator2["default"],
          _extends({ rectangle: this.state.rectangle }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsRectangleCreator.rectangleDefaultPropTypes, _creatorsRectangleCreator.rectangleControlledPropTypes, _creatorsRectangleCreator.rectangleEventPropTypes),
    enumerable: true
  }]);

  return Rectangle;
})(_react.Component);

exports["default"] = Rectangle;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _canUseDom = __webpack_require__(24);

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsSearchBoxCreator = __webpack_require__(51);

var _creatorsSearchBoxCreator2 = _interopRequireDefault(_creatorsSearchBoxCreator);

/*
 * Original author: @eyebraus
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/110
 */

var SearchBox = (function (_Component) {
  _inherits(SearchBox, _Component);

  function SearchBox() {
    _classCallCheck(this, SearchBox);

    _get(Object.getPrototypeOf(SearchBox.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(SearchBox, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getBounds() {
      return this.state.searchBox.getBounds();
    }
  }, {
    key: "getPlaces",
    value: function getPlaces() {
      return this.state.searchBox.getPlaces();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var classes = _props.classes;
      var style = _props.style;
      var placeholder = _props.placeholder;

      var searchBoxProps = _objectWithoutProperties(_props, ["mapHolderRef", "classes", "style", "placeholder"]);

      // Cannot create input via component - Google Maps will mess with React's internal state by detaching/attaching.
      // Allow developers to style the "hidden element" via inputClasses.
      var domEl = document.createElement("input");
      domEl.className = classes;
      domEl.type = "text";
      domEl.placeholder = placeholder;

      for (var propKey in style) {
        if (style.hasOwnProperty(propKey)) {
          domEl.style[propKey] = style[propKey];
        }
      }

      var searchBox = _creatorsSearchBoxCreator2["default"]._createSearchBox(domEl, searchBoxProps);

      this.setState({
        inputElement: domEl,
        searchBox: searchBox
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props;
      var mapHolderRef = _props2.mapHolderRef;
      var controlPosition = _props2.controlPosition;

      return this.state.searchBox ? _react2["default"].createElement(
        _creatorsSearchBoxCreator2["default"],
        _extends({ controlPosition: controlPosition, inputElement: this.state.inputElement, mapHolderRef: mapHolderRef, searchBox: this.state.searchBox }, this.props),
        this.props.children
      ) : _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsSearchBoxCreator.searchBoxDefaultPropTypes, _creatorsSearchBoxCreator.searchBoxControlledPropTypes, _creatorsSearchBoxCreator.searchBoxEventPropTypes),
    enumerable: true
  }]);

  return SearchBox;
})(_react.Component);

exports["default"] = SearchBox;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _eventListsCircleEventList = __webpack_require__(52);

var _eventListsCircleEventList2 = _interopRequireDefault(_eventListsCircleEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var circleControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  center: _react.PropTypes.any,
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  radius: _react.PropTypes.number,
  visible: _react.PropTypes.bool
};

exports.circleControlledPropTypes = circleControlledPropTypes;
var circleDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(circleControlledPropTypes);

exports.circleDefaultPropTypes = circleDefaultPropTypes;
var circleUpdaters = {
  center: function center(_center, component) {
    component.getCircle().setCenter(_center);
  },
  draggable: function draggable(_draggable, component) {
    component.getCircle().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getCircle().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getCircle().setOptions(_options);
  },
  radius: function radius(_radius, component) {
    component.getCircle().setRadius(_radius);
  },
  visible: function visible(_visible, component) {
    component.getCircle().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsCircleEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var circleEventPropTypes = eventPropTypes;

exports.circleEventPropTypes = circleEventPropTypes;

var CircleCreator = (function (_Component) {
  _inherits(CircleCreator, _Component);

  function CircleCreator() {
    _classCallCheck(this, _CircleCreator);

    _get(Object.getPrototypeOf(_CircleCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(CircleCreator, [{
    key: "getCircle",
    value: function getCircle() {
      return this.props.circle;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createCircle",
    value: function _createCircle(circleProps) {
      var mapHolderRef = circleProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
      var circle = new google.maps.Circle((0, _utilsComposeOptions2["default"])(circleProps, circleControlledPropTypes));

      circle.setMap(mapHolderRef.getMap());

      return circle;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      circle: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _CircleCreator = CircleCreator;
  CircleCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getCircle",
    updaters: circleUpdaters
  })(CircleCreator) || CircleCreator;
  return CircleCreator;
})(_react.Component);

exports["default"] = CircleCreator;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _eventListsDirectionsRendererEventList = __webpack_require__(53);

var _eventListsDirectionsRendererEventList2 = _interopRequireDefault(_eventListsDirectionsRendererEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var directionsRendererControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  directions: _react.PropTypes.any,
  options: _react.PropTypes.object,
  panel: _react.PropTypes.object,
  routeIndex: _react.PropTypes.number
};

exports.directionsRendererControlledPropTypes = directionsRendererControlledPropTypes;
var directionsRendererDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(directionsRendererControlledPropTypes);

exports.directionsRendererDefaultPropTypes = directionsRendererDefaultPropTypes;
var directionsRendererUpdaters = {
  directions: function directions(_directions, component) {
    component.getDirectionsRenderer().setDirections(_directions);
  },
  options: function options(_options, component) {
    component.getDirectionsRenderer().setOptions(_options);
  },
  panel: function panel(_panel, component) {
    component.getDirectionsRenderer().setPanel(_panel);
  },
  routeIndex: function routeIndex(_routeIndex, component) {
    component.getDirectionsRenderer().setRouteIndex(_routeIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsDirectionsRendererEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var directionsRendererEventPropTypes = eventPropTypes;

exports.directionsRendererEventPropTypes = directionsRendererEventPropTypes;

var DirectionsRendererCreator = (function (_Component) {
  _inherits(DirectionsRendererCreator, _Component);

  function DirectionsRendererCreator() {
    _classCallCheck(this, _DirectionsRendererCreator);

    _get(Object.getPrototypeOf(_DirectionsRendererCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DirectionsRendererCreator, [{
    key: "getDirectionsRenderer",
    value: function getDirectionsRenderer() {
      return this.props.directionsRenderer;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      if (_react.Children.count(children) > 0) {
        // TODO: take a look at DirectionsRendererOptions#infoWindow and DirectionsRendererOptions#markerOptions ?
        return _react2["default"].createElement(
          "div",
          null,
          children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "_createDirectionsRenderer",
    value: function _createDirectionsRenderer(directionsRendererProps) {
      var mapHolderRef = directionsRendererProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
      var directionsRenderer = new google.maps.DirectionsRenderer((0, _utilsComposeOptions2["default"])(directionsRendererProps, directionsRendererControlledPropTypes));

      directionsRenderer.setMap(mapHolderRef.getMap());

      return directionsRenderer;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      directionsRenderer: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _DirectionsRendererCreator = DirectionsRendererCreator;
  DirectionsRendererCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getDirectionsRenderer",
    updaters: directionsRendererUpdaters
  })(DirectionsRendererCreator) || DirectionsRendererCreator;
  return DirectionsRendererCreator;
})(_react.Component);

exports["default"] = DirectionsRendererCreator;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _eventListsDrawingManagerEventList = __webpack_require__(54);

var _eventListsDrawingManagerEventList2 = _interopRequireDefault(_eventListsDrawingManagerEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var drawingManagerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
  drawingMode: _react.PropTypes.any,
  options: _react.PropTypes.object
};

exports.drawingManagerControlledPropTypes = drawingManagerControlledPropTypes;
var drawingManagerDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(drawingManagerControlledPropTypes);

exports.drawingManagerDefaultPropTypes = drawingManagerDefaultPropTypes;
var drawingManagerUpdaters = {
  drawingMode: function drawingMode(_drawingMode, component) {
    component.getDrawingManager().setDrawingMode(_drawingMode);
  },
  options: function options(_options, component) {
    component.getDrawingManager().setOptions(_options);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsDrawingManagerEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var drawingManagerEventPropTypes = eventPropTypes;

exports.drawingManagerEventPropTypes = drawingManagerEventPropTypes;

var DrawingManagerCreator = (function (_Component) {
  _inherits(DrawingManagerCreator, _Component);

  function DrawingManagerCreator() {
    _classCallCheck(this, _DrawingManagerCreator);

    _get(Object.getPrototypeOf(_DrawingManagerCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DrawingManagerCreator, [{
    key: "getDrawingManager",
    value: function getDrawingManager() {
      return this.props.drawingManager;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createDrawingManager",
    value: function _createDrawingManager(drawingManagerProps) {
      var mapHolderRef = drawingManagerProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
      var drawingManager = new google.maps.drawing.DrawingManager((0, _utilsComposeOptions2["default"])(drawingManagerProps, drawingManagerControlledPropTypes));

      drawingManager.setMap(mapHolderRef.getMap());

      return drawingManager;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      drawingManager: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _DrawingManagerCreator = DrawingManagerCreator;
  DrawingManagerCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getDrawingManager",
    updaters: drawingManagerUpdaters
  })(DrawingManagerCreator) || DrawingManagerCreator;
  return DrawingManagerCreator;
})(_react.Component);

exports["default"] = DrawingManagerCreator;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _eventListsInfoWindowEventList = __webpack_require__(56);

var _eventListsInfoWindowEventList2 = _interopRequireDefault(_eventListsInfoWindowEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsSetContentForOptionalReactElement = __webpack_require__(65);

var _utilsSetContentForOptionalReactElement2 = _interopRequireDefault(_utilsSetContentForOptionalReactElement);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var infoWindowControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  content: _react.PropTypes.any,
  options: _react.PropTypes.object,
  position: _react.PropTypes.any,
  zIndex: _react.PropTypes.number
};

exports.infoWindowControlledPropTypes = infoWindowControlledPropTypes;
var infoWindowDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(infoWindowControlledPropTypes);

exports.infoWindowDefaultPropTypes = infoWindowDefaultPropTypes;
var infoWindowUpdaters = {
  children: function children(_children, component) {
    (0, _utilsSetContentForOptionalReactElement2["default"])(_children, component.getInfoWindow());
  },
  content: function content(_content, component) {
    component.getInfoWindow().setContent(_content);
  },
  options: function options(_options, component) {
    component.getInfoWindow().setOptions(_options);
  },
  position: function position(_position, component) {
    component.getInfoWindow().setPosition(_position);
  },
  zIndex: function zIndex(_zIndex, component) {
    component.getInfoWindow().setZIndex(_zIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsInfoWindowEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var infoWindowEventPropTypes = eventPropTypes;

exports.infoWindowEventPropTypes = infoWindowEventPropTypes;

var InfoWindowCreator = (function (_Component) {
  _inherits(InfoWindowCreator, _Component);

  function InfoWindowCreator() {
    _classCallCheck(this, _InfoWindowCreator);

    _get(Object.getPrototypeOf(_InfoWindowCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(InfoWindowCreator, [{
    key: "getInfoWindow",
    value: function getInfoWindow() {
      return this.props.infoWindow;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createInfoWindow",
    value: function _createInfoWindow(infoWindowProps) {
      var mapHolderRef = infoWindowProps.mapHolderRef;
      var anchorHolderRef = infoWindowProps.anchorHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
      var infoWindow = new google.maps.InfoWindow((0, _utilsComposeOptions2["default"])(infoWindowProps, infoWindowControlledPropTypes));

      if (infoWindowProps.children) {
        (0, _utilsSetContentForOptionalReactElement2["default"])(infoWindowProps.children, infoWindow);
      }

      if (anchorHolderRef) {
        infoWindow.open(mapHolderRef.getMap(), anchorHolderRef.getAnchor());
      } else {
        infoWindow.setMap(mapHolderRef.getMap());
      }

      return infoWindow;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      infoWindow: _react.PropTypes.object.isRequired,
      anchorHolderRef: _react.PropTypes.object
    },
    enumerable: true
  }]);

  var _InfoWindowCreator = InfoWindowCreator;
  InfoWindowCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getInfoWindow",
    updaters: infoWindowUpdaters
  })(InfoWindowCreator) || InfoWindowCreator;
  return InfoWindowCreator;
})(_react.Component);

exports["default"] = InfoWindowCreator;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _eventListsKmlLayerEventList = __webpack_require__(57);

var _eventListsKmlLayerEventList2 = _interopRequireDefault(_eventListsKmlLayerEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var kmlLayerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  defaultViewport: _react.PropTypes.any,
  metadata: _react.PropTypes.any,
  status: _react.PropTypes.any,
  url: _react.PropTypes.string,
  zIndex: _react.PropTypes.number
};

exports.kmlLayerControlledPropTypes = kmlLayerControlledPropTypes;
var kmlLayerDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(kmlLayerControlledPropTypes);

exports.kmlLayerDefaultPropTypes = kmlLayerDefaultPropTypes;
var kmlLayerUpdaters = {
  defaultViewport: function defaultViewport(_defaultViewport, component) {
    component.getKmlLayer().setDefaultViewport(_defaultViewport);
  },
  metadata: function metadata(_metadata, component) {
    component.getKmlLayer().setMetadata(_metadata);
  },
  status: function status(_status, component) {
    component.getKmlLayer().setStatus(_status);
  },
  url: function url(_url, component) {
    component.getKmlLayer().setUrl(_url);
  },
  zIndex: function zIndex(_zIndex, component) {
    component.getKmlLayer().setZIndex(_zIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsKmlLayerEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var kmlLayerEventPropTypes = eventPropTypes;

exports.kmlLayerEventPropTypes = kmlLayerEventPropTypes;

var KmlLayerCreator = (function (_Component) {
  _inherits(KmlLayerCreator, _Component);

  function KmlLayerCreator() {
    _classCallCheck(this, _KmlLayerCreator);

    _get(Object.getPrototypeOf(_KmlLayerCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(KmlLayerCreator, [{
    key: "getKmlLayer",
    value: function getKmlLayer() {
      return this.props.kmlLayer;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var children = _props.children;

      if (_react.Children.count(children) > 0) {
        return _react2["default"].createElement(
          "div",
          null,
          _react.Children.map(children, function (childElement) {
            return childElement && _react2["default"].cloneElement(childElement, {
              mapHolderRef: mapHolderRef
            });
          })
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "_createKmlLayer",
    value: function _createKmlLayer(kmlLayerProps) {
      var mapHolderRef = kmlLayerProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
      var kmlLayer = new google.maps.KmlLayer((0, _utilsComposeOptions2["default"])(kmlLayerProps, kmlLayerControlledPropTypes));

      kmlLayer.setMap(mapHolderRef.getMap());

      return kmlLayer;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      kmlLayer: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _KmlLayerCreator = KmlLayerCreator;
  KmlLayerCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getKmlLayer",
    updaters: kmlLayerUpdaters
  })(KmlLayerCreator) || KmlLayerCreator;
  return KmlLayerCreator;
})(_react.Component);

exports["default"] = KmlLayerCreator;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _eventListsMarkerEventList = __webpack_require__(58);

var _eventListsMarkerEventList2 = _interopRequireDefault(_eventListsMarkerEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var markerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
  animation: _react.PropTypes.any,
  attribution: _react.PropTypes.any,
  clickable: _react.PropTypes.bool,
  cursor: _react.PropTypes.string,
  draggable: _react.PropTypes.bool,
  icon: _react.PropTypes.any,
  label: _react.PropTypes.any,
  opacity: _react.PropTypes.number,
  options: _react.PropTypes.object,
  place: _react.PropTypes.any,
  position: _react.PropTypes.any,
  shape: _react.PropTypes.any,
  title: _react.PropTypes.string,
  visible: _react.PropTypes.bool,
  zIndex: _react.PropTypes.number
};

exports.markerControlledPropTypes = markerControlledPropTypes;
var markerDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(markerControlledPropTypes);

exports.markerDefaultPropTypes = markerDefaultPropTypes;
var markerUpdaters = {
  animation: function animation(_animation, component) {
    component.getMarker().setAnimation(_animation);
  },
  attribution: function attribution(_attribution, component) {
    component.getMarker().setAttribution(_attribution);
  },
  clickable: function clickable(_clickable, component) {
    component.getMarker().setClickable(_clickable);
  },
  cursor: function cursor(_cursor, component) {
    component.getMarker().setCursor(_cursor);
  },
  draggable: function draggable(_draggable, component) {
    component.getMarker().setDraggable(_draggable);
  },
  icon: function icon(_icon, component) {
    component.getMarker().setIcon(_icon);
  },
  label: function label(_label, component) {
    component.getMarker().setLabel(_label);
  },
  opacity: function opacity(_opacity, component) {
    component.getMarker().setOpacity(_opacity);
  },
  options: function options(_options, component) {
    component.getMarker().setOptions(_options);
  },
  place: function place(_place, component) {
    component.getMarker().setPlace(_place);
  },
  position: function position(_position, component) {
    component.getMarker().setPosition(_position);
  },
  shape: function shape(_shape, component) {
    component.getMarker().setShape(_shape);
  },
  title: function title(_title, component) {
    component.getMarker().setTitle(_title);
  },
  visible: function visible(_visible, component) {
    component.getMarker().setVisible(_visible);
  },
  zIndex: function zIndex(_zIndex, component) {
    component.getMarker().setZIndex(_zIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsMarkerEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var markerEventPropTypes = eventPropTypes;

exports.markerEventPropTypes = markerEventPropTypes;

var MarkerCreator = (function (_Component) {
  _inherits(MarkerCreator, _Component);

  function MarkerCreator() {
    _classCallCheck(this, _MarkerCreator);

    _get(Object.getPrototypeOf(_MarkerCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MarkerCreator, [{
    key: "getMarker",
    value: function getMarker() {
      return this.props.marker;
    }

    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindowOptions
    // In the core API, the only anchor is the Marker class.
  }, {
    key: "getAnchor",
    value: function getAnchor() {
      return this.props.marker;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var children = _props.children;

      if (_react.Children.count(children) > 0) {
        return _react2["default"].createElement(
          "div",
          null,
          _react.Children.map(children, function (childElement) {
            return childElement && _react2["default"].cloneElement(childElement, {
              mapHolderRef: mapHolderRef,
              anchorHolderRef: _this
            });
          })
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "_createMarker",
    value: function _createMarker(markerProps) {
      var mapHolderRef = markerProps.mapHolderRef;
      var anchorHolderRef = markerProps.anchorHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
      var marker = new google.maps.Marker((0, _utilsComposeOptions2["default"])(markerProps, markerControlledPropTypes));

      if (anchorHolderRef) {
        if ("MarkerClusterer" === anchorHolderRef.getAnchorType()) {
          anchorHolderRef.getAnchor().addMarker(marker);
        }
      } else {
        marker.setMap(mapHolderRef.getMap());
      }

      return marker;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      marker: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _MarkerCreator = MarkerCreator;
  MarkerCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getMarker",
    updaters: markerUpdaters
  })(MarkerCreator) || MarkerCreator;
  return MarkerCreator;
})(_react.Component);

exports["default"] = MarkerCreator;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _invariant = __webpack_require__(66);

var _invariant2 = _interopRequireDefault(_invariant);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var overlayViewControlledPropTypes = {
  // CustomProps
  mapPaneName: _react.PropTypes.string,
  getPixelPositionOffset: _react.PropTypes.func,
  position: _react.PropTypes.object,
  children: _react.PropTypes.node,
  bounds: _react.PropTypes.object
};

exports.overlayViewControlledPropTypes = overlayViewControlledPropTypes;
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference
var overlayViewDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(overlayViewControlledPropTypes);

exports.overlayViewDefaultPropTypes = overlayViewDefaultPropTypes;

var OverlayViewCreator = (function (_Component) {
  _inherits(OverlayViewCreator, _Component);

  function OverlayViewCreator() {
    _classCallCheck(this, OverlayViewCreator);

    _get(Object.getPrototypeOf(OverlayViewCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(OverlayViewCreator, [{
    key: "getOverlayView",
    value: function getOverlayView() {
      return this.props.overlayView;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getOverlayView().setMap(this.props.mapHolderRef.getMap());
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.getOverlayView().setValues(this.props);
      this.getOverlayView()._redraw(this.props.mapPaneName !== prevProps.mapPaneName);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.getOverlayView().setMap(null);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createOverlayView",
    value: function _createOverlayView(overlayViewProps) {
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
      var overlayView = new google.maps.OverlayView();
      overlayView.setValues((0, _utilsComposeOptions2["default"])(overlayViewProps, overlayViewControlledPropTypes));

      overlayView.onAdd = function onAdd() {
        this._containerElement = document.createElement("div");
        this._containerElement.style.position = "absolute";
      };

      overlayView.draw = function draw() {
        this._mountContainerToPane();
        this._renderContent();
      };

      overlayView.onRemove = function onRemove() {
        (0, _reactDom.unmountComponentAtNode)(this._containerElement);
        this._unmountContainerFromPane();
        this._containerElement = null;
      };

      overlayView._redraw = function _redraw(mapPaneNameChanged) {
        if (mapPaneNameChanged) {
          this._unmountContainerFromPane();
          this._mountContainerToPane();
        }
        this._renderContent();
      };

      overlayView._renderContent = function _renderContent() {
        if (this._containerElement) {
          (0, _reactDom.render)(_react.Children.only(this.get("children")), this._containerElement, this._positionContainerElement.bind(this));
        }
      };

      overlayView._mountContainerToPane = function _mountContainerToPane() {
        var mapPaneName = this.get("mapPaneName");
        (0, _invariant2["default"])(!!mapPaneName, "OverlayView requires a mapPaneName/defaultMapPaneName in your props instead of %s", mapPaneName);

        this.getPanes()[mapPaneName].appendChild(this._containerElement);
      };

      overlayView._unmountContainerFromPane = function _unmountContainerFromPane() {
        this._containerElement.parentNode.removeChild(this._containerElement);
      };

      overlayView._positionContainerElement = function _positionContainerElement() {
        var left = undefined;
        var top = undefined;
        var offset = this._getOffset();
        if (this.get("bounds")) {
          var bounds = this._getPixelBounds();
          if (bounds) {
            var sw = bounds.sw;
            var ne = bounds.ne;

            if (offset) {
              sw.x += offset.x;
              ne.y += offset.y;
            }
            left = sw.x + "px";
            top = ne.y + "px";
            this._containerElement.style.width = ne.x - sw.x + "px";
            this._containerElement.style.height = sw.y - ne.y + "px";
          }
        } else {
          var position = this._getPixelPosition();
          if (position) {
            var x = position.x;
            var y = position.y;

            if (offset) {
              x += offset.x;
              y += offset.y;
            }
            left = x + "px";
            top = y + "px";
          }
        }

        this._containerElement.style.left = left;
        this._containerElement.style.top = top;
      };

      overlayView._getPixelPosition = function _getPixelPosition() {
        var projection = this.getProjection();
        var position = this.get("position");
        (0, _invariant2["default"])(!!position, "OverlayView requires a position/defaultPosition in your props instead of %s", position);
        if (projection && position) {
          if (!(position instanceof google.maps.LatLng)) {
            position = new google.maps.LatLng(position.lat, position.lng);
          }
          return projection.fromLatLngToDivPixel(position);
        }
      };

      overlayView._getPixelBounds = function _getPixelBounds() {
        var projection = this.getProjection();
        var bounds = this.get("bounds");
        (0, _invariant2["default"])(!!bounds, "OverlayView requires a bounds in your props instead of %s", bounds);
        if (projection && bounds) {
          if (!(bounds instanceof google.maps.LatLngBounds)) {
            bounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.ne.lat, bounds.ne.lng), new google.maps.LatLng(bounds.sw.lat, bounds.sw.lng));
          }
          return {
            sw: projection.fromLatLngToDivPixel(this.bounds.getSouthWest()),
            ne: projection.fromLatLngToDivPixel(this.bounds.getNorthEast())
          };
        }
      };

      overlayView._getOffset = function _getOffset() {
        // Allows the component to control the visual position of the OverlayView
        // relative to the LatLng pixel position.
        var getPixelPositionOffset = this.get("getPixelPositionOffset");
        if (getPixelPositionOffset) {
          return getPixelPositionOffset(this._containerElement.offsetWidth, this._containerElement.offsetHeight);
        }
      };

      // If we're inside a MarkerClusterer, allow ourselves to be clustered
      if (overlayViewProps.anchorHolderRef) {
        if ("MarkerClusterer" === overlayViewProps.anchorHolderRef.getAnchorType()) {
          overlayView.getDraggable = function getDraggable() {
            return !!overlayViewProps.draggable;
          };

          overlayView.getPosition = function getPosition() {
            return new google.maps.LatLng(this.position);
          };

          overlayViewProps.anchorHolderRef.getAnchor().addMarker(overlayView);
        }
      }

      return overlayView;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      mapPaneName: _react.PropTypes.string,
      overlayView: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  return OverlayViewCreator;
})(_react.Component);

exports["default"] = OverlayViewCreator;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _eventListsPolygonEventList = __webpack_require__(59);

var _eventListsPolygonEventList2 = _interopRequireDefault(_eventListsPolygonEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var polygonControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  path: _react.PropTypes.any,
  paths: _react.PropTypes.any,
  visible: _react.PropTypes.bool
};

exports.polygonControlledPropTypes = polygonControlledPropTypes;
var polygonDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(polygonControlledPropTypes);

exports.polygonDefaultPropTypes = polygonDefaultPropTypes;
var polygonUpdaters = {
  draggable: function draggable(_draggable, component) {
    component.getPolygon().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getPolygon().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getPolygon().setOptions(_options);
  },
  path: function path(_path, component) {
    component.getPolygon().setPath(_path);
  },
  paths: function paths(_paths, component) {
    component.getPolygon().setPaths(_paths);
  },
  visible: function visible(_visible, component) {
    component.getPolygon().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsPolygonEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var polygonEventPropTypes = eventPropTypes;

exports.polygonEventPropTypes = polygonEventPropTypes;

var PolygonCreator = (function (_Component) {
  _inherits(PolygonCreator, _Component);

  function PolygonCreator() {
    _classCallCheck(this, _PolygonCreator);

    _get(Object.getPrototypeOf(_PolygonCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(PolygonCreator, [{
    key: "getPolygon",
    value: function getPolygon() {
      return this.props.polygon;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createPolygon",
    value: function _createPolygon(polygonProps) {
      var mapHolderRef = polygonProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
      var polygon = new google.maps.Polygon((0, _utilsComposeOptions2["default"])(polygonProps, polygonControlledPropTypes));

      polygon.setMap(mapHolderRef.getMap());

      return polygon;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      polygon: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _PolygonCreator = PolygonCreator;
  PolygonCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getPolygon",
    updaters: polygonUpdaters
  })(PolygonCreator) || PolygonCreator;
  return PolygonCreator;
})(_react.Component);

exports["default"] = PolygonCreator;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _eventListsPolylineEventList = __webpack_require__(60);

var _eventListsPolylineEventList2 = _interopRequireDefault(_eventListsPolylineEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var polylineControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  path: _react.PropTypes.any,
  visible: _react.PropTypes.bool
};

exports.polylineControlledPropTypes = polylineControlledPropTypes;
var polylineDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(polylineControlledPropTypes);

exports.polylineDefaultPropTypes = polylineDefaultPropTypes;
var polylineUpdaters = {
  draggable: function draggable(_draggable, component) {
    component.getPolyline().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getPolyline().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getPolyline().setOptions(_options);
  },
  path: function path(_path, component) {
    component.getPolyline().setPath(_path);
  },
  visible: function visible(_visible, component) {
    component.getPolyline().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsPolylineEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var polylineEventPropTypes = eventPropTypes;

exports.polylineEventPropTypes = polylineEventPropTypes;

var PolylineCreator = (function (_Component) {
  _inherits(PolylineCreator, _Component);

  function PolylineCreator() {
    _classCallCheck(this, _PolylineCreator);

    _get(Object.getPrototypeOf(_PolylineCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(PolylineCreator, [{
    key: "getPolyline",
    value: function getPolyline() {
      return this.props.polyline;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createPolyline",
    value: function _createPolyline(polylineProps) {
      var mapHolderRef = polylineProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
      var polyline = new google.maps.Polyline((0, _utilsComposeOptions2["default"])(polylineProps, polylineControlledPropTypes));

      polyline.setMap(mapHolderRef.getMap());

      return polyline;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      polyline: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _PolylineCreator = PolylineCreator;
  PolylineCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getPolyline",
    updaters: polylineUpdaters
  })(PolylineCreator) || PolylineCreator;
  return PolylineCreator;
})(_react.Component);

exports["default"] = PolylineCreator;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _eventListsRectangleEventList = __webpack_require__(61);

var _eventListsRectangleEventList2 = _interopRequireDefault(_eventListsRectangleEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var rectangleControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
  bounds: _react.PropTypes.any,
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  visible: _react.PropTypes.bool
};

exports.rectangleControlledPropTypes = rectangleControlledPropTypes;
var rectangleDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(rectangleControlledPropTypes);

exports.rectangleDefaultPropTypes = rectangleDefaultPropTypes;
var rectangleUpdaters = {
  bounds: function bounds(_bounds, component) {
    component.getRectangle().setBounds(_bounds);
  },
  draggable: function draggable(_draggable, component) {
    component.getRectangle().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getRectangle().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getRectangle().setOptions(_options);
  },
  visible: function visible(_visible, component) {
    component.getRectangle().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsRectangleEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var rectangleEventPropTypes = eventPropTypes;

exports.rectangleEventPropTypes = rectangleEventPropTypes;

var RectangleCreator = (function (_Component) {
  _inherits(RectangleCreator, _Component);

  function RectangleCreator() {
    _classCallCheck(this, _RectangleCreator);

    _get(Object.getPrototypeOf(_RectangleCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(RectangleCreator, [{
    key: "getRectangle",
    value: function getRectangle() {
      return this.props.rectangle;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createRectangle",
    value: function _createRectangle(rectangleProps) {
      var mapHolderRef = rectangleProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
      var rectangle = new google.maps.Rectangle((0, _utilsComposeOptions2["default"])(rectangleProps, rectangleControlledPropTypes));

      rectangle.setMap(mapHolderRef.getMap());

      return rectangle;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      rectangle: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _RectangleCreator = RectangleCreator;
  RectangleCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getRectangle",
    updaters: rectangleUpdaters
  })(RectangleCreator) || RectangleCreator;
  return RectangleCreator;
})(_react.Component);

exports["default"] = RectangleCreator;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _eventListsSearchBoxEventList = __webpack_require__(62);

var _eventListsSearchBoxEventList2 = _interopRequireDefault(_eventListsSearchBoxEventList);

var _utilsEventHandlerCreator = __webpack_require__(23);

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = __webpack_require__(21);

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = __webpack_require__(20);

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = __webpack_require__(22);

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = __webpack_require__(19);

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var searchBoxControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  bounds: _react.PropTypes.any
};

exports.searchBoxControlledPropTypes = searchBoxControlledPropTypes;
var searchBoxDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(searchBoxControlledPropTypes);

exports.searchBoxDefaultPropTypes = searchBoxDefaultPropTypes;
var searchBoxUpdaters = {
  bounds: function bounds(_bounds, component) {
    component.getSearchBox().setBounds(_bounds);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsSearchBoxEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var searchBoxEventPropTypes = eventPropTypes;

exports.searchBoxEventPropTypes = searchBoxEventPropTypes;

var SearchBoxCreator = (function (_Component) {
  _inherits(SearchBoxCreator, _Component);

  function SearchBoxCreator() {
    _classCallCheck(this, _SearchBoxCreator);

    _get(Object.getPrototypeOf(_SearchBoxCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(SearchBoxCreator, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mountComponentToMap(this.props.controlPosition);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.controlPosition !== prevProps.controlPosition) {
        this._unmountComponentFromMap(prevProps.controlPosition);
        this._mountComponentToMap(this.props.controlPosition);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unmountComponentFromMap(this.props.controlPosition);
    }
  }, {
    key: "_mountComponentToMap",
    value: function _mountComponentToMap(controlPosition) {
      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var inputElement = _props.inputElement;

      mapHolderRef.getMap().controls[controlPosition].push(inputElement);
    }
  }, {
    key: "_unmountComponentFromMap",
    value: function _unmountComponentFromMap(controlPosition) {
      var _props2 = this.props;
      var mapHolderRef = _props2.mapHolderRef;
      var inputElement = _props2.inputElement;

      var index = mapHolderRef.getMap().controls[controlPosition].getArray().indexOf(inputElement);
      mapHolderRef.getMap().controls[controlPosition].removeAt(index);
    }
  }, {
    key: "getSearchBox",
    value: function getSearchBox() {
      return this.props.searchBox;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createSearchBox",
    value: function _createSearchBox(inputElement, searchBoxProps) {
      var searchBox = new google.maps.places.SearchBox(inputElement, (0, _utilsComposeOptions2["default"])(searchBoxProps, searchBoxControlledPropTypes));

      return searchBox;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      searchBox: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _SearchBoxCreator = SearchBoxCreator;
  SearchBoxCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getSearchBox",
    updaters: searchBoxUpdaters
  })(SearchBoxCreator) || SearchBoxCreator;
  return SearchBoxCreator;
})(_react.Component);

exports["default"] = SearchBoxCreator;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "radius_changed", "rightclick"];
module.exports = exports["default"];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["directions_changed"];
module.exports = exports["default"];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["circlecomplete", "markercomplete", "overlaycomplete", "polygoncomplete", "polylinecomplete", "rectanglecomplete"];
module.exports = exports["default"];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "heading_changed", "idle", "maptypeid_changed", "mousemove", "mouseout", "mouseover", "projection_changed", "resize", "rightclick", "tilesloaded", "tilt_changed", "zoom_changed"];
module.exports = exports["default"];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"];
module.exports = exports["default"];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["click", "defaultviewport_changed", "status_changed"];
module.exports = exports["default"];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["animation_changed", "click", "clickable_changed", "cursor_changed", "dblclick", "drag", "dragend", "draggable_changed", "dragstart", "flat_changed", "icon_changed", "mousedown", "mouseout", "mouseover", "mouseup", "position_changed", "rightclick", "shape_changed", "title_changed", "visible_changed", "zindex_changed"];
module.exports = exports["default"];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["click", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"];
module.exports = exports["default"];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["click", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"];
module.exports = exports["default"];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["bounds_changed", "click", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"];
module.exports = exports["default"];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ["places_changed"];
module.exports = exports["default"];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

var _GoogleMapLoader = __webpack_require__(25);

exports.GoogleMapLoader = _interopRequire(_GoogleMapLoader);

var _GoogleMap = __webpack_require__(32);

exports.GoogleMap = _interopRequire(_GoogleMap);

var _Circle = __webpack_require__(29);

exports.Circle = _interopRequire(_Circle);

var _DirectionsRenderer = __webpack_require__(30);

exports.DirectionsRenderer = _interopRequire(_DirectionsRenderer);

var _DrawingManager = __webpack_require__(31);

exports.DrawingManager = _interopRequire(_DrawingManager);

var _InfoWindow = __webpack_require__(33);

exports.InfoWindow = _interopRequire(_InfoWindow);

var _KmlLayer = __webpack_require__(34);

exports.KmlLayer = _interopRequire(_KmlLayer);

var _Marker = __webpack_require__(35);

exports.Marker = _interopRequire(_Marker);

var _OverlayView = __webpack_require__(36);

exports.OverlayView = _interopRequire(_OverlayView);

var _Polygon = __webpack_require__(37);

exports.Polygon = _interopRequire(_Polygon);

var _Polyline = __webpack_require__(38);

exports.Polyline = _interopRequire(_Polyline);

var _Rectangle = __webpack_require__(39);

exports.Rectangle = _interopRequire(_Rectangle);

var _SearchBox = __webpack_require__(40);

exports.SearchBox = _interopRequire(_SearchBox);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = controlledOrDefault;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _addDefaultPrefix = __webpack_require__(26);

var _addDefaultPrefix2 = _interopRequireDefault(_addDefaultPrefix);

function controlledOrDefault(props) {
  return function (name) {
    if (Object.prototype.hasOwnProperty.call(props, name)) {
      return props[name];
    } else {
      return props[(0, _addDefaultPrefix2["default"])(name)];
    }
  };
}

module.exports = exports["default"];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setContentForOptionalReactElement;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

function renderElement(contentElement, possiblePrevContent) {
  var prevContent = possiblePrevContent;
  if ("[object HTMLDivElement]" !== Object.prototype.toString.call(prevContent)) {
    prevContent = document.createElement("div");
  }

  (0, _reactDom.render)(contentElement, prevContent);
  return prevContent;
}

function setContentForOptionalReactElement(contentOptionalReactElement, infoWindowLikeInstance) {
  if (_react2["default"].isValidElement(contentOptionalReactElement)) {
    var contentElement = _react.Children.only(contentOptionalReactElement);
    var prevContent = infoWindowLikeInstance.getContent();

    var domEl = renderElement(contentElement, prevContent);
    infoWindowLikeInstance.setContent(domEl);
  } else {
    infoWindowLikeInstance.setContent(contentOptionalReactElement);
  }
}

module.exports = exports["default"];

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map