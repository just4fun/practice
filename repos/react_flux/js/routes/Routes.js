var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('../components/App.react');
var Books = require('../components/Books.react');
var BookDetail = require('../components/BookDetail.react');

var Routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='books' path='/' handler={Books}/>
    <Route name='book-detail' path='/books/:bookId' handler={BookDetail}/>
    <DefaultRoute handler={Books}/>
  </Route>
);

module.exports = Routes;