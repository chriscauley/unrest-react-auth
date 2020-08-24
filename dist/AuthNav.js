"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AuthNav;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@unrest/core");

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AuthNav(_ref) {
  var _ref$links = _ref.links,
      links = _ref$links === void 0 ? [] : _ref$links;

  var _api$use = _api["default"].use(),
      loading = _api$use.loading,
      user = _api$use.user,
      refetch = _api$use.refetch;

  if (loading) {
    return null;
  }

  if (user) {
    var logout = function logout() {
      return fetch('/api/logout/').then(function () {
        return refetch();
      });
    };

    links.push({
      children: 'Logout',
      onClick: logout
    });
    return /*#__PURE__*/_react["default"].createElement(_core.Dropdown, {
      links: links,
      title: user.username
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-blue-700 underline text-lg"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/login/",
    className: "mx-4"
  }, "Login"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/signup/"
  }, "Sigup"));
}