"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AuthRoutes;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _screens = _interopRequireDefault(require("./screens"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AuthRoutes() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/login/",
    component: _screens["default"].Login
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/signup/",
    component: _screens["default"].SignUp
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/password-reset/",
    component: _screens["default"].PasswordReset
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/reset/",
    component: _screens["default"].CompletePasswordReset
  }));
}