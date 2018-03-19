var Flux = require('flux');
var assign = require('react/lib/Object.assign');
var PayloadSources = require('../constants/PayloadSources');

var Dispatcher = assign(new Flux.Dispatcher(), {

  handleViewAction: function(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  },

  handleServerAction: function(action) {
    this.dispatch({
      source: PayloadSources.SERVER_ACTION,
      action: action
    });
  }

});

module.exports = Dispatcher;