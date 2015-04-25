var React = require('react');
var BookStore = require('../stores/BookStore');
var BookGetActions = require('../actions/BookGetActions');
var Loading = require('./Loading.react');

function getStateFromStores() {
  return {
    book: BookStore.get(),
    isLoading: BookStore.isLoading()
  };
}

var BookDetail = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    BookStore.addChangeListener(this._onChange);
    BookGetActions.get(this.props.params.bookId);
  },

  componentWillUnmount: function() {
    BookStore.removeChangeListener(this._onChange);
  },

  render: function() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div>{this.state.book.summary}</div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = BookDetail;