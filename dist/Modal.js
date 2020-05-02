"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupModal = exports.LoginModal = exports["default"] = exports.RouterModal = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _css = _interopRequireDefault(require("@unrest/css"));

var _reactJsonschemaForm = _interopRequireWildcard(require("@unrest/react-jsonschema-form"));

var _config = _interopRequireDefault(require("./config"));

var _connect = _interopRequireDefault(require("./connect"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var RouterModal = (0, _reactRouterDom.withRouter)(function (props) {
  var back = function back() {
    return props.history.goBack();
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].modal.outer()
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: back,
    className: _css["default"].modal.mask()
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _css["default"].modal.content()
  }, props.children));
});
exports.RouterModal = RouterModal;

var BaseAuthModal = /*#__PURE__*/function (_React$Component) {
  _inherits(BaseAuthModal, _React$Component);

  var _super = _createSuper(BaseAuthModal);

  function BaseAuthModal() {
    var _this;

    _classCallCheck(this, BaseAuthModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      error: ''
    });

    _defineProperty(_assertThisInitialized(_this), "getOptions", function () {
      return _config["default"][_this.props.slug];
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (formData) {
      return (0, _reactJsonschemaForm.post)(_this.getOptions().post_url, formData)["catch"](function (error) {
        return _this.setState({
          error: error
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSuccess", function () {
      _this.props.auth.refetch();

      _this.props.history.replace(_this.getNext() || _config["default"].login_redirect);
    });

    _defineProperty(_assertThisInitialized(_this), "getNext", function () {
      return decodeURIComponent(_this.props.match.params.next || '');
    });

    return _this;
  }

  _createClass(BaseAuthModal, [{
    key: "render",
    value: function render() {
      if (this.props.auth.user) {
        return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
          to: this.getNext()
        });
      }

      var is_login = this.props.slug === 'login';
      var _link = {
        to: _config["default"].makeUrl(is_login ? 'signup' : 'login', this.getNext()),
        children: is_login ? 'Signup' : 'Login'
      };

      var _this$getOptions = this.getOptions(),
          schema = _this$getOptions.schema;

      return /*#__PURE__*/_react["default"].createElement(RouterModal, null, /*#__PURE__*/_react["default"].createElement(_reactJsonschemaForm["default"], {
        schema: schema,
        onSubmit: this.onSubmit,
        onSuccess: this.onSuccess
      }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, _extends({
        replace: true
      }, _link, {
        className: _css["default"].link('mr-2')
      })), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        replace: true,
        to: "/reset-password/",
        className: _css["default"].link()
      }, "Forgot Password?"));
    }
  }]);

  return BaseAuthModal;
}(_react["default"].Component);

var Modal = (0, _reactRouterDom.withRouter)((0, _connect["default"])(BaseAuthModal));
var _default = Modal;
exports["default"] = _default;

var LoginModal = function LoginModal() {
  return /*#__PURE__*/_react["default"].createElement(Modal, {
    slug: "login"
  });
};

exports.LoginModal = LoginModal;

var SignupModal = function SignupModal() {
  return /*#__PURE__*/_react["default"].createElement(Modal, {
    slug: "signup"
  });
};

exports.SignupModal = SignupModal;