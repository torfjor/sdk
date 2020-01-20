"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBikeRentalStationByBoxQuery = exports.getBikeRentalStationQuery = void 0;

var _jsonToGraphqlQuery = require("json-to-graphql-query");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bikeRentalStationFields = {
  id: true,
  name: true,
  bikesAvailable: true,
  spacesAvailable: true,
  longitude: true,
  latitude: true
};
var getBikeRentalStationQuery = {
  query: {
    __variables: {
      id: 'String!'
    },
    bikeRentalStation: _objectSpread({
      __args: {
        id: new _jsonToGraphqlQuery.VariableType('id')
      }
    }, bikeRentalStationFields)
  }
};
exports.getBikeRentalStationQuery = getBikeRentalStationQuery;
var getBikeRentalStationByBoxQuery = {
  query: {
    __variables: {
      minLat: 'Float',
      minLng: 'Float',
      maxLat: 'Float',
      maxLng: 'Float'
    },
    bikeRentalStationsByBbox: _objectSpread({
      __args: {
        minimumLatitude: new _jsonToGraphqlQuery.VariableType('minLat'),
        minimumLongitude: new _jsonToGraphqlQuery.VariableType('minLng'),
        maximumLatitude: new _jsonToGraphqlQuery.VariableType('maxLat'),
        maximumLongitude: new _jsonToGraphqlQuery.VariableType('maxLng')
      }
    }, bikeRentalStationFields)
  }
};
exports.getBikeRentalStationByBoxQuery = getBikeRentalStationByBoxQuery;