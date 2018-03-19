define([
  'underscore',
  'backbone',
  'models/book'
], function (_, Backbone, Book) {

    var Books = Backbone.Collection.extend({

        model: Book,

        url: function () {
          return 'https://api.douban.com/v2/book/search?q=' + this.param;
        },

        parse: function (res) {
          // this is just for the specific api
          return res.books;
        },

        sync: function(method, collection, options) {
            options.dataType = "jsonp";
            return Backbone.sync(method, collection, options);
        }

    });

    return new Books();
});
