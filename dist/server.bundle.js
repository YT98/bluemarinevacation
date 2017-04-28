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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _classnames = __webpack_require__(18);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = {
      isHome: false,
      isStMartin: false,
      isInvestir: false,
      isContact: false
    };
    _this.handlePath = _this.handlePath.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'handlePath',
    value: function handlePath() {
      var path = this.props.path;
      if (path == "/") {
        this.setState({ isHome: true, isStMartin: false, isInvestir: false, isContact: false });
      } else if (path == "/saint-martin") {
        this.setState({ isHome: false, isStMartin: true, isInvestir: false, isContact: false });
      } else if (path == "/investir") {
        this.setState({ isHome: false, isStMartin: false, isInvestir: true, isContact: false });
      } else if (path == "/contact") {
        this.setState({ isHome: false, isStMartin: false, isInvestir: false, isContact: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handlePath();
    }
  }, {
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
                  { className: this.state.isHome ? 'active' : '' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/' },
                    'Home'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: this.state.isStMartin ? 'active' : '' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/saint-martin' },
                    'Saint-Martin'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: this.state.isInvestir ? 'active' : '' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/investir' },
                    'Investir'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: this.state.isContact ? 'active' : '' },
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  googleMapsUrl: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCc4wGEx7lRphcJEyS2hdWetCXFbcg2GIQ&callback=initMap"
};

exports.default = config;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var body = _ref.body,
      googleMapsApiKey = _ref.googleMapsApiKey;

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>Holiday Homes 7 | Investissements immobiliers </title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" />\n        <script src=\"https://use.fontawesome.com/0cee7cce00.js\"></script>\n        <link rel=\"stylesheet\" href=\"/public/style.css\" />\n      </head>\n\n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n\n      <script src=\"/dist/client/client.bundle.js\"></script>\n      <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\" integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\" crossorigin=\"anonymous\"></script>\n      <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n    </html>\n  ";
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _Layout = __webpack_require__(12);

var _Layout2 = _interopRequireDefault(_Layout);

var _Home = __webpack_require__(15);

var _Home2 = _interopRequireDefault(_Home);

var _SaintMartin = __webpack_require__(17);

var _SaintMartin2 = _interopRequireDefault(_SaintMartin);

var _Investir = __webpack_require__(16);

var _Investir2 = _interopRequireDefault(_Investir);

var _Contact = __webpack_require__(14);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes
exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _Layout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/saint-martin', component: _SaintMartin2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/investir', component: _Investir2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _Contact2.default })
);

// Component importing

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cool-ascii-faces");

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


var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _coolAsciiFaces = __webpack_require__(7);

var _coolAsciiFaces2 = _interopRequireDefault(_coolAsciiFaces);

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _reactRouter = __webpack_require__(1);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

var _template = __webpack_require__(5);

var _template2 = _interopRequireDefault(_template);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // Express app init

app.get('/cool', function (request, response) {
  response.send((0, _coolAsciiFaces2.default)());
});

// Restful API module imports
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import Estate from './models/estate';

//  RESTFUL API
// app.use(bodyParser.json());

// Connect to mongoose
// mongoose.connect('mongodb://localhost/bookstore');
// var db = mongoose.connection;

// Get EstateS
// app.get('/api/estates', (req, res) => {
//     Estate.getEstates((err, estates) => {
//         if(err) {
//             throw err;
//         }
//         else {
//             res.json(estates);
//         }
//     });
// });

// Get Estate :/id
// app.get('/api/estates/:_id', (req, res) => {
//   Estate.getEstateById(req.params._id, (err, estate) => {
//     if(err) {
//       throw(err);
//     } else {
//       res.json(estate);
//     }
//   })
// })

// Post Estate
// app.post('/api/estates', (req, res) => {
//     var estate = req.body;
//     Estate.addEstate(estate, function(err, estate){
//         if(err) {
//             throw err;
//         }
//         else {
//             res.json(estate);
//         }
//     });
// });

// Update Estate

// Delete Estate /:id
// app.delete('/api/estates/:_id', (req, res) => {
//     var id = req.params._id;
//     Estate.deleteEstate(id, (err, estate) => {
//         if(err) {
//             throw err;
//         }
//         else {
//             res.json(estate);
//         }
//     });
// });

// Server-side rendering module imports


//  SERVER-SIDE RENDERING
app.use('/dist/client', _express2.default.static(__dirname + '/client'));
app.use('/public', _express2.default.static(__dirname + '/../public'));

