"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: 'Username'
    },
    password: {
      type: 'string',
      title: 'Password'
    }
  }
};
var config = {
  login_redirect: '/',
  makeUrl: function makeUrl(target) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return config[target].next_url.replace(':next', encodeURIComponent(next));
  },
  login: {
    url: '/login/',
    next_url: '/login/:next',
    post_url: '/api/auth/login/',
    schema: _objectSpread({
      title: 'Login To Continue'
    }, schema)
  },
  signup: {
    url: '/signup/',
    next_url: '/signup/:next',
    post_url: '/api/auth/signup/',
    schema: _objectSpread({
      title: 'Signup To Continue'
    }, schema)
  },
  logout: {
    url: '/logout/',
    post_url: '/api/auth/logout/'
  },
  postAuth: function postAuth() {}
};
var _default = config;
exports["default"] = _default;