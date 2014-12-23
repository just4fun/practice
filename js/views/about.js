define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/about.html',
], function ($, _, Backbone, aboutTemp) {

  var AboutView = Backbone.View.extend({

    template: aboutTemp,

    events: {

    },

    initialize: function () {

    },

    render: function () {
      this.$el.html(this.template);
      return this;
    }

  });

  return AboutView;
});
