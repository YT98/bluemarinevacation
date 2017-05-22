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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

var _reactRouter = __webpack_require__(4);

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
      redirect: '',
      en: false,
      langButton: '',
      footerToggle: false
    }, _this.onClick = _this.onClick.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.handleLang = _this.handleLang.bind(_this);
    _this.handlePath = _this.handlePath.bind(_this);
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
      var screenHeight = document.documentElement.clientHeight;
      var value = screenHeight + footerTop;
      if (footerTop < value) {
        this.setState({ footerToggle: true });
      }
    }
  }, {
    key: 'handleLang',
    value: function handleLang() {
      if (this.state.en === true) {
        this.setState({ langButton: 'Français' });
      } else if (this.state.en === false) {
        this.setState({ langButton: 'English' });
      }
    }
  }, {
    key: 'handlePath',
    value: function handlePath() {
      var path = this.props.path;
      if (path == "/") {
        this.setState({ redirect: "/en", en: false });
      } else if (path == "/saint-martin") {
        this.setState({ redirect: "/en/st-marteen", en: false });
      } else if (path == "/investir") {
        this.setState({ redirect: "/en/invest", en: false });
      } else if (path == "/contact") {
        this.setState({ redirect: "/en/contact", en: false });
      }
      if (path == "/en") {
        this.setState({ redirect: "/", en: true });
      } else if (path == "/en/st-marteen") {
        this.setState({ redirect: "/saint-martin", en: true });
      } else if (path == "/en/invest") {
        this.setState({ redirect: "/investir", en: true });
      } else if (path == "/en/contact") {
        this.setState({ redirect: "/contact", en: true });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.handleLang();
      this.handlePath();
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
                  { to: _this2.state.en ? "/en" : "/", onClick: _this2.onClick },
                  _react2.default.createElement(
                    'h5',
                    null,
                    ' ',
                    _this2.state.en ? "Home" : "Accueil",
                    ' '
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
                  { to: _this2.state.en ? "/en/st-marteen" : "/saint-martin", onClick: _this2.onClick },
                  _react2.default.createElement(
                    'h5',
                    null,
                    ' ',
                    _this2.state.en ? "St-Marteen" : "Saint-Martin",
                    ' '
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
                  { to: _this2.state.en ? "/en/invest" : "/invest", onClick: _this2.onClick },
                  _react2.default.createElement(
                    'h5',
                    null,
                    ' ',
                    _this2.state.en ? "Invest" : "Investir",
                    ' '
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
                  { to: _this2.state.en ? "/en/contact" : "/contact", onClick: _this2.onClick },
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

var _reactRouter = __webpack_require__(4);

var _classnames = __webpack_require__(23);

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
      redirect: '',
      en: false,
      langButton: '',
      isHome: false,
      isStMartin: false,
      isInvestir: false,
      isContact: false
    };
    _this.handleLang = _this.handleLang.bind(_this);
    _this.handlePath = _this.handlePath.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'handleLang',
    value: function handleLang() {
      if (this.state.en === true) {
        this.setState({ langButton: 'Français' });
      } else if (this.state.en === false) {
        this.setState({ langButton: 'English' });
      }
    }
  }, {
    key: 'handlePath',
    value: function handlePath() {
      var path = this.props.path;
      if (path == "/") {
        this.setState({ redirect: "/en", en: false, isHome: true, isStMartin: false, isInvestir: false, isContact: false });
      } else if (path == "/saint-martin") {
        this.setState({ redirect: "/en/st-marteen", en: false, isHome: false, isStMartin: true, isInvestir: false, isContact: false });
      } else if (path == "/investir") {
        this.setState({ redirect: "/en/invest", en: false, isHome: false, isStMartin: false, isInvestir: true, isContact: false });
      } else if (path == "/contact") {
        this.setState({ redirect: "/en/contact", en: false, isHome: false, isStMartin: false, isInvestir: false, isContact: true });
      }
      if (path == "/en") {
        this.setState({ redirect: "/", en: true, isHome: true, isStMartin: false, isInvestir: false, isContact: false });
      } else if (path == "/en/st-marteen") {
        this.setState({ redirect: "/saint-martin", en: true, isHome: false, isStMartin: true, isInvestir: false, isContact: false });
      } else if (path == "/en/invest") {
        this.setState({ redirect: "/investir", en: true, isHome: false, isStMartin: false, isInvestir: true, isContact: false });
      } else if (path == "/en/contact") {
        this.setState({ redirect: "/contact", en: true, isHome: false, isStMartin: false, isInvestir: false, isContact: true });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.handlePath();
      this.handleLang();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleLang();
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
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement('img', { className: 'nav-logo', src: '/public/img/navbar-logo.png' })
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
                    { to: this.state.en ? "/en" : "/" },
                    this.state.en ? "Home" : "Accueil"
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: this.state.isStMartin ? 'active' : '' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: this.state.en ? "/en/st-marteen" : "/saint-martin" },
                    this.state.en ? "St-Marteen" : "Saint-Martin"
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: this.state.isInvestir ? 'active' : '' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: this.state.en ? "/en/invest" : "/investir" },
                    this.state.en ? "Invest" : "Investir"
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: this.state.isContact ? 'active' : '' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: this.state.en ? "/en/contact" : "/contact" },
                    'Contact'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { className: 'lang', href: this.state.redirect },
                    ' ',
                    this.state.langButton,
                    ' '
                  ),
                  ' '
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
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = {};

config.service = 'Gmail';
config.username = 'tarfadesign@gmail.com';
config.password = 'Mangaka2';
config.sendAddr = 'caucheferpaulinepro@gmail.com';

module.exports = config;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var body = _ref.body,
      lang = _ref.lang;

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>Holiday Homes 7 | Investissements immobiliers </title>\n        <meta name=\"description\" content=\"Vente de proprietes a St-Martin, St-Marteen et St-Barth.\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" />\n        <script src=\"https://use.fontawesome.com/0cee7cce00.js\"></script>\n        <link rel=\"icon\" type=\"image/png\" href=\"/public/img/favicon.ico\">\n        <link rel=\"stylesheet\" href=\"/public/style.css\" />\n      </head>\n\n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n\n      <script src=\"/dist/client/client.bundle.js\"></script>\n      <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\" integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\" crossorigin=\"anonymous\"></script>\n      <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n    </html>\n  ";
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _Layout = __webpack_require__(14);

var _Layout2 = _interopRequireDefault(_Layout);

var _Accueil = __webpack_require__(15);

var _Accueil2 = _interopRequireDefault(_Accueil);

var _SaintMartin = __webpack_require__(18);

var _SaintMartin2 = _interopRequireDefault(_SaintMartin);

var _Investir = __webpack_require__(17);

var _Investir2 = _interopRequireDefault(_Investir);

var _Contact = __webpack_require__(16);

var _Contact2 = _interopRequireDefault(_Contact);

var _Home = __webpack_require__(20);

var _Home2 = _interopRequireDefault(_Home);

var _StMarteen = __webpack_require__(22);

var _StMarteen2 = _interopRequireDefault(_StMarteen);

var _Invest = __webpack_require__(21);

var _Invest2 = _interopRequireDefault(_Invest);

var _EnContact = __webpack_require__(19);

var _EnContact2 = _interopRequireDefault(_EnContact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes
exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _Layout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Accueil2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/saint-martin', component: _SaintMartin2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/investir', component: _Investir2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _Contact2.default }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: 'en' },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'st-marteen', component: _StMarteen2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'invest', component: _Invest2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'contact', component: _EnContact2.default })
  )
);