app.get('*', function (req, res) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var html = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
      var googleMapsApiKey = _config2.default.googleMapsUrl;
      res.status(200).send((0, _template2.default)({ body: html }));
    } else {
      res.status(400).send('Not found.');
    }
  });
});

var PORT = 5000;
app.listen(PORT, console.log('App ready: Listening on port' + PORT));

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

var _Footer = __webpack_require__(13);

var _Footer2 = _interopRequireDefault(_Footer);

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
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;
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

var _reactRouter = __webpack_require__(1);

var _reactMotion = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.state = {
      footerToggle: false
    }, _this.onClick = _this.onClick.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'onClick',
    value: function onClick() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var footerTop = document.getElementById("footer").getBoundingClientRect().top;
      if (footerTop < 617) {
        this.setState({ footerToggle: true });
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentYear = new Date().getFullYear();

      return _react2.default.createElement(
        'div',
        { className: 'footer parent-divs', id: 'footer' },
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { p: (0, _reactMotion.spring)(this.state.footerToggle ? 0 : 1000, { stiffness: 170, damping: 26 }), o: (0, _reactMotion.spring)(this.state.footerToggle ? 1 : 0, { stiffness: 60, damping: 26 }) } },
          function (_ref) {
            var p = _ref.p,
                o = _ref.o;
            return _react2.default.createElement(
              'div',
              { className: 'row links', style: { transform: 'translateY(' + p + 'px)', opacity: '' + o } },
              _react2.default.createElement(
                'div',
                { className: 'col-md-3 col-sm-3 col-xs-12' },
                ' ',
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/', onClick: _this2.onClick },
                  _react2.default.createElement(
                    'h5',
                    null,
                    ' Accueil '
                  )
                ),
                ' '
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-3 col-sm-3 col-xs-12' },
                ' ',
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/saint-martin', onClick: _this2.onClick },
                  _react2.default.createElement(
                    'h5',
                    null,
                    ' Saint-Martin '
                  )
                ),
                ' '
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-3 col-sm-3 col-xs-12' },
                ' ',
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/investir', onClick: _this2.onClick },
                  _react2.default.createElement(
                    'h5',
                    null,
                    ' Investir '
                  )
                ),
                ' '
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-3 col-sm-3 col-xs-12' },
                ' ',
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: 'contact', onClick: _this2.onClick },
                  _react2.default.createElement(
                    'h5',
                    null,
                    ' Contact '
                  )
                ),
                ' '
              )
            );
          }
        ),
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { p: (0, _reactMotion.spring)(this.state.footerToggle ? 0 : 1000, { stiffness: 170, damping: 26 }), o: (0, _reactMotion.spring)(this.state.footerToggle ? 1 : 0, { stiffness: 60, damping: 26 }) } },
          function (_ref2) {
            var p = _ref2.p,
                o = _ref2.o;
            return _react2.default.createElement(
              'div',
              { style: { transform: 'translateY(' + p + 'px)', opacity: '' + o } },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'social', href: '#', target: '_blank' },
                  _react2.default.createElement('i', { className: 'fa fa-facebook-official fa-2x' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  ' Copyright \u24B8 ',
                  currentYear,
                  ' Holiday Homes 7. All rights reserved. '
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  ' Designed by Yannis Tarfa '
                )
              )
            );
          }
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;
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

var _reactMotion = __webpack_require__(2);

