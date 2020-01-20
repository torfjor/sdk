"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intermediateEstimatedCallFields = exports.estimatedCallFields = exports.lineFields = exports.situationFields = exports.noticeFields = void 0;
var noticeFields = {
  text: true
};
exports.noticeFields = noticeFields;
var situationFields = {
  situationNumber: true,
  summary: {
    value: true
  },
  description: {
    value: true
  },
  detail: {
    value: true
  },
  validityPeriod: {
    startTime: true,
    endTime: true
  },
  reportType: true,
  infoLinks: {
    uri: true,
    label: true
  }
};
exports.situationFields = situationFields;
var lineFields = {
  id: true,
  publicCode: true,
  name: true,
  transportMode: true,
  description: true,
  presentation: {
    colour: true,
    textColour: true
  },
  authority: {
    id: true,
    name: true
  },
  notices: noticeFields,
  situations: situationFields
};
exports.lineFields = lineFields;
var estimatedCallFields = {
  date: true,
  forBoarding: true,
  forAlighting: true
};
exports.estimatedCallFields = estimatedCallFields;
var intermediateEstimatedCallFields = {
  quay: {
    id: true,
    name: true,
    stopPlace: {
      id: true
    }
  },
  expectedArrivalTime: true,
  expectedDepartureTime: true,
  aimedArrivalTime: true,
  aimedDepartureTime: true
};
exports.intermediateEstimatedCallFields = intermediateEstimatedCallFields;