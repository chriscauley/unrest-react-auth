"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _querystring = _interopRequireDefault(require("querystring"));

var _core = require("@unrest/core");

var _css = _interopRequireDefault(require("@unrest/css"));

var _api = _interopRequireDefault(require("./api"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AuthLink(slug, name, next) {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/".concat(slug, "/?next=").concat(encodeURIComponent(next)),
    className: _css["default"].link('mr-2')
  }, name);
}

var links = {
  Login: function Login(_ref) {
    var next = _ref.next;
    return AuthLink('login', 'Log In', next);
  },
  Signup: function Signup(_ref2) {
    var next = _ref2.next;
    return AuthLink('signup', 'Sign Up', next);
  },
  Reset: function Reset(_ref3) {
    var next = _ref3.next;
    return AuthLink('password-reset', 'Reset Password', next);
  }
};

function Wrapper(_ref4) {
  var title = _ref4.title,
      children = _ref4.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-lg mx-auto my-4"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, title), children);
}

function Login() {
  var _useNext = useNext('You have been logged in.'),
      next = _useNext.next,
      success = _useNext.success;

  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    title: "Please Login to Continue"
  }, /*#__PURE__*/_react["default"].createElement(_core.SchemaForm, {
    form_name: "LoginForm",
    onSuccess: success
  }), /*#__PURE__*/_react["default"].createElement(_config["default"].LoginExtra, {
    next: next
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement(links.Signup, {
    next: next
  }), /*#__PURE__*/_react["default"].createElement(links.Reset, {
    next: next
  })));
}

function SignUp() {
  var _useNext2 = useNext('Your account has been created and you have been logged in.'),
      next = _useNext2.next,
      success = _useNext2.success;

  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    title: "Create an Account"
  }, /*#__PURE__*/_react["default"].createElement(_core.SchemaForm, {
    form_name: "SignUpForm",
    onSuccess: success
  }), /*#__PURE__*/_react["default"].createElement(_config["default"].SignupExtra, {
    next: next
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement(links.Login, {
    next: next
  }), /*#__PURE__*/_react["default"].createElement(links.Reset, {
    next: next
  })));
}

function PasswordReset() {
  var _alert$useAlert = _core.alert.useAlert(),
      _alert$useAlert2 = _slicedToArray(_alert$useAlert, 2),
      _ = _alert$useAlert2[0],
      success = _alert$useAlert2[1].success;

  var _useNext3 = useNext(),
      next = _useNext3.next;

  var onSuccess = function onSuccess() {
    return success('Check your email for further instructions.');
  };

  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    title: "Password Reset"
  }, /*#__PURE__*/_react["default"].createElement(_core.SchemaForm, {
    form_name: "PasswordResetForm",
    onSuccess: onSuccess
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement(links.Login, {
    next: next
  }), /*#__PURE__*/_react["default"].createElement(links.Signup, {
    next: next
  })));
}

function CompletePasswordReset() {
  var _useNext4 = useNext('Your password has been set and you have been logged in.'),
      success = _useNext4.success;

  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    title: "Complete Password Reset"
  }, /*#__PURE__*/_react["default"].createElement(_core.SchemaForm, {
    form_name: "SetPasswordForm",
    onSuccess: success
  }));
}

var useNext = function useNext(message) {
  var next = _querystring["default"].parse((0, _reactRouterDom.useLocation)().search.replace(/^\?/, '')).next || '/';

  var _alert$useAlert3 = _core.alert.useAlert(),
      _alert$useAlert4 = _slicedToArray(_alert$useAlert3, 2),
      _ = _alert$useAlert4[0],
      _success = _alert$useAlert4[1].success;

  var _api$use = _api["default"].use(),
      refetch = _api$use.refetch;

  var history = (0, _reactRouterDom.useHistory)();
  return {
    next: next,
    success: function success() {
      _success(message);

      refetch();
      history.replace(next);
    }
  };
};

var _default = {
  Login: Login,
  SignUp: SignUp,
  PasswordReset: PasswordReset,
  CompletePasswordReset: CompletePasswordReset
};
exports["default"] = _default;