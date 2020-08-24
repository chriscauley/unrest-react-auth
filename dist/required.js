"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Http403 = function Http403(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Error 403: Not Allowed"), message || 'You are not allowed to do this');
};

var _default = function _default(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function AuthRequired(props) {
    var location = (0, _reactRouterDom.useLocation)();

    var auth = _api["default"].use();

    if (auth.user) {
      if (options.roles && !options.roles.includes(auth.user.role)) {
        return /*#__PURE__*/_react["default"].createElement(Http403, {
          message: "Only \"".concat(options.roles.join(' or '), "\" users can access this page.")
        });
      }

      return /*#__PURE__*/_react["default"].createElement(Component, props);
    }

    if (auth.loading) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
      to: "/login/?next=".concat(location.pathname)
    });
  };
};

exports["default"] = _default;