// Component importing

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _nodemailer = __webpack_require__(10);

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _bodyParser = __webpack_require__(8);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(11);

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _reactRouter = __webpack_require__(4);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

var _template = __webpack_require__(6);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Nodemailer
// Express app init


var transporter = _nodemailer2.default.createTransport({
  service: _config2.default.service,
  auth: {
    user: _config2.default.username,
    pass: _config2.default.password
  }
});

// REST API
app.use(_bodyParser2.default.json());

app.post('/sendmail', function (req, res) {

  function sprintf(template, values) {
    return template.replace(/%s/g, function () {
      return values.shift();
    });
  }
  var text = sprintf('Nom: %s \nAddresse mail: %s \nNuméro de téléphone: %s \nService désiré: %s \nInformation additionelle: %s \nLangue: %s', [req.body.name, req.body.mail, req.body.phone, req.body.services, req.body.info, req.body.lang]);

  transporter.sendMail({
    from: _config2.default.username,
    to: _config2.default.sendAddr,
    subject: 'Formulaire holidayhomes7.com',
    text: text
  }, function (error, response) {
    if (error) {
      res.status(500);
    } else {
      res.status(200);
    }
  });
});

// Server-side rendering module imports


//  Server-side rendering
app.use('/dist/client', _express2.default.static(__dirname + '/client'));
app.use('/public', _express2.default.static(__dirname + '/../public'));

app.get('*', function (req, res) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var lang = req.language;
      var html = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
      res.status(200).send((0, _template2.default)({ body: html, lang: lang }));
    } else {
      res.status(400).send('Not found.');
    }
  });
});

//
var PORT = 5000;
app.listen(PORT, console.log('App ready: Listening on port' + PORT));

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

var _Footer = __webpack_require__(1);

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
        this.props.children
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;
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

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactRouter = __webpack_require__(4);

