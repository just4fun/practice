define([
  'jquery',
  'backbone',
  'views/home',
  'views/about'
], function ($, Backbone, HomeView, AboutView) {

  var AppRouter = Backbone.Router.extend({

    currentView: null,

    routes: {
      "home": "home",
      "about": "about",
      "*else": "else"
    },

    initialize: function ($el) {
      this.$el = $el;
    },

    switchView: function (view) {
      if (this.currentView) {
        this.currentView.remove();
      }
      this.currentView = view;
    },

    home: function() {
      this.switchView(new HomeView({$el: this.$el}));
    },

    about: function() {
      this.switchView(new AboutView({$el: this.$el}));
    },

    else: function() {
      this.navigate('#/home');
    }

  });

  return AppRouter;
});
