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
      "*else": "home"
    },

    initialize: function($el) {
      this.$el = $el;

      this.homeView = new HomeView();
      this.aboutView = new AboutView();
    },

    switchView: function(view) {
      if (this.currentView) {
        this.currentView.remove();
      }

      // occupied DOM first
      this.$el.html(view.el);
      // then switch to actual view in view.render()
      view.render();

      this.currentView = view;
    },

    home: function() {
      this.switchView(this.homeView);
    },

    about: function() {
      this.switchView(this.aboutView);
    }

  });

  return AppRouter;
});
