"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = require("./api");

var _trip = require("./trip");

var _stopPlace = require("./stopPlace");

var _bikeRental = require("./bikeRental");

var _geocoder = require("./geocoder");

var _config = require("./config");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EnturService = function EnturService(config) {
  _classCallCheck(this, EnturService);

  _defineProperty(this, "config", void 0);

  _defineProperty(this, "journeyPlannerQuery", _api.journeyPlannerQuery);

  _defineProperty(this, "getFeatures", _geocoder.getFeatures);

  _defineProperty(this, "getLocations", _geocoder.getLocationsDEPRECATED);

  _defineProperty(this, "getTripPatterns", _trip.getTripPatterns);

  _defineProperty(this, "findTrips", _trip.findTrips);

  _defineProperty(this, "getStopPlaceDepartures", _trip.getStopPlaceDepartures);

  _defineProperty(this, "getStopPlace", _stopPlace.getStopPlace);

  _defineProperty(this, "getStopPlacesByPosition", _stopPlace.getStopPlacesByPosition);

  _defineProperty(this, "getBikeRentalStation", _bikeRental.getBikeRentalStation);

  _defineProperty(this, "getBikeRentalStations", _bikeRental.getBikeRentalStations);

  this.config = (0, _config.getServiceConfig)(config);
};

var _default = EnturService;
exports.default = _default;