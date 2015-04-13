var React = require('react');
var BookStore = require('../stores/BookStore');

function getStateFromStores() {
  return {
    book:
  };
}

var BookDetail = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  render: function() {
    return (
      <div>{this.props.book.summary}</div>
    );
  }

});

module.exports = BookDetail;