var _reactMotion = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accueil = function (_React$Component) {
  _inherits(Accueil, _React$Component);

  function Accueil(props) {
    _classCallCheck(this, Accueil);

    var _this = _possibleConstructorReturn(this, (Accueil.__proto__ || Object.getPrototypeOf(Accueil)).call(this, props));

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

  _createClass(Accueil, [{
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
                  ' Nous sommes Holiday Homes 7, une entreprise d\u2019investissements immobiliers. Situ\xE9s \xE0 St-Martin, nous sommes en mesure de vous procurer villas et appartements, terrains et locaux de qualit\xE9 dans le d\xE9cor de r\xEAve qu\u2019est cette merveilleuse \xEEle: collines verdoyantes, plages de sable fin, eau turquoise \xE0 perte de vue\u2026 St-Martin ne manque pas de facettes \xE0 d\xE9couvrir !'
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
        ),
        _react2.default.createElement(_Footer2.default, { path: this.props.location.pathname })
      );
    }
  }]);

  return Accueil;
}(_react2.default.Component);

exports.default = Accueil;
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

var _reactMotion = __webpack_require__(2);

var _Navbar = __webpack_require__(3);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

__webpack_require__(24);

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
      name: '',
      nameToggle: false,
      mail: '',
      mailToggle: false,
      phone: '',
      phoneToggle: false,
      select: '',
      info: '',
      introToggle: false,
      formToggle: false,
      infoToggle: false
    };
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.handleChangeName = _this.handleChangeName.bind(_this);
    _this.handleChangeMail = _this.handleChangeMail.bind(_this);
    _this.handleChangePhone = _this.handleChangePhone.bind(_this);
    _this.handleChangeSelect = _this.handleChangeSelect.bind(_this);
    _this.handleChangeInfo = _this.handleChangeInfo.bind(_this);
    _this.handleNameToggle = _this.handleNameToggle.bind(_this);
    _this.handleMailToggle = _this.handleMailToggle.bind(_this);
    _this.handlePhoneToggle = _this.handlePhoneToggle.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Contact, [{
    key: 'handleScroll',
    value: function handleScroll() {
      var formTop = document.getElementById('form').getBoundingClientRect().top;
      if (formTop < 500) {
        this.setState({ formToggle: true });
      };
      var infoTop = document.getElementById('info').getBoundingClientRect().top;
      if (infoTop < 400) {
        this.setState({ infoToggle: true });
      }
    }

    //MAIL LOGIC HERE

  }, {
    key: 'handleChangeName',
    value: function handleChangeName(event) {
      this.setState({ name: event.target.value });
      this.handleNameToggle();
    }
  }, {
    key: 'handleChangeMail',
    value: function handleChangeMail(event) {
      this.setState({ mail: event.target.value });
      this.handleMailToggle();
    }
  }, {
    key: 'handleChangePhone',
    value: function handleChangePhone(event) {
      this.setState({ phone: event.target.value });
      this.handlePhoneToggle();
    }
  }, {
    key: 'handleChangeSelect',
    value: function handleChangeSelect(event) {
      this.setState({ select: event.target.value });
    }
  }, {
    key: 'handleChangeInfo',
    value: function handleChangeInfo(event) {
      this.setState({ info: event.target.value });
    }
  }, {
    key: 'handleNameToggle',
    value: function handleNameToggle() {
      if (this.state.name == '') {
        this.setState({ nameToggle: false });
      } else {
        this.setState({ nameToggle: true });
      }
    }
  }, {
    key: 'handleMailToggle',
    value: function handleMailToggle() {
      if (this.state.mail == '') {
        this.setState({ mailToggle: false });
      } else {
        this.setState({ mailToggle: true });
      }
    }
  }, {
    key: 'handlePhoneToggle',
    value: function handlePhoneToggle() {
      if (this.state.phone == '') {
        this.setState({ phoneToggle: false });
      } else {
        this.setState({ phoneToggle: true });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var phoneReg = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/;
      var mailTest = mailReg.test(this.state.mail);
      var phoneTest = phoneReg.test(this.state.phone);

      if (mailTest == false || phoneTest == false) {
        var phone = phoneTest ? '' : 'Le numéro de téléphone est invalide.';
        var mail = mailTest ? '' : 'L\'addresse mail est invalide.';
        alert("Il nous faut une addresse mail et un numéro de téléphone pour pouvoir vous recontacter!" + "\n" + phone + "\n" + mail);
      } else {
        fetch('https://localhost:5000/sendmail', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.state.name,
            mail: this.state.mail,
            phone: this.state.phone,
            services: this.state.select,
            info: this.state.info,
            lang: 'Français'
          })
        }).catch(function (error) {
          alert('Votre message n\'a pas été envoyé du a un problème technique. Veuillez reéssayer plus tard. Vous pouvez toujours nous contacter à l\'addresse suivante: paulinecaucheferpro@gmail.com');
        }).then(alert('Votre message a été envoyé! Nous vous contacterons dans les plus bref délais.'));
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
                    { className: _this2.state.nameToggle ? 'input input--jiro input--filled' : 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10', value: _this2.state.name, onChange: _this2.handleChangeName }),
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
                    { className: _this2.state.mailToggle ? 'input input--jiro input--filled' : 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10', value: _this2.state.mail, onChange: _this2.handleChangeMail }),
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
                    { className: _this2.state.phoneToggle ? 'input input--jiro input--filled' : 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10', value: _this2.state.phone, onChange: _this2.handleChangePhone }),
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
                    'div',
                    { className: 'multiple-choice' },
                    _react2.default.createElement(
                      'p',
                      null,
                      ' Vous cherchez: '
                    ),
                    _react2.default.createElement(
                      'select',
                      { value: _this2.state.select, onChange: _this2.handleChangeSelect },
                      _react2.default.createElement(
                        'option',
                        { value: 'Rien de particulier, je me renseigne.' },
                        'Rien de particulier, je me renseigne.'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'Une propriete pour passer mes vacances.' },
                        'Une propri\xE9t\xE9 pour passer mes vacances.'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'Une propri\xE9t\xE9 pour y vivre \xE0 l\'ann\xE9e longue.' },
                        'Une propri\xE9t\xE9 pour y vivre \xE0 l\'ann\xE9e longue.'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '\xC0 flipper: acheter et r\xE9nover pour ensuite revendre.' },
                        '\xC0 flipper: acheter et r\xE9nover pour ensuite revendre.'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '\xC0 acheter une propri\xE9t\xE9 dans le but de la mettre en location.' },
                        '\xC0 acheter une propri\xE9t\xE9 dans le but de la mettre en location.'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'text-area' },
                    _react2.default.createElement(
                      'p',
                      null,
                      ' Information supplementaire '
                    ),
                    _react2.default.createElement('textarea', { value: _this2.state.info, onChange: _this2.handleChangeInfo })
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    ' Sachez que, si vous le souhaitez, notre entreprise vous accompagne \xE0 chaque \xE9tape de votre projet: aide \xE0 la revente, gestion de la location de votre propri\xE9t\xE9, aide \xE0 son entretien\u2026 '
                  ),
                  _react2.default.createElement(
                    'button',
                    { onClick: _this2.handleSubmit },
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
        ),
        _react2.default.createElement(_Footer2.default, { path: this.props.location.pathname })
      );
    }
  }]);

  return Contact;
}(_react2.default.Component);

