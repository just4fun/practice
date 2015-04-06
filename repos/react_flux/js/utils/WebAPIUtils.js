var BookReceiveActions = require('../actions/BookReceiveActions');
var $ = require('jquery');

var _douban_book_search_url = "https://api.douban.com/v2/book/search";

module.exports = {

  getSearchBooks: function(keyword) {
    $.ajax({
      url: _douban_book_search_url + "?q=" + keyword,
      dataType: 'jsonp',
      success: function(data) {
        BookReceiveActions.receive({
          data: data.books
        });
      }
    });
  }

};