"use strict";
var Router        = require('react-router');
var history       = global.history;

var hasHistory    = history && history.pushState;

module.exports    = hasHistory ? Router.HistoryLocation : Router.HashLocation;
