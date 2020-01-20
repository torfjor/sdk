"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeatures = getFeatures;
exports.getLocationsDEPRECATED = getLocationsDEPRECATED;

var _http = require("../http");

var _config = require("../config");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getPositionParamsFromGeolocationResult(coords) {
  if (!coords) {
    return {};
  }

  var latitude = coords.latitude,
      longitude = coords.longitude;
  return {
    'focus.point.lat': latitude,
    'focus.point.lon': longitude
  };
}

function getFeatures(text, coords) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _getGeocoderHost = (0, _config.getGeocoderHost)(this.config),
      host = _getGeocoderHost.host,
      headers = _getGeocoderHost.headers;

  var searchParams = _objectSpread({}, getPositionParamsFromGeolocationResult(coords), {
    lang: 'no',
    text: text
  }, params);

  var url = "".concat(host, "/autocomplete");
  return (0, _http.get)(url, searchParams, headers).then(function (data) {
    return data.features || [];
  });
} // preserve backwards compatability


function getLocationsDEPRECATED(text) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (process.env !== 'production') {
    // eslint-disable-next-line
    console.info('service.getLocations is deprecated and will be removed in a future version. Use service.getFeatures instead');
  }

  return getFeatures.call(this, text, undefined, params);
}