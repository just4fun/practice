var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');
var WebAPIUtils = require('../utils/WebAPIUtils');

var BookGetActions = {

  search: function(keyword) {
    Dispatcher.handleViewAction({
      type: ActionTypes.SEARCH_BOOK
    });
    WebAPIUtils.getAll(keyword);
  },

  get: function(bookId) {
    Dispatcher.handleViewAction({
      type: ActionTypes.SEARCH_BOOK
    });
    WebAPIUtils.get(keyword);
  }

};

module.exports = BookGetActions;