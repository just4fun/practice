var React = require('react');
var App = require('./components/App.react');
var Router = require('react-router');
var Routes = require('./routes/Routes');
var Debug = require('debug');

Debug.enable('iBook*');

Router.run(Routes, function (Handler, state) {
  var params = state.params;
  React.render(<Handler params={params} />, document.getElementById('content'));
});