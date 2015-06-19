var React             = require('react');
var Router            = require('react-router');
var Route             = Router.Route;
var locationManager   = require('../../lib/locationManager');

var App               = require('../App');
var Forbidden         = require('../Pages/Forbidden');

var routes = (
    <Route name="root" path="/" handler={App}>
      <Route name="forbidden" path="forbidden" handler={Forbidden} />
    </Route>
);

module.exports = Router.create({
  routes: routes,
  location: locationManager
});