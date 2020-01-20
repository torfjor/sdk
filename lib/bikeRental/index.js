"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBikeRentalStation = getBikeRentalStation;
exports.getBikeRentalStations = getBikeRentalStations;

var _api = require("../api");

var _query = require("./query");

var _utils = require("../utils");

function getBikeRentalStation(stationId) {
  var variables = {
    id: stationId
  };
  return (0, _api.journeyPlannerQuery)(_query.getBikeRentalStationQuery, variables, undefined, this.config).then(function (response) {
    return response.data.bikeRentalStation;
  });
}

function getBikeRentalStations(coordinates) {
  var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var variables = (0, _utils.convertPositionToBbox)(coordinates, distance);
  return (0, _api.journeyPlannerQuery)(_query.getBikeRentalStationByBoxQuery, variables, undefined, this.config).then(function () {
    var _response$data;

    var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.bikeRentalStationsByBbox) || [];
  });
}