define([
  'jquery',
  'underscore',
  'backbone',
  'base/backbone.baseview',
  'text!templates/search_item.html'
], function ($, _, Backbone, BackboneBaseView, itemTemp) {

  var ItemView = BackboneBaseView.extend({

    template: _.template(itemTemp),

    events: {
      "click .img-remove": "clear"
    },

    initialize: function () {
      this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    clear: function () {
      this.model.destroy();
    }

  });

  return ItemView;
});
