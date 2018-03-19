var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');
var WebAPIUtils = require('../utils/WebAPIUtils');

var BookGetActions = {

  search: function(keyword) {
    Dispatcher.handleViewAction({
      type: ActionTypes.SEARCH_BOOKS
    });
    WebAPIUtils.getAll(keyword);
  },

  get: function(bookId) {
    Dispatcher.handleViewAction({
      type: ActionTypes.VIEW_BOOK
    });
    WebAPIUtils.get(bookId);
  },

  like: function(book) {
    Dispatcher.handleServerAction({
      type: ActionTypes.LIKE_BOOK,
      data: book
    });
  }

};

module.exports = BookGetActions;