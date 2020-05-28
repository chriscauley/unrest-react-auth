"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var config = {
  login_redirect: '/',
  makeNextUrl: function makeNextUrl(target) {
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return config[target].next_url.replace(':next', encodeURIComponent(next));
  },
  login: {
    url: '/login/',
    next_url: '/login/:next'
  },
  signup: {
    url: '/signup/',
    next_url: '/signup/:next'
  },
  logout: {
    url: '/logout/',
    post_url: '/api/auth/logout/'
  },
  prepData: function prepData(data) {
    return data;
  },
  social: []
};
var _default = config;
exports["default"] = _default;