var React = require('react');
var BookStore = require('../stores/BookStore');

function getStateFromStores() {
  return {
    books: BookStore.getAll(),
    isLoading: BookStore.isLoading()
  };
}

var MainSection = React.createClass({

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    BookStore.addChangeListener(this._onChange);
  },

  componentWillMount: function() {
    BookStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div></div>
    );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = MainSection;