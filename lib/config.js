"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceConfig = getServiceConfig;
exports.getJourneyPlannerHost = getJourneyPlannerHost;
exports.getGeocoderHost = getGeocoderHost;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HOST_CONFIG = {
  journeyplanner: 'https://api.entur.io/journey-planner/v2',
  geocoder: 'https://api.entur.io/geocoder/v1'
};
var topLevelConfigKeys = ['clientName', 'hosts'];

function getServiceConfig(config) {
  if (!config || !config.clientName) {
    throw new Error('ERROR: You must pass a "clientName" to EnturService through the config argument. ' + 'See https://www.entur.org/dev/api/header/ for information.\n');
  }

  Object.keys(HOST_CONFIG).forEach(function (hostConfigKey) {
    if (hostConfigKey in config) {
      console.warn("\"".concat(hostConfigKey, "\" is not a top-level config property. Did you mean to put it in the \"hosts\" object?"));
    }
  });
  Object.keys(config).forEach(function (key) {
    if (!topLevelConfigKeys.includes(key)) {
      console.warn("\"".concat(key, "\" is not a recognized config property, and will have no effect."));
    }
  });

  var _config$hosts = config.hosts,
      hosts = _config$hosts === void 0 ? {} : _config$hosts,
      rest = _objectWithoutProperties(config, ["hosts"]);

  return _objectSpread({}, rest, {
    hosts: _objectSpread({}, HOST_CONFIG, {}, hosts)
  });
}

function getJourneyPlannerHost(_ref) {
  var hosts = _ref.hosts,
      clientName = _ref.clientName;
  return {
    host: hosts.journeyplanner,
    headers: {
      'ET-Client-Name': clientName
    }
  };
}

function getGeocoderHost(_ref2) {
  var hosts = _ref2.hosts,
      clientName = _ref2.clientName;
  return {
    host: hosts.geocoder,
    headers: {
      'ET-Client-Name': clientName
    }
  };
}