var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var BookGetActions = require('../actions/BookGetActions');

var ENTER_KEY_CODE = 13;

var Header = React.createClass({

  getInitialState: function() {
    return {
      keyword: ''
    }
  },

  render: function() {
    return (
      <header className='navbar navbar-fixed-top'>
        <div className='container clearfix'>
          <Link to='books' className='navbar-brand'>
            <img src='../../img/logo.png' width='20px'/>
          </Link>
          <div className='navbar__search'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                value={this.state.keyword}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                placeholder='Search for books...' />
              <span className='input-group-btn'>
                <button
                  type='button'
                  className='btn btn-default'
                  onClick={this._onClick}>
                    <i className='glyphicon glyphicon-search'></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  },

  _onChange: function(event, value) {
    this.setState({keyword: event.target.value});
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      this._onClick();
    }
  },

  _onClick: function() {
    var keyword = this.state.keyword.trim();
    if (keyword) {
      BookGetActions.search(keyword);
    }
  }

});

module.exports = Header;