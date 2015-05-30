var Dispatcher = require('../core/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var PayloadSources = require('../constants/PayloadSources');

var ActionTypes = require('../constants/ActionTypes');
var CHANGE_EVENT = 'change';

var _book = {};
var _books = [];
var _isLoading = false;

var BookStore = assign({}, EventEmitter.prototype, {

  initBookList: function(books) {
    _books = books;
  },

  initBook: function(book) {
    _book = book;
  },

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
    var book = action.data;
    switch(action.type) {

      case ActionTypes.SEARCH_BOOKS:
        BookStore.initBookList(book);
        break;

      case ActionTypes.VIEW_BOOK:
        BookStore.initBook(book);
        break;

      case ActionTypes.LIKE_BOOK:
        book.isLike = !book.isLike;
        break;

      default:

    }
  }
  BookStore.emitChange();
});

module.exports = BookStore;
