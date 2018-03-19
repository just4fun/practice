var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var MainSection = React.createClass({

  render: function() {
    return (
      <div className='main-section'>
        <RouteHandler {...this.props} />
      </div>
    );
  }

});

module.exports = MainSection;