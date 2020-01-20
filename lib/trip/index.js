"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTripPatterns = getTripPatterns;
exports.findTrips = findTrips;
exports.getStopPlaceDepartures = getStopPlaceDepartures;

var _api = require("../api");

var _travelModes = require("../constants/travelModes");

var _query = require("./query");

var _utils = require("../utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DEFAULT_SEARCH_PARAMS = {
  arriveBy: false,
  modes: [_travelModes.FOOT, _travelModes.BUS, _travelModes.TRAM, _travelModes.RAIL, _travelModes.METRO, _travelModes.WATER, _travelModes.AIR],
  transportSubmode: [],
  limit: 5,
  wheelchairAccessible: false
};
var DEFAULT_STOP_PLACE_PARAMS = {
  includeNonBoarding: false,
  departures: 50,
  timeRange: 72000
};

function getTripPatterns(searchParams) {
  var _DEFAULT_SEARCH_PARAM = _objectSpread({}, DEFAULT_SEARCH_PARAMS, {}, searchParams),
      searchDate = _DEFAULT_SEARCH_PARAM.searchDate,
      limit = _DEFAULT_SEARCH_PARAM.limit,
      wheelchairAccessible = _DEFAULT_SEARCH_PARAM.wheelchairAccessible,
      rest = _objectWithoutProperties(_DEFAULT_SEARCH_PARAM, ["searchDate", "limit", "wheelchairAccessible"]);

  var variables = _objectSpread({}, rest, {
    dateTime: searchDate.toISOString(),
    numTripPatterns: limit,
    wheelchair: wheelchairAccessible
  });

  return (0, _api.journeyPlannerQuery)(_query.getTripPatternQuery, variables, undefined, this.config).then(function () {
    var _response$data, _response$data$trip;

    var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$trip = _response$data.trip) === null || _response$data$trip === void 0 ? void 0 : _response$data$trip.tripPatterns) || [];
  });
}

function findTrips(_x, _x2, _x3) {
  return _findTrips.apply(this, arguments);
}

function _findTrips() {
  _findTrips = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(from, to, date) {
    var searchDate, _ref2, _ref3, fromFeatures, toFeatures;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            searchDate = date ? new Date(date) : new Date();

            if ((0, _utils.isValidDate)(searchDate)) {
              _context.next = 3;
              break;
            }

            throw new Error('Entur SDK: Could not parse <date> argument to valid Date');

          case 3:
            _context.next = 5;
            return Promise.all([this.getFeatures(from), this.getFeatures(to)]);

          case 5:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            fromFeatures = _ref3[0];
            toFeatures = _ref3[1];

            if (!(!fromFeatures || !fromFeatures.length)) {
              _context.next = 11;
              break;
            }

            throw new Error("Entur SDK: Could not find any locations matching <from> argument \"".concat(from, "\""));

          case 11:
            if (!(!toFeatures || !toFeatures.length)) {
              _context.next = 13;
              break;
            }

            throw new Error("Entur SDK: Could not find any locations matching <to> argument \"".concat(to, "\""));

          case 13:
            return _context.abrupt("return", this.getTripPatterns({
              searchDate: searchDate,
              from: (0, _utils.convertFeatureToLocation)(fromFeatures[0]),
              to: (0, _utils.convertFeatureToLocation)(toFeatures[0])
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _findTrips.apply(this, arguments);
}

function getStopPlaceDepartures(stopPlaceIds, stopPlaceParams) {
  var _DEFAULT_STOP_PLACE_P = _objectSpread({}, DEFAULT_STOP_PLACE_PARAMS, {}, stopPlaceParams),
      timeRange = _DEFAULT_STOP_PLACE_P.timeRange,
      departures = _DEFAULT_STOP_PLACE_P.departures,
      onForBoarding = _DEFAULT_STOP_PLACE_P.onForBoarding,
      includeNonBoarding = _DEFAULT_STOP_PLACE_P.includeNonBoarding,
      _DEFAULT_STOP_PLACE_P2 = _DEFAULT_STOP_PLACE_P.startTime,
      startTime = _DEFAULT_STOP_PLACE_P2 === void 0 ? new Date().toISOString() : _DEFAULT_STOP_PLACE_P2;

  var omitNonBoarding = !includeNonBoarding;

  if (onForBoarding !== undefined) {
    // eslint-disable-next-line no-console
    console.info('Entur SDK: "onForBoarding" is deprecated, use "includeNonBoarding" instead.');
    omitNonBoarding = !onForBoarding;
  }

  var askingForSingleStopPlace = typeof stopPlaceIds === 'string';
  var variables = {
    ids: askingForSingleStopPlace ? [stopPlaceIds] : stopPlaceIds,
    start: startTime,
    range: timeRange,
    departures: departures,
    omitNonBoarding: omitNonBoarding
  };
  return (0, _api.journeyPlannerQuery)(_query.getStopPlaceDeparturesQuery, variables, undefined, this.config).then(function () {
    var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!response || !response.data) {
      throw new Error("Entur SDK: Could not fetch departures for ids: ".concat(JSON.stringify(stopPlaceIds)));
    }

    var stopPlaces = response.data.stopPlaces || [];

    if (askingForSingleStopPlace) {
      return stopPlaces.length ? stopPlaces[0].estimatedCalls || [] : [];
    }

    return stopPlaces.map(function (_ref) {
      var id = _ref.id,
          estimatedCalls = _ref.estimatedCalls;
      return {
        id: id,
        departures: estimatedCalls
      };
    });
  });
}