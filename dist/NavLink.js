"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _css = _interopRequireDefault(require("@unrest/css"));

var _config = _interopRequireDefault(require("./config"));

var _connect = _interopRequireDefault(require("./connect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var badge_css = "bg-red-500 text-white rounded-full ml-2 w-6 h-6 flex items-center justify-center";

var slugify = function slugify(username) {
  return username.includes('@') ? username.split('@')[0] + "@..." : username;
};

var UserDropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(UserDropdown, _React$Component);

  var _super = _createSuper(UserDropdown);

  function UserDropdown() {
    var _this;

    _classCallCheck(this, UserDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      return _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_this), "logout", function () {
      return fetch(_config["default"].logout.post_url).then(function () {
        return _this.props.refetch();
      });
    });

    return _this;
  }

  _createClass(UserDropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          user = _this$props.user,
          badge = _this$props.badge,
          _this$props$links = _this$props.links,
          links = _this$props$links === void 0 ? [] : _this$props$links;

      var funct = function funct(value) {
        return typeof value === 'function' ? value(user) : value;
      };

      var _badge = funct(badge, badge);

      var processed_links = links.map(function (link) {
        link = funct(link);
        link.key = link.to;

        if (link.badge) {
          link.text = /*#__PURE__*/_react["default"].createElement("div", {
            className: "flex"
          }, link.text, /*#__PURE__*/_react["default"].createElement("span", {
            className: badge_css
          }, link.badge));
        }

        return link;
      }).filter(Boolean);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _css["default"].dropdown.outer()
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _css["default"].dropdown.toggle('flex'),
        onClick: this.toggle
      }, slugify(user.username), _badge ? /*#__PURE__*/_react["default"].createElement("span", {
        className: badge_css
      }, _badge) : ""), /*#__PURE__*/_react["default"].createElement("div", {
        className: _css["default"].dropdown.shelf(this.state.open ? 'block' : 'hidden')
      }, processed_links.map(function (link) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: _css["default"].dropdown.item(),
          key: link.key
        }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: link.to
        }, link.text));
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: _css["default"].dropdown.item(),
        onClick: this.logout
      }, "Logout")));
    }
  }]);

  return UserDropdown;
}(_react["default"].Component);

var _default = (0, _connect["default"])(function (props) {
  var _props$auth = props.auth,
      user = _props$auth.user,
      refetch = _props$auth.refetch;

  var next = function next(slug) {
    return _config["default"].makeUrl(slug, window.location.pathname);
  };

  return user ? /*#__PURE__*/_react["default"].createElement(UserDropdown, {
    user: user,
    refetch: refetch,
    links: props.links,
    badge: props.badge
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: next('login'),
    className: _css["default"].button.light()
  }, "Login"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: next('signup'),
    className: _css["default"].button.light()
  }, "Sign Up"));
});

exports["default"] = _default;