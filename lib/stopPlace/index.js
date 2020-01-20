"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStopPlace = getStopPlace;
exports.getStopPlacesByPosition = getStopPlacesByPosition;

var _api = require("../api");

var _query = require("./query");

var _utils = require("../utils");

function getStopPlace(id) {
  var variables = {
    id: id
  };
  return (0, _api.journeyPlannerQuery)(_query.getStopPlaceQuery, variables, undefined, this.config).then(function () {
    var _response$data;

    var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!(response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.stopPlace)) {
      throw new Error("Could not find stop place with ID \"".concat(id, "\""));
    }

    return response.data.stopPlace;
  });
}

function getStopPlacesByPosition(coordinates) {
  var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var variables = (0, _utils.convertPositionToBbox)(coordinates, distance);
  return (0, _api.journeyPlannerQuery)(_query.getStopPlacesByBboxQuery, variables, undefined, this.config).then(function () {
    var _response$data2;

    var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!(response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.stopPlacesByBbox)) {
      return [];
    }

    return response.data.stopPlacesByBbox;
  });
}