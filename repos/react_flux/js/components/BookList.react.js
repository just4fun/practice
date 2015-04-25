var React = require('react');
var Router = require('react-router');
var BookStore = require('../stores/BookStore');
var BookItem = require('./BookItem.react');
var Loading = require('./Loading.react');

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
    if (this.state.isLoading) {
      return <Loading />;
    }
    var bookList = this.state.books.map(function(book) {
      return (
        <BookItem book={book}>
        </BookItem>
      );
    });
    return (
      <div>{bookList}</div>
    )
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = BookList;