exports.default = Contact;
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

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

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
                '  Villa \xE0 ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Point de Pirouette'
                ),
                ' '
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
              ' Tr\xE8s grande et splendide Villa, situ\xE9e en partie hollandaise de l\'\xEEle, en bordure du lagon. Emplacement EXCEPTIONNEL, \xE0 proximit\xE9 de tous les services: \xE0 10 minutes \xE0 pieds de la plage Mullet Bay et du Golf, \xE0 7 minutes \xE0 pieds de la plage Sunset Beach ainsi que de l\'a\xE9roport, \xE0 5 minutes \xE0 pieds du centre Maho Beach (bars, club, magasins, h\xF4tels, pharmacie, etc.), terrains de tennis, casinos, restaurants, etc. Quartier s\xE9curis\xE9 24h/24, r\xE9put\xE9 pour sa tranquillit\xE9 et son luxe. '
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
                ' Piscine et terrasse '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' Bord de Lagon '
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apt' },
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
                '  Appartement \xE0 ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Grand Case'
                ),
                ' '
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
              ' 380, 000 ',
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
              ' Magnifique appartement moderne et enti\xE8rement meubl\xE9. Muni d\'une cuisine toute \xE9quip\xE9e, d\'une chambre et de sa salle de bain. Dans un des quartiers les plus agr\xE9ables et anim\xE9s de Saint-Martin. En bordure de mer et disposant d\'une grande terrasse couverte, cet appartement saura vous offrir un grand comfort et bien-\xEAtre. '
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' 1 chambre et 1 salle de bain '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' Tout meubl\xE9 et terrasse couverte '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' Bord de mer '
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
            ' ',
            _react2.default.createElement(
              'a',
              { target: '__blank', href: 'https://facebook.com/holidayhomeseven/' },
              ' Consultez plus de propri\xE9t\xE9s \xE0 vendre sur Facebook. '
            ),
            ' ',
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
        ),
        _react2.default.createElement(_Footer2.default, { path: this.props.location.pathname })
      );
    }
  }]);

  return Investir;
}(_react2.default.Component);

exports.default = Investir;
;

