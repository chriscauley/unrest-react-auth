"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRestHook = _interopRequireDefault(require("@unrest/react-rest-hook"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// this hook allow other state changes when auth is completed
var prepData = function prepData(data) {
  return _config["default"].prepData(data);
};

var _default = (0, _reactRestHook["default"])('/api/auth/user.json', {
  propName: 'auth',
  prepData: prepData
});

exports["default"] = _default;