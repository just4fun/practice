require.config({

  shim: {
    underscore: {
      exports: '_'
    },

    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },

  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    text: '../bower_components/requirejs-text/text'
  }

});

require([
  'backbone',
  'routers/router'
], function (Backbone, AppRouter) {
  var $mainContent = $('#main__div--content');
  new AppRouter($mainContent);
  Backbone.history.start();
});
