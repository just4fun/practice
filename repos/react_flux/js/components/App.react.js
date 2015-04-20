var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
//var Routes = require('../routes/Routes');
var DefaultRoute = Router.DefaultRoute;

var Header = require('./Header.react');
var MainSection = require('../components/MainSection.react');
var BookDetail = require('../components/BookDetail.react');
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

var routes = (
  <Route handler={App}>
    <Route name='main-section' path='/books' handler={MainSection}>
      <Route name='book-detail' path='/books/:bookId' handler={BookDetail}/>
    </Route>
    <DefaultRoute handler={MainSection}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});

module.exports = App;