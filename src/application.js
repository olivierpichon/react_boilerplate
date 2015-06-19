var NotFound = require('./components/Pages/NotFound');
var React    = require('react');

global.React = React;

React.render(
    <NotFound />,
    document.body
);
