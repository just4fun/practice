var Dispatcher = require('../core/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var PayloadSources = require('../constants/PayloadSources');
var Immutable = require('immutable');

var ActionTypes = require('../constants/ActionTypes');
var CHANGE_EVENT = 'change';

var _state = null;
var _book = {};
var _books = null;
var _isLoading = false;

var BookStore = assign({}, EventEmitter.prototype, {

  isLoading: function() {
    return _isLoading;
  },

  get: function() {
    return _book;
  },

  getAll: function() {
    return _books;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

BookStore.dispatchToken = Dispatcher.register(function(payload) {

  var action = payload.action;

  if (payload.source === PayloadSources.VIEW_ACTION) {
    _isLoading = true;
  }
  else {
    _isLoading = false;

    switch(action.type) {
      case ActionTypes.SEARCH_BOOKS:
        _books = Immutable.fromJS(action.data);
        break;
      case ActionTypes.VIEW_BOOK:
        _book = action.data;
        break;
      case ActionTypes.LIKE_BOOK:
        var likeBookIndex = action.data.index;
        var likeBook = action.data.book.toJS();
        var books = BookStore.getAll();
        // update the state
        _books = books.updateIn(['books'], function(list) {
          return list.update(likeBookIndex, null, function() {
            likeBook.isLike = !likeBook.isLike;
            return Immutable.fromJS(likeBook);
          })
        });
        break;
    }
  }
  BookStore.emitChange();
});

BookStore.defaultState = {
  books: []
};

_state = assign({}, BookStore.defaultState);
// turn data to immutable
_books = Immutable.fromJS(_state);

module.exports = BookStore;