/***/ }),
/* 18 */
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

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

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
                      'Journ\xE9es ensoleill\xE9es, douces nuits de velours et des paysages \xE0 couper le souffle ; voil\xE0 quelques-uns des ingr\xE9dients qui cr\xE9ent l\u2019atmosph\xE8re unique de Saint-Martin. D\xE9couvrez les diff\xE9rentes facettes d\u2019une \xEEle qui vous s\xE9duira. '
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
                    ' Saint-Martin est une \xEEle des Antilles fran\xE7aises situ\xE9e \xE0 l\'est de Puerto Rico et au sud d\'Anguilla. Le territoire est divis\xE9 en deux: Saint-Martin, territoire fran\xE7ais au nord et St-Marteen, territoire n\xE9erlandais au sud. Les capitales des deux territoires sont, respectivement, Marigot et Phillipsburg. L\'\xEEle est parsem\xE9e de collines et de vall\xE9es, la plus colline la plus \xE9lev\xE9e \xE9tant Pic Paradis (424 m). Le littoral est bord\xE9 de nombreuses baies et recouvert d\'une trentaine de plages de sable blanc et de quelques plages de galets. Le climat de Saint-Martin est tr\xE8s agr\xE9able: la temp\xE9rature ne varie que tr\xE8s peu durant l\'ann\xE9e: elle se situe entre 32-34 &8451; celcius et 20-22 &8451;. '
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
                _react2.default.createElement('img', { src: '/public/img/carte.svg', alt: 'Carte de Saint-Martin', style: { opacity: '' + o } })
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
                    ' Avant la d\xE9couverte de l\'Am\xE9rique, l\'\xEEle de Saint-Martin \xE9tait peupl\xE9e d\'indig\xE8nes am\xE9rindiens. Le contact avec le monde occidental eut lieu lorsque Christophe Colomb, lors de son deuxi\xE8me voyage, accosta l\'ile. C\'\xE9tait le jour de la f\xEAte du saint Martin de Tours, d\'o\xF9 le nom de l\'\xEEle. Entre le XVe et le XVIe si\xE8cle, l\'\xEEle de Saint-Martin \xE9tait peupl\xE9e de quelques fran\xE7ais qui cultivaient du tabac et d\'une petite garnison hollandaise \xE0 l\'emplacement actuel de Phillipsburg. Au d\xE9but XVIIe si\xE8cle, les colonies de Saint-Martin \xE9taient aux prises avec de nombreuses attaques de la part des espagnols. Victorieux, ils s\'y install\xE8rent et y rest\xE8rent 12 ans avant d\'\xEAtre attaqu\xE9s \xE0 leur tour et de quitter l\'\xEEle. C\'est \xE0 ce moment l\xE0 que les n\xE9erlandais et les fran\xE7ais d\xE9cid\xE8rent de diviser l\'\xEEle en deux et de fixer des r\xE8gles de coop\xE9ration. Avant le XXe si\xE8cle, l\'\xE9conomie de Saint-Martin, comme toutes les \xEEles des cara\xEFbes, \xE9tait principalement d\xE9pendante de la vente de tabac, de cannes \xE0 sucre et de c\xF4ton; maintenant, l\'\xEEle fonctionne principalement gr\xE2ce au tourisme. '
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
                    ' Faites une promenade dans la nature de Saint-Martin en explorant ses collines en accro-branche ou \xE0 cheval. Plongez dans notre monde sous-marin de coraux et de grottes color\xE9es par les poissons tropicaux ou naviguez sur un catamaran vers une des nombreuses anses cach\xE9es. Savourez des plats gastronomiques ou la d\xE9licieuse cuisine locale pr\xE9par\xE9e sur les barbecues des lolos de Marigot et de Grand Case \u2013 o\xF9 le succulent poisson frit, le homard et les m\xE9langes d\u2019assaisonnements locaux, vous offrent une nouvelle aventure gustative chaque jour de la semaine. Avec les choix vari\xE9s de la vie nocturne \u2013 d\xEEners \xAB en t\xEAte-\xE0-t\xEAte \xBB ou danses sur le rythme rapide du calypso \u2013 vous trouverez l\u2019ambiance parfaite pour terminer votre soir\xE9e. '
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
          ),
          _react2.default.createElement(_Footer2.default, { path: this.props.location.pathname })
        )
      );
    }
  }]);

  return SaintMartin;
}(_react2.default.Component);

exports.default = SaintMartin;
;

