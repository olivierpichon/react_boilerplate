"use strict";

var Forbidden = require('../');

describe('Forbidden', function() {
  it('renders the correct string', function() {
    var element = renderIntoDocument(<Forbidden/>);

    assert.equal(
        findByClass(element, 'Forbidden__message').getDOMNode().textContent,
        'Forbidden'
    );
  });
});