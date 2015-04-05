var React = require('react');
var Header = require('./Header.react');
var Footer = require('./Footer.react');
var MainSection = require('./MainSection.react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
});

module.exports = App;