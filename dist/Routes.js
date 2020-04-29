"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AuthRoutes;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Modal = require("./Modal");

var _ResetPassword = _interopRequireDefault(require("./ResetPassword"));

var _ResetPasswordConfirm = _interopRequireDefault(require("./ResetPasswordConfirm"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AuthRoutes() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: [_config["default"].login.url, _config["default"].login.next_url],
    component: _Modal.LoginModal
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: [_config["default"].signup.url, _config["default"].signup.next_url],
    component: _Modal.SignupModal
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/reset-password/",
    component: _ResetPassword["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/reset-password-confirm/:uidb64/:token/",
    component: _ResetPasswordConfirm["default"]
  }));
}