/***/ }),
/* 19 */
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

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnContact = function (_React$Component) {
  _inherits(EnContact, _React$Component);

  function EnContact(props) {
    _classCallCheck(this, EnContact);

    var _this = _possibleConstructorReturn(this, (EnContact.__proto__ || Object.getPrototypeOf(EnContact)).call(this, props));

    _this.state = {
      name: '',
      nameToggle: false,
      mail: '',
      mailToggle: false,
      phone: '',
      phoneToggle: false,
      select: '',
      info: '',
      introToggle: false,
      formToggle: false,
      infoToggle: false
    };
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.handleChangeName = _this.handleChangeName.bind(_this);
    _this.handleChangeMail = _this.handleChangeMail.bind(_this);
    _this.handleChangePhone = _this.handleChangePhone.bind(_this);
    _this.handleChangeSelect = _this.handleChangeSelect.bind(_this);
    _this.handleChangeInfo = _this.handleChangeInfo.bind(_this);
    _this.handleNameToggle = _this.handleNameToggle.bind(_this);
    _this.handleMailToggle = _this.handleMailToggle.bind(_this);
    _this.handlePhoneToggle = _this.handlePhoneToggle.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(EnContact, [{
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

    //MAIL LOGIC HERE

  }, {
    key: 'handleChangeName',
    value: function handleChangeName(event) {
      this.setState({ name: event.target.value });
      this.handleNameToggle();
    }
  }, {
    key: 'handleChangeMail',
    value: function handleChangeMail(event) {
      this.setState({ mail: event.target.value });
      this.handleMailToggle();
    }
  }, {
    key: 'handleChangePhone',
    value: function handleChangePhone(event) {
      this.setState({ phone: event.target.value });
      this.handlePhoneToggle();
    }
  }, {
    key: 'handleChangeSelect',
    value: function handleChangeSelect(event) {
      this.setState({ select: event.target.value });
    }
  }, {
    key: 'handleChangeInfo',
    value: function handleChangeInfo(event) {
      this.setState({ info: event.target.value });
    }
  }, {
    key: 'handleNameToggle',
    value: function handleNameToggle() {
      if (this.state.name == '') {
        this.setState({ nameToggle: false });
      } else {
        this.setState({ nameToggle: true });
      }
    }
  }, {
    key: 'handleMailToggle',
    value: function handleMailToggle() {
      if (this.state.mail == '') {
        this.setState({ mailToggle: false });
      } else {
        this.setState({ mailToggle: true });
      }
    }
  }, {
    key: 'handlePhoneToggle',
    value: function handlePhoneToggle() {
      if (this.state.phone == '') {
        this.setState({ phoneToggle: false });
      } else {
        this.setState({ phoneToggle: true });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var phoneReg = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/;
      var mailTest = mailReg.test(this.state.mail);
      var phoneTest = phoneReg.test(this.state.phone);

      if (mailTest == false || phoneTest == false) {
        var phone = phoneTest ? '' : 'The phone number you provided is invalid.';
        var mail = mailTest ? '' : 'The e-mail address you provided is invalid.';
        alert("We need your e-mail address and phone number to be able to contact you back!" + "\n" + phone + "\n" + mail);
      } else {
        fetch('https://localhost:5000/sendmail', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.state.name,
            mail: this.state.mail,
            phone: this.state.phone,
            services: this.state.select,
            info: this.state.info,
            lang: 'English'
          })
        }).catch(function (error) {
          alert('Your message was not send due to technical issues on our part. Please try again later. You can always contact us using the following address: paulinecaucheferpro@gmail.com');
        }).then(alert('Your message was sent! We will contact you back as soon as we can!'));
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
                  ' Wherever you live, don\u2019t hesitate to contact us, we offer our services all over the globe. You can fill out the contact form beneath and we will answer any question you might have. You can also contact Pauline, our sales representative, by using the contact information provided under the contact form; she will be happy to answer any and all your questions and requests !'
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
                  ' Form '
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    { className: _this2.state.nameToggle ? 'input input--jiro input--filled' : 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10', value: _this2.state.name, onChange: _this2.handleChangeName }),
                    _react2.default.createElement(
                      'label',
                      { className: 'input__label input__label--jiro', htmlFor: 'input-10' },
                      _react2.default.createElement(
                        'span',
                        { className: 'input__label-content input__label-content--jiro' },
                        ' First and last name: '
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: _this2.state.mailToggle ? 'input input--jiro input--filled' : 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10', value: _this2.state.mail, onChange: _this2.handleChangeMail }),
                    _react2.default.createElement(
                      'label',
                      { className: 'input__label input__label--jiro', htmlFor: 'input-10' },
                      _react2.default.createElement(
                        'span',
                        { className: 'input__label-content input__label-content--jiro' },
                        ' E-Mail address: '
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: _this2.state.phoneToggle ? 'input input--jiro input--filled' : 'input input--jiro' },
                    _react2.default.createElement('input', { className: 'input__field input__field--jiro', type: 'text', id: 'input-10', value: _this2.state.phone, onChange: _this2.handleChangePhone }),
                    _react2.default.createElement(
                      'label',
                      { className: 'input__label input__label--jiro', htmlFor: 'input-10' },
                      _react2.default.createElement(
                        'span',
                        { className: 'input__label-content input__label-content--jiro' },
                        ' Phone number: '
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'multiple-choice' },
                    _react2.default.createElement(
                      'p',
                      null,
                      ' You are looking for '
                    ),
                    _react2.default.createElement(
                      'select',
                      { value: _this2.state.select, onChange: _this2.handleChangeSelect },
                      _react2.default.createElement(
                        'option',
                        { value: 'Nothing in particular, I am simply asking about.' },
                        ' Nothing in particular, I am simply asking about.'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'A place to spend my vacations.' },
                        ' A place to spend my vacations.'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'A place to live in all year round.' },
                        ' A place to live in all year round.'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'A property to flip: buying, renovating and then selling at a higher price.' },
                        ' A property to flip: buying, renovating, and then selling at a higher price'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'A property to rent out.' },
                        ' A property to rent out. '
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'text-area' },
                    _react2.default.createElement(
                      'p',
                      null,
                      ' Additional information : '
                    ),
                    _react2.default.createElement('textarea', { value: _this2.state.info, onChange: _this2.handleChangeInfo })
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    ' If you wish, we can accompany you at every step of your project: whether you have trouble selling, managing rent, upkeep or anything else, we can assist you. '
                  ),
                  _react2.default.createElement(
                    'button',
                    { onClick: _this2.handleSubmit },
                    _react2.default.createElement(
                      'h4',
                      null,
                      ' Send '
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
                  ' Sales representative '
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
        ),
        _react2.default.createElement(_Footer2.default, { path: this.props.location.pathname })
      );
    }
  }]);

  return EnContact;
}(_react2.default.Component);

exports.default = EnContact;
;

/***/ }),
/* 20 */
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

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactRouter = __webpack_require__(4);

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
      if (investirTop < 500) {
        this.setState({ investirToggle: true });
      }
      console.log("client height" + document.documentElement.clientHeight);
      console.log(document.getElementById("home-investir").getBoundingClientRect().bottom);
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
          _react2.default.createElement(_Navbar2.default, { path: this.props.location.pathname, lang: this.props.lang }),
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
                    'Make the most'
                  ),
                  ' ',
                  _react2.default.createElement('br', null),
                  ' out of St-Marteen. '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-8 col-sm-8' },
                _react2.default.createElement(
                  'p',
                  { style: { transform: 'translateX(' + -p + 'px)', opacity: '' + o } },
                  ' We are Holiday Homes 7, a real estate investment firm based in St-Marteen. Working with us means you will have a plethora of villas, apartments, land and commercial premises to choose from in the heavenly scenery that is this wonderful island. Verdant hills, fine sand beaches and crystal-clear turquoise waters\u2026 St-Marteen will not disappoint you!'
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
                    ' Discover '
                  ),
                  ' ',
                  _react2.default.createElement('br', null),
                  ' St-Marteen, ',
                  _react2.default.createElement('br', null),
                  ' the friendly island. '
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
                      { to: '/en/st-marteen', onClick: _this2.onClick },
                      ' Learn more about St-Marteen '
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
                    ' Invest '
                  ),
                  ' ',
                  _react2.default.createElement('br', null),
                  ' in your own ',
                  _react2.default.createElement('br', null),
                  ' little haven.'
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
                      { to: '/en/invest', onClick: _this2.onClick },
                      ' Discover our estates '
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
                { to: '/en/contact', onClick: this.onClick },
                ' Contact-us ! '
              ),
              ' '
            ),
            ' '
          )
        ),
        _react2.default.createElement(_Footer2.default, { path: this.props.location.pathname })
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;
;

