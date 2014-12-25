define([
  'jquery',
  'underscore',
  'backbone',
  'base/backbone.baseview',
  'collections/books',
  'text!templates/home.html',
], function ($, _, Backbone, BackboneBaseView, Books, homeTemp) {

  var HomeView = BackboneBaseView.extend({

    template: _.template(homeTemp),

    events: {

    },

    initialize: function (options) {
      this.$el = options.$el;
      this.listenTo(Books, 'reset', this.render);

      $('.loadingbox').show();
      Books.fetch({reset: true});
    },

    render: function () {
      this.$el.html(this.template({books: Books.toJSON()[0].books}));
      $('.loadingbox').hide();
      return this;
    }

  });

  return HomeView;
});
