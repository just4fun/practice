define([
  'jquery',
  'underscore',
  'backbone',
  'base/backbone.baseview',
  'text!templates/about.html',
], function ($, _, Backbone, BackboneBaseView, aboutTemp) {

  var AboutView = BackboneBaseView.extend({

    template: aboutTemp,

    events: {

    },

    initialize: function (options) {
      this.$el = options.$el;
      this.render();
    },

    render: function () {
      this.$el.html(this.template);
      return this;
    }

  });

  return AboutView;
});
