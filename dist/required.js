"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _config = _interopRequireDefault(require("./config"));

var _connect = _interopRequireDefault(require("./connect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(Component) {
  var Alternate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _reactRouterDom.Redirect;
  return (0, _reactRouterDom.withRouter)((0, _connect["default"])(function (props) {
    if (props.auth.user) {
      return /*#__PURE__*/_react["default"].createElement(Component, props);
    }

    return /*#__PURE__*/_react["default"].createElement(Alternate, {
      to: _config["default"].makeNextUrl('login', props.location.pathname)
    });
  }));
};

exports["default"] = _default;