define([
  'backbone'
], function(Backbone) {

    var BackboneBaseView = Backbone.View.extend({
        empty: function() {
            // use empty() instend of remove()
            this.$el.empty();
            this.stopListening();
            return this;
        },

        assign: function(selector, view) {
          var selectors;

          if (_.isObject(selector)) {
            selectors = selector;
          } else {
            selectors = {};
            selectors[selector] = view;
          }

          if (!selectors) return;

          this.views = this.views || [];

          _.each(selectors, function(view, selector) {
            view.setElement(this.$(selector)).render();
            this.views.push(view);
          }, this);
        },

        close: function(navExitEvent) {
          _.each(this.views, function(view) {
            view.remove();
          });
          this.empty();
        }
    });

    return BackboneBaseView;
});