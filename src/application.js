"use strict";

var React      = require('react');
var _          = require('lodash');
var Router     = require('./components/Router');

global.React = React;

Router.run(function(Root) {
  React.render(<Root/>, document.body);
});