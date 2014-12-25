define([
  'backbone'
], function(Backbone) {

    var BackboneBaseView = Backbone.View.extend({
        remove: function() {
            // use empty() instend of remove()
            this.$el.empty();
            this.stopListening();
            return this;
        }
    });

    return BackboneBaseView;
});