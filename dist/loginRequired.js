"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _config = _interopRequireDefault(require("./config"));

var _withAuth = _interopRequireDefault(require("./withAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(Component) {
  return (0, _reactRouterDom.withRouter)((0, _withAuth["default"])(function (props) {
    if (props.auth.user) {
      return /*#__PURE__*/_react["default"].createElement(Component, props);
    }

    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
      to: _config["default"].makeUrl('login', props.location.pathname)
    });
  }));
};

exports["default"] = _default;