var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('./Header.react');
var Footer = require('./Footer.react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <RouteHandler {...this.props} />
        <Footer />
      </div>
    );
  }
});

module.exports = App;