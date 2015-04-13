var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Routes = require('../routes/Routes');

var Header = require('./Header.react');
var Footer = require('./Footer.react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
});

Router.run(Routes, function (Handler) {
  React.render(<Handler />, document.body);
});

module.exports = App;