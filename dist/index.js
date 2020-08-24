"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("./api"));

var _required = _interopRequireDefault(require("./required"));

var _AuthNav = _interopRequireDefault(require("./AuthNav"));

var _Routes = _interopRequireDefault(require("./Routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var use = _api["default"].use,
    markStale = _api["default"].markStale;
var _default = {
  required: _required["default"],
  AuthNav: _AuthNav["default"],
  Routes: _Routes["default"],
  use: use,
  markStale: markStale,
  connect: function connect() {
    throw "auth.connect pattern was removed in version 0.1";
  }
};
exports["default"] = _default;