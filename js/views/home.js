define([
  'jquery',
  'underscore',
  'backbone',
  'base/backbone.baseview',
  'collections/books',
  'text!templates/home_search.html',
  'text!templates/home_result.html'
], function ($, _, Backbone, BackboneBaseView, Books, homeSearchTemp, homeResultTemp) {

  var HomeView = BackboneBaseView.extend({

    events: {
      "click #btn_search": "search",
      "keyup #txt_search": "keyPress"
    },

    initialize: function (options) {
      this.$el = options.$el;
      this.listenTo(Books, 'reset', this.subRender);
      this.render();
    },

    render: function () {
      this.$el.html(homeSearchTemp);
      return this;
    },

    subRender: function () {
      var list = Books.toJSON()[0].books;
      var homeTemp = _.template(homeResultTemp);
      var renderedTemp = homeTemp({books: list});
      this.$el.children('#search_list').remove();
      this.$el.append(renderedTemp);
      $('.loadingbox').hide();
    },

    search: function () {
      var keyword = $('#txt_search').val().trim();
      if (keyword == "") {
        $('#txt_search').val();
        return;
      }

      $('.loadingbox').show();
      Books.param = keyword;
      Books.fetch({reset: true});
    },

    keyPress: function (event) {
      if (event.keyCode == 13){
        this.search();
      }
    }

  });

  return HomeView;
});
