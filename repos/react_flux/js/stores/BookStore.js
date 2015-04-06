var Dispatcher = require('../core/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var PayloadSources = require('../constants/PayloadSources');

var ActionTypes = require('../constants/ActionTypes');
var CHANGE_EVENT = 'change';

var _books = [];
var _isLoading = false;

var BookStore = assign({}, EventEmitter.prototype, {

  init: function(books) {
    _books = books;
  },

  isLoading: function() {
    return _isLoading;
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

  switch(action.type) {

    case ActionTypes.SEARCH_BOOK:
      if (payload.source === PayloadSources.VIEW_ACTION) {
        _isLoading = true;
      }
      else {
        _isLoading = false;
        BookStore.init(action.data);
      }
      BookStore.emitChange();
      break;

    default:

  }

});

module.exports = BookStore;
