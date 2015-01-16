define([
  'backbone'
], function(Backbone) {

    var BackboneBaseView = Backbone.View.extend({
        empty: function() {
            // use empty() instend of remove()
            this.$el.empty();
            this.stopListening();
            return this;
        }
    });

    return BackboneBaseView;
});