/***/ }),
/* 21 */
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

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactMotion = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Invest = function (_React$Component) {
  _inherits(Invest, _React$Component);

  function Invest(props) {
    _classCallCheck(this, Invest);

    var _this = _possibleConstructorReturn(this, (Invest.__proto__ || Object.getPrototypeOf(Invest)).call(this, props));

    _this.state = {
      introToggle: false
    };
    return _this;
  }

  _createClass(Invest, [{
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
                    ' Invest '
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
                    ' Why you should trust us: '
                  ),
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' We have been amongst the best real estate professionals in St-Marteen for over 15 years! '
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' Holiday Homes 7 is an LLC (limited liability company) made up of three associates. '
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' Most of our clients are from Europe as well as North and South America. '
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' We have a plethora of estates at your disposition: whether you are looking to buy a small studio or a large luxury villa. We even have commercial land and estates as well as complete buildings in our portfolio.'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' We deal in both the french and dutch side of the island as well as in St-Barthelemy island (SBH). '
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' Our commissions are reasonable.'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      ' ',
                      _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                      ' We have many connections at our client\u2019s disposition thanks to our seasonal location business. '
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
            ' A few of our propreties: '
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
                '  Villa in the ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Point de Pirouette'
                ),
                ' neighborhood '
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
                ' (commission included) '
              ),
              ' '
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Tr\xE8s grande et splendide Villa, situ\xE9e en partie hollandaise de l\'\xEEle, en bordure du lagon. Emplacement EXCEPTIONNEL, \xE0 proximit\xE9 de tous les services: \xE0 10 minutes \xE0 pieds de la plage Mullet Bay et du Golf, \xE0 7 minutes \xE0 pieds de la plage Sunset Beach ainsi que de l\'a\xE9roport, \xE0 5 minutes \xE0 pieds du centre Maho Beach (bars, club, magasins, h\xF4tels, pharmacie, etc.), terrains de tennis, casinos, restaurants, etc. Quartier s\xE9curis\xE9 24h/24, r\xE9put\xE9 pour sa tranquillit\xE9 et son luxe. '
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
                ' Piscine et terrasse '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' Bord de Lagon '
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'apt' },
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
                '  Apartement in the ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Grand Case'
                ),
                ' neighborhood '
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
              ' 380, 000 ',
              _react2.default.createElement('i', { className: 'fa fa-eur' }),
              ' ',
              _react2.default.createElement(
                'span',
                null,
                ' (commission included) '
              ),
              ' '
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Magnifique appartement moderne et enti\xE8rement meubl\xE9. Muni d\'une cuisine toute \xE9quip\xE9e, d\'une chambre et de sa salle de bain. Dans un des quartiers les plus agr\xE9ables et anim\xE9s de Saint-Martin. En bordure de mer et disposant d\'une grande terrasse couverte, cet appartement saura vous offrir un grand comfort et bien-\xEAtre. '
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' 1 chambre et 1 salle de bain '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' Tout meubl\xE9 et terrasse couverte '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right', 'aria-hidden': 'true' }),
                ' Bord de mer '
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
            ' ',
            _react2.default.createElement(
              'a',
              { target: '__blank', href: 'https://facebook.com/holidayhomeseven/' },
              ' Consult the other propreties we are selling on our Facebook page. '
            ),
            ' ',
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
              { target: '__blank', href: 'https://airbnb.ca/s?host_id=96977877&s_tag=A7DvdiEZ&allow_override%5B%5D=' },
              ' Consult our propreties for rent on Airbnb. '
            ),
            '  '
          ),
          ' '
        ),
        _react2.default.createElement(_Footer2.default, { path: this.props.location.pathname })
      );
    }
  }]);

  return Invest;
}(_react2.default.Component);

