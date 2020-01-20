"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStopPlacesByBboxQuery = exports.getStopPlaceQuery = void 0;

var _jsonToGraphqlQuery = require("json-to-graphql-query");

var _queryHelper = require("../trip/queryHelper");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var quayFields = {
  id: true,
  publicCode: true,
  description: true
};
var stopPlaceFields = {
  id: true,
  name: true,
  description: true,
  latitude: true,
  longitude: true,
  wheelchairBoarding: true,
  weighting: true,
  transportMode: true,
  transportSubmode: true,
  quays: _objectSpread({}, quayFields, {
    situations: _queryHelper.situationFields
  })
};
var getStopPlaceQuery = {
  query: {
    __variables: {
      id: 'String!'
    },
    stopPlace: _objectSpread({
      __args: {
        id: new _jsonToGraphqlQuery.VariableType('id')
      }
    }, stopPlaceFields)
  }
};
exports.getStopPlaceQuery = getStopPlaceQuery;
var getStopPlacesByBboxQuery = {
  query: {
    __variables: {
      minLat: 'Float',
      minLng: 'Float',
      maxLng: 'Float',
      maxLat: 'Float'
    },
    stopPlacesByBbox: _objectSpread({
      __args: {
        minimumLatitude: new _jsonToGraphqlQuery.VariableType('minLat'),
        minimumLongitude: new _jsonToGraphqlQuery.VariableType('minLng'),
        maximumLatitude: new _jsonToGraphqlQuery.VariableType('maxLat'),
        maximumLongitude: new _jsonToGraphqlQuery.VariableType('maxLng')
      }
    }, stopPlaceFields)
  }
};
exports.getStopPlacesByBboxQuery = getStopPlacesByBboxQuery;