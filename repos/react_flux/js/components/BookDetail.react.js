var React = require('react');
var BookStore = require('../stores/BookStore');
var BookGetActions = require('../actions/BookGetActions');

function getStateFromStores() {
  return {
    book: BookStore.get()
  };
}

var BookDetail = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    BookStore.addChangeListener(this._onChange);
    BookGetActions.get(this.context.router.getCurrentParams().bookId);
  },

  componentWillUnmount: function() {
    BookStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>{this.state.book.summary}</div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = BookDetail;