"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStopPlaceDeparturesQuery = exports.getTripPatternQuery = void 0;

var _jsonToGraphqlQuery = require("json-to-graphql-query");

var _queryHelper = require("./queryHelper");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var journeyPatternFields = {
  id: true,
  name: true,
  line: _queryHelper.lineFields,
  notices: _queryHelper.noticeFields
};
var serviceJourneyFields = {
  id: true,
  privateCode: true,
  linePublicCode: true,
  wheelchairAccessible: true,
  journeyPattern: journeyPatternFields,
  notices: _queryHelper.noticeFields,
  situations: _queryHelper.situationFields
};
var quayFields = {
  id: true,
  publicCode: true,
  description: true
};
var placeFields = {
  name: true,
  latitude: true,
  longitude: true,
  quay: _objectSpread({}, quayFields, {
    name: true,
    situations: _queryHelper.situationFields
  })
};
var legFields = {
  mode: true,
  aimedStartTime: true,
  aimedEndTime: true,
  expectedStartTime: true,
  expectedEndTime: true,
  realtime: true,
  distance: true,
  duration: true,
  ride: true,
  fromPlace: placeFields,
  toPlace: placeFields,
  serviceJourney: serviceJourneyFields,
  line: _queryHelper.lineFields,
  intermediateQuays: {
    id: true,
    name: true,
    description: true,
    publicCode: true
  },
  intermediateEstimatedCalls: _objectSpread({}, _queryHelper.estimatedCallFields, {}, _queryHelper.intermediateEstimatedCallFields),
  pointsOnLink: {
    points: true,
    length: true
  },
  authority: {
    id: true,
    name: true
  },
  operator: {
    id: true,
    name: true,
    url: true
  }
};
var getTripPatternQuery = {
  query: {
    __variables: {
      numTripPatterns: 'Int!',
      from: 'Location!',
      to: 'Location!',
      dateTime: 'DateTime!',
      arriveBy: 'Boolean!',
      wheelchair: 'Boolean!',
      modes: '[Mode]!'
    },
    trip: {
      __args: {
        numTripPatterns: new _jsonToGraphqlQuery.VariableType('numTripPatterns'),
        from: new _jsonToGraphqlQuery.VariableType('from'),
        to: new _jsonToGraphqlQuery.VariableType('to'),
        dateTime: new _jsonToGraphqlQuery.VariableType('dateTime'),
        arriveBy: new _jsonToGraphqlQuery.VariableType('arriveBy'),
        wheelchair: new _jsonToGraphqlQuery.VariableType('wheelchair'),
        modes: new _jsonToGraphqlQuery.VariableType('modes')
      },
      tripPatterns: {
        startTime: true,
        endTime: true,
        duration: true,
        waitingTime: true,
        walkDistance: true,
        legs: legFields
      }
    }
  }
};
exports.getTripPatternQuery = getTripPatternQuery;
var getStopPlaceDeparturesQuery = {
  query: {
    __variables: {
      ids: '[String]!',
      start: 'DateTime!',
      range: 'Int!',
      departures: 'Int!',
      omitNonBoarding: 'Boolean!'
    },
    stopPlaces: {
      __args: {
        ids: new _jsonToGraphqlQuery.VariableType('ids')
      },
      id: true,
      estimatedCalls: {
        __args: {
          startTime: new _jsonToGraphqlQuery.VariableType('start'),
          timeRange: new _jsonToGraphqlQuery.VariableType('range'),
          numberOfDepartures: new _jsonToGraphqlQuery.VariableType('departures'),
          omitNonBoarding: new _jsonToGraphqlQuery.VariableType('omitNonBoarding')
        },
        aimedDepartureTime: true,
        expectedDepartureTime: true,
        realtime: true,
        forBoarding: true,
        forAlighting: true,
        date: true,
        destinationDisplay: {
          frontText: true
        },
        notices: _queryHelper.noticeFields,
        quay: _objectSpread({}, quayFields, {
          situations: _queryHelper.situationFields
        }),
        serviceJourney: {
          id: true,
          journeyPattern: {
            id: true,
            name: true,
            line: _queryHelper.lineFields,
            notices: _queryHelper.noticeFields
          },
          notices: _queryHelper.noticeFields,
          transportSubmode: true
        }
      }
    }
  }
};
exports.getStopPlaceDeparturesQuery = getStopPlaceDeparturesQuery;