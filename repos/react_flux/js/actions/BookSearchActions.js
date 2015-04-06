var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');
var WebAPIUtils = require('../utils/WebAPIUtils');

var BookSearchActions = {

  search: function(keyword) {
    Dispatcher.handleViewAction({
      type: ActionTypes.SEARCH_BOOK
    });
    WebAPIUtils.getSearchBooks(keyword);
  }

};

module.exports = BookSearchActions;