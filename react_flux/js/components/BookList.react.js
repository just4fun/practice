var React = require('react');
var Router = require('react-router');
var Debug = require('debug');
var BookStore = require('../stores/BookStore');
var BookItem = require('./BookItem.react');
var Loading = require('./Loading.react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var debug = Debug('iBook');

function getStateFromStores() {
  return {
    data: BookStore.getAll(),
    isLoading: BookStore.isLoading()
  };
}

var BookList = React.createClass({

  mixins: [PureRenderMixin],

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

    var books = this.state.data.get('books');
    if (!books || books.size === 0) {
      return <div></div>;
    }

    var bookList = books.map(function(book, index) {
      return (
        <BookItem key={index} book={book} bookIndex={index}>
        </BookItem>
      );
    });

    debug('render <BookList />', books.toJS());
    return (
      <div>{bookList}</div>
    )
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = BookList;