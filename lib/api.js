"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.journeyPlannerQuery = journeyPlannerQuery;

var _jsonToGraphqlQuery = require("json-to-graphql-query");

var _http = require("./http");

var _config = require("./config");

var pretty = process.env.NODE_ENV !== 'production';

function errorHandler(response) {
  if (response.errors && response.errors[0]) {
    throw new Error("GraphQL: ".concat(response.errors[0].message));
  }

  return response;
}

function journeyPlannerQuery(queryObj, variables, ignoreFields, config) {
  var _getJourneyPlannerHos = (0, _config.getJourneyPlannerHost)(this && this.config || config),
      host = _getJourneyPlannerHos.host,
      headers = _getJourneyPlannerHos.headers;

  var url = "".concat(host, "/graphql");
  var query = typeof queryObj === 'string' ? queryObj : (0, _jsonToGraphqlQuery.jsonToGraphQLQuery)(queryObj, {
    pretty: pretty,
    ignoreFields: ignoreFields
  });
  return (0, _http.post)(url, {
    query: query,
    variables: variables
  }, headers).then(errorHandler);
}