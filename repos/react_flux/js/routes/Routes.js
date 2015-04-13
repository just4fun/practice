var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('../components/App.react');
var MainSection = require('../components/MainSection.react');
var BookDetail = require('../components/BookDetail.react');

var Routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="main-section" handler={MainSection}>
      <Route name="book-detail" path=":bookId" handler={BookDetail}/>
    </Route>
    <DefaultRoute handler={MainSection}/>
  </Route>
);

module.exports = Routes;