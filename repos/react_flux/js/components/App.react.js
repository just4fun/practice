var React = require('react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var Footer = require('./Footer.react');
var Loading = require('./Loading.react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <MainSection {...this.props}/>
        <Footer />
        <Loading />
      </div>
    );
  }
});

module.exports = App;