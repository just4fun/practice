define([
  'underscore',
  'backbone',
  'models/book'
], function (_, Backbone, Book) {

    var Books = Backbone.Collection.extend({

        model: Book,

        url: 'https://api.douban.com/v2/book/search?q=%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91',

        sync : function(method, collection, options) {
            options.dataType = "jsonp";
            return Backbone.sync(method, collection, options);
        }

    });

    return new Books();
});
