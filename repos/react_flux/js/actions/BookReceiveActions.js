var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');

var BookReceiveActions = {

  receive: function(result) {
    Dispatcher.handleServerAction({
      type: ActionTypes.SEARCH_BOOK,
      data: result.data
    });
  }

};

module.exports = BookReceiveActions;