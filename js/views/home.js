define([
  'jquery',
  'underscore',
  'backbone',
  'base/backbone.baseview',
  'collections/books',
  'views/item',
  'text!templates/home.html'
], function ($, _, Backbone, BackboneBaseView, Books, ItemView, homeTemp) {

  var HomeView = BackboneBaseView.extend({

    events: {
      "click #btn_search": "search",
      "keyup #txt_search": "keyPress"
    },

    initialize: function () {
      this.listenTo(Books, 'reset', this.addAll);
    },

    render: function () {
      this.$el.html(homeTemp);
      return this;
    },

    addAll: function () {
      $('#search_list').empty();
      Books.each(this.addOne, this);
      $('.loadingbox').hide();
    },

    addOne: function (item) {
      var view = new ItemView({ model: item });
      $('#search_list').append(view.render().el);
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
