var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');

var BookReceiveActions = {

  receiveAll: function(result) {
    Dispatcher.handleServerAction({
      type: ActionTypes.SEARCH_BOOKS,
      data: result
    });
  },

  receive: function(result) {
    Dispatcher.handleServerAction({
      type: ActionTypes.VIEW_BOOK,
      data: result.data
    });
  }

};

module.exports = BookReceiveActions;