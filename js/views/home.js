define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home.html',
], function ($, _, Backbone, homeTemp) {

  var HomeView = Backbone.View.extend({

    template: homeTemp,

    events: {

    },

    initialize: function () {

    },

    render: function () {
      this.$el.html(this.template);
      return this;
    }

  });

  return HomeView;
});
