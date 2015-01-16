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

    initialize: function () {
      
    },

    render: function () {
      this.$el.html(this.template);
      return this;
    }

  });

  return AboutView;
});
