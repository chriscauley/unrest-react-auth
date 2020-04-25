"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRestHook = _interopRequireDefault(require("@unrest/react-rest-hook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _reactRestHook["default"])('/api/user.json', {
  propName: 'auth'
});

exports["default"] = _default;