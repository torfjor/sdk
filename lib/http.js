"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;

var _qs = _interopRequireDefault(require("qs"));

var _cleanDeep = _interopRequireDefault(require("clean-deep"));

var _fetch = _interopRequireDefault(require("./fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function responseHandler(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
}

function get(url, params, headers, config) {
  return (0, _fetch.default)("".concat(url, "?").concat(_qs.default.stringify(params)), _objectSpread({
    method: 'get'
  }, config, {
    headers: _objectSpread({}, DEFAULT_HEADERS, {}, headers)
  })).then(responseHandler).then(function (res) {
    return res.json();
  }).then(function (data) {
    return (0, _cleanDeep.default)(data, {
      emptyArrays: false
    });
  });
}

function post(url, params, headers, config) {
  return (0, _fetch.default)(url, _objectSpread({
    method: 'post'
  }, config, {
    headers: _objectSpread({}, DEFAULT_HEADERS, {}, headers),
    body: JSON.stringify(params)
  })).then(responseHandler).then(function (res) {
    return res.json();
  }).then(function (data) {
    return (0, _cleanDeep.default)(data, {
      emptyArrays: false
    });
  });
}