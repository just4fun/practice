var React = require('react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var Footer = require('./Footer.react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <MainSection {...this.props} />
        <Footer />
      </div>
    );
  }
});

module.exports = App;