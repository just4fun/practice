var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('../components/App.react');
var BookList = require('../components/BookList.react.js');
var BookDetail = require('../components/BookDetail.react');

var Routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='books' path='/' handler={BookList}/>
    <Route name='book-detail' path='/books/:bookId' handler={BookDetail}/>
    <DefaultRoute handler={BookList}/>
  </Route>
);

module.exports = Routes;