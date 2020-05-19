"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRestHook = _interopRequireDefault(require("@unrest/react-rest-hook"));

var _reactRouterDom = require("react-router-dom");

var _css = _interopRequireDefault(require("@unrest/css"));

var _reactJsonschemaForm = _interopRequireDefault(require("@unrest/react-jsonschema-form"));

var _core = require("@unrest/core");

var _Modal = require("./Modal");

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

var url = '/api/schema/PasswordResetForm/';
var withSchema = (0, _reactRestHook["default"])(url);

var ResetPassword = /*#__PURE__*/function (_React$Component) {
  _inherits(ResetPassword, _React$Component);

  var _super = _createSuper(ResetPassword);

  function ResetPassword() {
    var _this;

    _classCallCheck(this, ResetPassword);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (formData) {
      return (0, _core.post)(url, formData);
    });

    _defineProperty(_assertThisInitialized(_this), "onSuccess", function () {
      return _this.setState({
        success: true
      });
    });

    return _this;
  }

  _createClass(ResetPassword, [{
    key: "render",
    value: function render() {
      var _this$props$api = this.props.api,
          loading = _this$props$api.loading,
          schema = _this$props$api.schema;

      if (loading) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(_Modal.RouterModal, null, /*#__PURE__*/_react["default"].createElement(_reactJsonschemaForm["default"], {
        schema: schema,
        onSubmit: this.onSubmit,
        onSuccess: this.onSuccess
      }), this.state.success && /*#__PURE__*/_react["default"].createElement("div", {
        className: _css["default"].alert.success()
      }, "Success! Please check your email. If an address exists with this account then a password reset was sent."));
    }
  }]);

  return ResetPassword;
}(_react["default"].Component);

var _default = (0, _reactRouterDom.withRouter)(withSchema(ResetPassword));

exports["default"] = _default;