var BookReceiveActions = require('../actions/BookReceiveActions');
var $ = require('jquery');

var _DOUBAN_SEARCH_BOOKS_URL = "https://api.douban.com/v2/book/search?q={keyword}";
var _DOUBAN_GET_BOOK_URL = "https://api.douban.com/v2/book/{bookId}";

module.exports = {

  getAll: function(keyword) {
    $.ajax({
      url: _DOUBAN_SEARCH_BOOKS_URL.replace('{keyword}', keyword),
      dataType: 'jsonp',
      success: function(data) {
        BookReceiveActions.receiveAll({
          data: data.books
        });
      }
    });
  },

  get: function(bookId) {
    $.ajax({
      url: _DOUBAN_GET_BOOK_URL.replace('{bookId}', bookId),
      dataType: 'jsonp',
      success: function(data) {
        BookReceiveActions.receive({
          data: data.books
        });
      }
    });
  }

};