var _Navbar = __webpack_require__(3);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact(props) {
    _classCallCheck(this, Contact);

    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

    _this.state = {
      valueName: '',
      introToggle: false,
      formToggle: false,
      infoToggle: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(Contact, [{
    key: 'handleChange',
    value: function handleChange() {
      this.setState({ valueName: event.target.value }, console.log(event.target.value));
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var formTop = document.getElementById('form').getBoundingClientRect().top;
      if (formTop < 500) {
        this.setState({ formToggle: true });
      };
      var infoTop = document.getElementById('info').getBoundingClientRect().top;
      if (infoTop < 500) {
        this.setState({ infoToggle: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ introToggle: true });
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'parent-divs' },
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { p: (0, _reactMotion.spring)(this.state.introToggle ? 0 : -1000, { stiffness: 100, damping: 26 }), o: (0, _reactMotion.spring)(this.state.introToggle ? 1 : 0, { stiffness: 30, damping: 26 }) } },
          function (_ref) {
            var p = _ref.p,
                o = _ref.o;
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'contact-header' },
                _react2.default.createElement(_Navbar2.default, { path: _this2.props.location.pathname }),
                _react2.default.createElement(
                  'div',
                  { className: 'title', style: { opacity: '' + o } },
                  _react2.default.createElement(
                    'h1',
                    null,
                    ' Contact '
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row intro-contact' },
                _react2.default.createElement(
                  'p',
                  { className: 'col-md-6', style: { transform: 'translateX(' + p + 'px)', opacity: '' + o } },
                  ' Peu importe le continent dans lequel vous vivez, n\'h\xE9sitez surtout pas a nous contacter, nous offrons notre service aux quatre coins du globe. Veuillez simplement remplir le formulaire ci-dessous et nous r\xE9pondrons \xE0 toutes vos questions. Vous pouvez aussi contacter Pauline, notre repr\xE9sentante aux ventes, gr\xE2ce aux coordonnes plus bas sur cette page; elle se fera un plaisir de r\xE9pondre a toutes vos requ\xEAtes !'
                )
              )
            );
          }
        ),
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { o: (0, _reactMotion.spring)(this.state.formToggle ? 1 : 0, { stiffness: 30, damping: 26 }) } },
          function (_ref2) {
            var o = _ref2.o;
            return _react2.default.createElement(
              'div',
              { className: 'contact-formulaire-container', id: 'form' },
              _react2.default.createElement(
                'div',
                { className: 'contact-formulaire', style: { opacity: '' + o } },
                _react2.default.createElement(
                  'h1',
                  null,
                  ' Formulaire '
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    { className: 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10' }),
                    _react2.default.createElement(
                      'label',
                      { className: 'input__label input__label--jiro', htmlFor: 'input-10' },
                      _react2.default.createElement(
                        'span',
                        { className: 'input__label-content input__label-content--jiro' },
                        ' Nom et pr\xE9nom '
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10' }),
                    _react2.default.createElement(
                      'label',
                      { className: 'input__label input__label--jiro', htmlFor: 'input-10' },
                      _react2.default.createElement(
                        'span',
                        { className: 'input__label-content input__label-content--jiro' },
                        ' Adresse courriel '
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10' }),
                    _react2.default.createElement(
                      'label',
                      { className: 'input__label input__label--jiro', htmlFor: 'input-10' },
                      _react2.default.createElement(
                        'span',
                        { className: 'input__label-content input__label-content--jiro' },
                        ' Num\xE9ro de t\xE9l\xE9phone '
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10' }),
                    _react2.default.createElement(
                      'label',
                      { className: 'input__label input__label--jiro', htmlFor: 'input-10' },
                      _react2.default.createElement(
                        'span',
                        { className: 'input__label-content input__label-content--jiro' },
                        ' Vous cherchez : '
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10' }),
                    _react2.default.createElement(
                      'label',
                      { className: 'input__label input__label--jiro', htmlFor: 'input-10' },
                      _react2.default.createElement(
                        'span',
                        { className: 'input__label-content input__label-content--jiro' },
                        ' Information suppl\xE9mentaire '
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    ' Sachez que, si vous le souhaitez, notre entreprise vous accompagne \xE0 chaque \xE9tape de votre projet: aide \xE0 la revente, gestion de la location de votre propri\xE9t\xE9, aide \xE0 son entretien\u2026 '
                  ),
                  _react2.default.createElement(
                    'button',
                    null,
                    _react2.default.createElement(
                      'h4',
                      null,
                      ' Envoyer '
                    )
                  )
                )
              )
            );
          }
        ),
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { p: (0, _reactMotion.spring)(this.state.infoToggle ? 0 : -1000, { stiffness: 100, damping: 26 }), o: (0, _reactMotion.spring)(this.state.infoToggle ? 1 : 0, { stiffness: 30, damping: 26 }) } },
          function (_ref3) {
            var p = _ref3.p,
                o = _ref3.o;
            return _react2.default.createElement(
              'div',
              { className: 'row contact-info', id: 'info' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-4 col-sm-4', style: { transform: 'translateX(' + p + 'px)', opacity: '' + o } },
                _react2.default.createElement('img', { src: '/public/img/pauline.jpg', className: 'img-responsive img-circle' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'nom col-md-4 col-sm-4', style: { opacity: '' + o } },
                _react2.default.createElement(
                  'h3',
                  null,
                  ' Pauline Cauchefer '
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  ' Repr\xE9sentante aux ventes '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'info col-md-4 col-sm-4', style: { transform: 'translateX(' + -p + 'px)', opacity: '' + o } },
                _react2.default.createElement(
                  'h4',
                  null,
                  ' ',
                  _react2.default.createElement('i', { className: 'fa fa-phone' }),
                  ' +1 438-497-0297 '
                ),
                _react2.default.createElement(
                  'h4',
                  null,
                  ' ',
                  _react2.default.createElement('i', { className: 'fa fa-envelope' }),
                  ' paulinecaucheferpro@gmail.com '
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  _react2.default.createElement('i', { className: 'fa fa-phone' }),
                  ' +1 438-497-0297 '
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  _react2.default.createElement('i', { className: 'fa fa-envelope' }),
                  ' paulinecaucheferpro@gmail.com '
                )
              ),
              '\xA0'
            );
          }
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

var _Navbar = __webpack_require__(3);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _reactRouter = __webpack_require__(1);

var _reactMotion = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      introToggle: false,
      stMartinToggle: false,
      investirToggle: false
    };
    _this.onClick = _this.onClick.bind(_this);
    _this.handleIntroAnimation = _this.handleIntroAnimation.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'onClick',
    value: function onClick() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var stMartinTop = document.getElementById("home-st-martin").getBoundingClientRect().top;
      if (stMartinTop < 500) {
        this.setState({ stMartinToggle: true });
      };
      var investirTop = document.getElementById("home-investir").getBoundingClientRect().top;
      if (investirTop < 495) {
        this.setState({ investirToggle: true });
      }
    }
  }, {
    key: 'handleIntroAnimation',
    value: function handleIntroAnimation() {
      this.setState({ introToggle: true });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleIntroAnimation();
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'parent-divs' },
        _react2.default.createElement(
          'div',
          { className: 'home-header' },
          _react2.default.createElement(_Navbar2.default, { path: this.props.location.pathname }),
          _react2.default.createElement(
            'div',
            { className: 'video-container' },
            _react2.default.createElement('video', { className: 'video-background', autoPlay: true, muted: true, loop: true, preload: 'auto', src: '/public/img/video.mp4' })
          ),
          _react2.default.createElement(
            _reactMotion.Motion,
            { style: { p: (0, _reactMotion.spring)(this.state.introToggle ? 0 : 1000, { stiffness: 100, damping: 26 }), o: (0, _reactMotion.spring)(this.state.introToggle ? 1 : 0, { stiffness: 30, damping: 33 }) } },
            function (_ref) {
              var p = _ref.p,
                  o = _ref.o;
              return _react2.default.createElement(
                'div',
                { className: 'home-header-title', style: { transform: 'translateY(' + p + 'px)' } },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'h1',
                    { style: { opacity: '' + o } },
                    ' Holiday Homes 7 '
                  )
                )
              );
            }
          )
        ),
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { p: (0, _reactMotion.spring)(this.state.introToggle ? 0 : -1000, { stiffness: 100, damping: 26 }), o: (0, _reactMotion.spring)(this.state.introToggle ? 1 : 0, { stiffness: 30, damping: 26 }) } },
          function (_ref2) {
            var p = _ref2.p,
                o = _ref2.o;
            return _react2.default.createElement(
              'div',
              { className: 'row home-intro' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-4 col-sm-4' },
                _react2.default.createElement(
                  'h2',
                  { style: { transform: 'translateX(' + p + 'px)', opacity: '' + o } },
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
                  { style: { transform: 'translateX(' + -p + 'px)', opacity: '' + o } },
                  ' Nous sommes Holiday Homes 7, une entreprise d\u2019investissement immobilier. Situ\xE9s \xE0 St-Martin, nous sommes en mesure de vous procurer villas et appartements, terrains et locaux de qualit\xE9 dans le d\xE9cor de r\xEAve qu\u2019est cette merveilleuse \xEEle: collines verdoyantes, plages de sable fin, eau turquoise a perte de vue\u2026 St-Martin ne manque pas de facettes a decouvrir !'
                )
              )
            );
          }
        ),
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { p: (0, _reactMotion.spring)(this.state.stMartinToggle ? 0 : -1000, { stiffness: 100, damping: 26 }), o: (0, _reactMotion.spring)(this.state.stMartinToggle ? 1 : 0, { stiffness: 30, damping: 26 }), s: (0, _reactMotion.spring)(this.state.stMartinToggle ? 1 : 1.5, { stiffness: 30, damping: 26 }) } },
          function (_ref3) {
            var p = _ref3.p,
                o = _ref3.o,
                s = _ref3.s;
            return _react2.default.createElement(
              'div',
              { className: 'row home-st-martin', id: 'home-st-martin' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-6 col-sm-6' },
                _react2.default.createElement(
                  'div',
                  { className: 'home-st-martin-img' },
                  _react2.default.createElement('div', { style: { transform: 'scale(' + s + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-6 col-sm-6', style: { transform: 'translateX(' + -p + 'px)', opacity: '' + o } },
                _react2.default.createElement(
                  'h1',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'strong',
                    { style: { color: "#135589" } },
                    ' D\xE9couvrez '
                  ),
                  ' ',
                  _react2.default.createElement('br', null),
                  ' Saint-Martin, ',
                  _react2.default.createElement('br', null),
                  ' la friendly island. '
                ),
                _react2.default.createElement(
                  'button',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'p',
                    null,
                    ' ',
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: '/saint-martin', onClick: _this2.onClick },
                      ' Pour en apprendre plus sur Saint-Martin '
                    ),
                    ' '
                  ),
                  ' '
                )
              )
            );
          }
        ),
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { p: (0, _reactMotion.spring)(this.state.investirToggle ? 0 : -1000, { stiffness: 100, damping: 33 }), o: (0, _reactMotion.spring)(this.state.investirToggle ? 1 : 0, { stiffness: 30, damping: 26 }) } },
          function (_ref4) {
            var p = _ref4.p,
                o = _ref4.o;
            return _react2.default.createElement(
              'div',
              { className: 'row home-estates', id: 'home-investir' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 sol-xs-12', style: { transform: 'translateX(' + -p + 'px)' } },
                _react2.default.createElement(
                  'h1',
                  { style: { opacity: '' + o } },
                  ' ',
                  _react2.default.createElement(
                    'strong',
                    null,
                    ' Investissez '
                  ),
                  ' ',
                  _react2.default.createElement('br', null),
                  ' dans un petit bout ',
                  _react2.default.createElement('br', null),
                  ' de paradis.'
                ),
                _react2.default.createElement(
                  'button',
                  { style: { opacity: '' + o } },
                  ' ',
                  _react2.default.createElement(
                    'p',
                    null,
                    ' ',
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: '/investir', onClick: _this2.onClick },
                      ' Consultez nos propri\xE9t\xE9s ! '
                    ),
                    ' '
                  )
                )
              )
            );
          }
        ),
        _react2.default.createElement(
          'div',
          { className: 'row home-contact' },
          _react2.default.createElement(
            'button',
            null,
            ' ',
            _react2.default.createElement(
              'h1',
              null,
              ' ',
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/contact', onClick: this.onClick },
                ' Contactez-nous ! '
              ),
              ' '
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(3);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _reactMotion = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Investir = function (_React$Component) {
  _inherits(Investir, _React$Component);

  function Investir(props) {
    _classCallCheck(this, Investir);

    var _this = _possibleConstructorReturn(this, (Investir.__proto__ || Object.getPrototypeOf(Investir)).call(this, props));

    _this.state = {
      introToggle: false
    };
    return _this;
  }

  _createClass(Investir, [{
    key: 'handleIntroAnimation',
    value: function handleIntroAnimation() {
      this.setState({ introToggle: true });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleIntroAnimation();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'parent-divs' },
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { p: (0, _reactMotion.spring)(this.state.introToggle ? 0 : -1000, { stiffness: 100, damping: 26 }), o: (0, _reactMotion.spring)(this.state.introToggle ? 1 : 0, { stiffness: 30, damping: 26 }) } },
          function (_ref) {
            var p = _ref.p,
                o = _ref.o;
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'estates-header' },
                _react2.default.createElement(_Navbar2.default, { path: _this2.props.location.pathname }),
                _react2.default.createElement(
                  'div',
                  { className: 'title', style: { opacity: '' + o } },
                  _react2.default.createElement(
                    'h1',
                    null,
                    ' Investir '
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-7 estates-intro', style: { transform: 'translateX(' + p + 'px)', opacity: '' + o } },
                  _react2.default.createElement(
                    'h1',
                    null,
                    ' Pourquoi nous faire confiance: '
                  ),
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' Nous sommes des professionels de l\'immobilier \xE0 Saint-Martin depuis plus de 15 ans ! '
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' Holiday Homes Seven est une SARL (Soci\xE9t\xE9 \xE0 Responsabilit\xE9 Limit\xE9e) constitu\xE9e de trois associ\xE9s. '
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' Nos clients sont principalement originaires d\'Europe et d\'Amerique du Nord et du Sud. '
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' Nous avons de nombreux produits \xE0 la vente : du petit studio \xE0 la villa de luxe, commerces, immeubles complets et terrains. '
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' Nous sommes pr\xE9sents du c\xF4t\xE9 fran\xE7ais ainsi que du c\xF4t\xE9 hollandais de l\'\xEEle, ainsi qu\'\xE0 Saint-Barth\xE9l\xE9my (SBH). '
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' Commission raisonnable. '
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' Nous avons de nombreuses connections gr\xE2ce \xE0 la location saisonni\xE8re. '
                    )
                  )
                )
              )
            );
          }
        ),
        _react2.default.createElement(
          'div',
          { className: 'summerhill' },
          _react2.default.createElement(
            'h1',
            null,
            ' Exemples de propri\xE9t\xE9s en vente: '
          ),
          _react2.default.createElement(
            'div',
            { className: 'img' },
            _react2.default.createElement(
              'div',
              { className: 'header-container' },
              ' ',
              _react2.default.createElement(
                'h1',
                null,
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Point de Pirouette'
                ),
                ' Villa '
              ),
              ' '
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'text-container' },
            _react2.default.createElement(
              'h3',
              null,
              ' 2, 100, 000 ',
              _react2.default.createElement('i', { className: 'fa fa-eur' }),
              ' ',
              _react2.default.createElement(
                'span',
                null,
                ' (commission incluse) '
              ),
              ' '
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' 4 chambres et 4 salles de bains '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' Piscine, terrasse et dock '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' Front de Lagon '
              )
            )
          )
        ),
        _react2.default.createElement(
          'button',
          { className: 'facebook' },
          ' ',
          _react2.default.createElement(
            'h4',
            null,
            ' Consultez plus de propri\xE9t\xE9s \xE0 vendre sur Facebook. ',
            _react2.default.createElement('i', { className: 'fa fa-facebook-official' }),
            ' '
          ),
          ' '
        ),
        _react2.default.createElement(
          'button',
          { className: 'airbnb' },
          ' ',
          _react2.default.createElement(
            'h5',
            null,
            ' ',
            _react2.default.createElement(
              'a',
              { target: '__blank', href: 'https://fr.airbnb.ca/s?host_id=96977877&s_tag=A7DvdiEZ&allow_override%5B%5D=' },
              ' Consultez nos propri\xE9t\xE9s \xE0 louer sur Airbnb '
            ),
            '  '
          ),
          ' '
        )
      );
    }
  }]);

  return Investir;
}(_react2.default.Component);