exports.default = Invest;
;

/***/ }),
/* 22 */
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

var _Footer = __webpack_require__(1);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactMotion = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StMarteen = function (_React$Component) {
  _inherits(StMarteen, _React$Component);

  function StMarteen(props) {
    _classCallCheck(this, StMarteen);

    var _this = _possibleConstructorReturn(this, (StMarteen.__proto__ || Object.getPrototypeOf(StMarteen)).call(this, props));

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

  _createClass(StMarteen, [{
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
                      ' St-Marteen '
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
                      ' Sunny days, fresh nights and landscapes that seem to be taken straight from a post-card ; these are only a few of the many ingredients that make up St-Marteen\u2019s unique atmosphere. Discover the different elements of an island that will, no doubt, seduce you. '
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
                    ' Geography '
                  ),
                  _react2.default.createElement(
                    'p',
                    { style: { opacity: '' + o } },
                    ' Saint-Martin / St-Marteen is an island in the French West Indies located east of Puerto Rico and south of Anguilla. It is divided into two parts: Saint Martin, French territory situated to the north and Sint-Marteen, Dutch territory situated to the south. The capitals of the two territories are, respectively, Marigot and Phillipsburg. Both sides of the border are dotted with hills and valleys, the largest being Pic Paradis (424 m). The coastline is bordered by numerous bays and covered with thirty white sandy beaches and some pebble beaches. The climate The climate of Saint-Martin is very pleasant: the temperature varies only very little during the year. It is between 34 and 27 degrees Celsius. '
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
                _react2.default.createElement('img', { src: '/public/img/carte.svg', alt: 'St-Marteen Map', style: { opacity: '' + o } })
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
                    ' History '
                  ),
                  _react2.default.createElement(
                    'p',
                    { style: { opacity: '' + o } },
                    ' Before the discovery of America, St. Martin was populated by native Amerindians. It was during the second journey of Christopher Columbus that the island was accosted which allowed them the opportunity to have a first contact with the western world. It was the feast day of the Saint Martin of Tours, hence the name of the island. Between the fifteenth and sixteenth centuries, the island was populated by a few Frenchmen who cultivated tobacco as well as a small Dutch garrison, living at the present site of Phillipsburg. At the beginning of the XVIIth century, Saint-Martin experienced several attacks by the Spaniards. Victorious, they remained there 12 years before being attacked in return and expelled from the territory. It was during this period that the Dutch and the French decided to split the island in two and to establish rules of cooperation. Before the twentieth century, the economy of St. Martin, like all the islands of the Caribbean, depended mainly on the sale of tobacco, sugar cane and cotton. '
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
                    ' Activities '
                  ),
                  _react2.default.createElement(
                    'p',
                    { style: { opacity: '' + o } },
                    ' Take a walk in the nature of Saint-Martin by exploring its hills on horseback. Dive into our underwater world of corals and caves colored by tropical fish or sail on a catamaran towards one of the many hidden coves, perfect for an intimate rendezvous. Savor gourmet dishes or the delicious local cuisine prepared on the Marigot and Grand Case lobster barbecues, where the delicious fried fish, lobster and local seasoning blends, offer you a new taste experience every day of the week. '
                  )
                )
              );
            }
          ),
          _react2.default.createElement(_Footer2.default, { path: this.props.location.pathname })
        )
      );
    }
  }]);

  return StMarteen;
}(_react2.default.Component);

exports.default = StMarteen;
;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ })
/******/ ]);
//# sourceMappingURL=server.bundle.js.map