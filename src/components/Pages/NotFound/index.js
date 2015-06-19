"use strict";

var React     = require('react');

module.exports = React.createClass({
  displayName: 'Not',

  render: function() {
    return (
        <div className="Forbidden">
          <p className="Forbidden__message">Forbidden</p>
        </div>
    );
  }
});