exports.default = Investir;
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

var _Navbar = __webpack_require__(3);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _reactMotion = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaintMartin = function (_React$Component) {
  _inherits(SaintMartin, _React$Component);

  function SaintMartin(props) {
    _classCallCheck(this, SaintMartin);

    var _this = _possibleConstructorReturn(this, (SaintMartin.__proto__ || Object.getPrototypeOf(SaintMartin)).call(this, props));

    _this.state = {
      introToggle: false,
      geographieToggle: false,
      mapToggle: false,
      histoireToggle: false,
      activitesToggle: false
    };
    _this.handleIntroAnimation = _this.handleIntroAnimation.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(SaintMartin, [{
    key: 'handleIntroAnimation',
    value: function handleIntroAnimation() {
      this.setState({ introToggle: !this.state.introToggle });
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var geographieTop = document.getElementById("geographie").getBoundingClientRect().top;
      if (geographieTop < 500) {
        this.setState({ geographieToggle: true });
      }
      var mapTop = document.getElementById("map").getBoundingClientRect().top;
      if (mapTop < 500) {
        this.setState({ mapToggle: true });
      }
      var histoireTop = document.getElementById("histoire").getBoundingClientRect().top;
      if (histoireTop < 500) {
        this.setState({ histoireToggle: true });
      }
      var activitesTop = document.getElementById("activites").getBoundingClientRect().top;
      if (activitesTop < 500) {
        this.setState({ activitesToggle: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleIntroAnimation();
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'parent-divs' },
        _react2.default.createElement(
          'div',
          { className: 'st-martin-container' },
          _react2.default.createElement(
            _reactMotion.Motion,
            { style: { p: (0, _reactMotion.spring)(this.state.introToggle ? 0 : -1000, { stiffness: 100, damping: 26 }), o: (0, _reactMotion.spring)(this.state.introToggle ? 1 : 0, { stiffness: 30, damping: 26 }) } },
            function (_ref) {
              var p = _ref.p,
                  o = _ref.o;
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'saint-martin-header' },
                  _react2.default.createElement(_Navbar2.default, { path: _this2.props.location.pathname }),
                  _react2.default.createElement(
                    'div',
                    { className: 'title' },
                    _react2.default.createElement(
                      'h1',
                      { style: { opacity: '' + o } },
                      ' Saint-Martin '
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'intro-st-martin row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-6', style: { transform: 'translateX(' + p + 'px)', opacity: '' + o } },
                    _react2.default.createElement(
                      'p',
                      null,
                      'Journ\xE9es ensoleill\xE9es, douces nuits de velours et des paysages \xE0 couper le souffle ; voil\xE0 quelques-uns des ingr\xE9dients qui cr\xE9ent l\u2019atmosph\xE8re unique qui refl\xE8te Saint-Martin. D\xE9couvrez les diff\xE9rentes facettes d\u2019une \xEEle qui vous s\xE9duira. Faites une promenade dans la nature de Saint-Martin en explorant ses collines en accro-branche ou \xE0 cheval. Plongez dans notre monde sous-marin de corail et de grottes color\xE9es par les poissons tropicaux ou naviguez sur un catamaran vers une des nombreuses anses cach\xE9es, parfaites pour un rendez-vous intime. Savourez des plats gastronomiques ou la d\xE9licieuse cuisine locale pr\xE9par\xE9e sur les barbecues des lolos de Marigot et Grand Case \u2013 o\xF9 le succulent poisson frit, le homard et les m\xE9langes d\u2019assaisonnements locaux, vous offrent une nouvelle aventure gustative chaque jour de la semaine.'
                    )
                  )
                )
              );
            }
          ),
          _react2.default.createElement(
            _reactMotion.Motion,
            { style: { p: (0, _reactMotion.spring)(this.state.geographieToggle ? 0 : -1000, { stiffness: 100, damping: 26 }), o: (0, _reactMotion.spring)(this.state.geographieToggle ? 1 : 0, { stiffness: 30, damping: 26 }) } },
            function (_ref2) {
              var p = _ref2.p,
                  o = _ref2.o;
              return _react2.default.createElement(
                'div',
                { className: 'row geographie-container', id: 'geographie' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 sol-xs-12', style: { transform: 'translateX(' + -p + 'px)' } },
                  _react2.default.createElement(
                    'h1',
                    { style: { opacity: '' + o } },
                    ' G\xE9ographie '
                  ),
                  _react2.default.createElement(
                    'p',
                    { style: { opacity: '' + o } },
                    ' Saint-Martin est une ile des Antilles fran\xE7aises situ\xE9e \xE0 l\'est de Puerto Rico et au sud d\'Anguilla. Elle est s\xE9par\xE9e en deux de nord en sud: Saint-Martin, territoire fran\xE7ais au nord et Sint-Marteen, territoire n\xE9erlandais au sud. Les capitales des deux territoires sont, respectivement, Marigot et Phillipsburg. Les deux cot\xE9s de la fronti\xE8re sont parsem\xE9s de collines et de vall\xE9es, la plus grande colline \xE9tant Pic Paradis (424 m). Le littoral est bord\xE9 de nombreuses baies et recouvert d\'une trentaine de plages de sable blanc et de quelques plages de galets. Le climat de Saint-Martin est tr\xE8s agr\xE9able: la temp\xE9rature ne varie que tr\xE8s peu durant l\'ann\xE9e, les temp\xE9ratures les plus hautes \xE9tant dans les 32-34 &8451; celcius et les plus basses dans les 20-22 &8451;. '
                  )
                )
              );
            }
          ),
          _react2.default.createElement(
            _reactMotion.Motion,
            { style: { o: (0, _reactMotion.spring)(this.state.mapToggle ? 1 : 0, { stiffness: 60, damping: 33 }) } },
            function (_ref3) {
              var o = _ref3.o;
              return _react2.default.createElement(
                'div',
                { className: 'map row', id: 'map' },
                _react2.default.createElement('img', { src: './public/img/carte.svg', style: { opacity: '' + o } })
              );
            }
          ),
          _react2.default.createElement(
            _reactMotion.Motion,
            { style: { p: (0, _reactMotion.spring)(this.state.histoireToggle ? 0 : -1000, { stiffness: 100, damping: 26 }), o: (0, _reactMotion.spring)(this.state.histoireToggle ? 1 : 0, { stiffness: 30, damping: 26 }) } },
            function (_ref4) {
              var p = _ref4.p,
                  o = _ref4.o;
              return _react2.default.createElement(
                'div',
                { className: 'row histoire-container', id: 'histoire' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6 col-sm-6 sol-xs-12', style: { transform: 'translateX(' + p + 'px)' } },
                  _react2.default.createElement(
                    'h1',
                    { style: { opacity: '' + o } },
                    ' Histoire '
                  ),
                  _react2.default.createElement(
                    'p',
                    { style: { opacity: '' + o } },
                    ' Avant la d\xE9couverte de l\'Am\xE9rique, l\'ile de Saint-Martin \xE9tait peupl\xE9e d\'indig\xE8nes am\xE9rindiens. Le contact avec le monde occidental fut fait lorsque Christophe Colomb, pendant son deuxi\xE8me voyage, accosta l\'ile. C\'\xE9tait le jour de la f\xEAte du Saint Martin de Tours, d\'ou le nom de l\'ile. Entre le XVe et le XVIe si\xE8cle, l\'ile \xE9tait peupl\xE9e de quelques fran\xE7ais qui cultivaient du tabac et d\'une petite garnison hollandaise a l\'emplacement actuel de Phillipsburg. Au d\xE9but XVIIe si\xE8cle, les colonies de l\'ile de Saint-Martin \xE9taient aux prises avec de nombreuses attaques de la part des espagnols. Victorieux, ils s\'y installent et y restent 12 ans avant d\'\xEAtre attaqu\xE9s \xE0 leur tour et de quitter l\'ile. C\'est  a ce moment la que les n\xE9erlandais et les fran\xE7ais d\xE9cident de scinder l\'ile en deux et de fixer des r\xE8gles de coop\xE9rations. Avant le XXe si\xE8cle, l\'\xE9conomie de Saint-Martin, comme toutes les iles des cara\xEFbes, \xE9tait principalement constitu\xE9e de vente de tabac, de canne a sucre et de coton; maintenant, l\'ile tourne principalement gr\xE2ce au tourisme. '
                  )
                )
              );
            }
          ),
          _react2.default.createElement(
            _reactMotion.Motion,
            { style: { p: (0, _reactMotion.spring)(this.state.activitesToggle ? 0 : -1000, { stiffness: 100, damping: 26 }), o: (0, _reactMotion.spring)(this.state.activitesToggle ? 1 : 0, { stiffness: 30, damping: 26 }) } },
            function (_ref5) {
              var p = _ref5.p,
                  o = _ref5.o;
              return _react2.default.createElement(
                'div',
                { className: 'row activites-container', id: 'activites' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 sol-xs-12', style: { transform: 'translateX(' + -p + 'px)' } },
                  _react2.default.createElement(
                    'h1',
                    { style: { opacity: '' + o } },
                    ' Activit\xE9s '
                  ),
                  _react2.default.createElement(
                    'p',
                    { style: { opacity: '' + o } },
                    ' Faites une promenade dans la nature de Saint-Martin en explorant ses collines en accro-branche ou \xE0 cheval. Plongez dans notre monde sous-marin de corail et de grottes color\xE9es par les poissons tropicaux ou naviguez sur un catamaran vers une des nombreuses anses cach\xE9es, parfaites pour un rendez-vous intime. Savourez des plats gastronomiques ou la d\xE9licieuse cuisine locale pr\xE9par\xE9e sur les barbecues des lolos de Marigot et Grand Case \u2013 o\xF9 le succulent poisson frit, le homard et les m\xE9langes d\u2019assaisonnements locaux, vous offrent une nouvelle aventure gustative chaque jour de la semaine. Avec les choix vari\xE9s de la vie nocturne \u2013 d\xEEners \xAB en t\xEAte-\xE0-t\xEAte \xBB ou danses sur le rythme rapide du calypso \u2013 vous trouverez l\u2019ambiance parfaite pour terminer votre soir\xE9e. '
                  )
                )
              );
            }
          ),
          _react2.default.createElement(
            'button',
            { className: 'download' },
            _react2.default.createElement(
              'p',
              null,
              ' ',
              _react2.default.createElement('i', { className: 'fa fa-download' }),
              ' Telechargez le document complet pour encore plus d\'information sur St-Martin '
            )
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
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ })
/******/ ]);
//# sourceMappingURL=server.bundle.js.map