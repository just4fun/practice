var React = require('react');
var Router = require('react-router');
var BookStore = require('../stores/BookStore');
var BookItem = require('./BookItem.react');

function getStateFromStores() {
  return {
    books: BookStore.getAll(),
    isLoading: BookStore.isLoading()
  };
}

var BookList = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    BookStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BookStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var bookItems = this.state.books.map(function(book) {
      return (
        <BookItem book={book}>
        </BookItem>
      );
    });

    return (
      <div>{bookItems}</div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = BookList;