require.config({
  paths: {
    'jquery'        : '../bower_components/jquery/dist/jquery',
    'underscore'    : '../bower_components/underscore/underscore',
    'backbone'      : '../bower_components/backbone/backbone',
    'mocha'         : '../node_modules/mocha/mocha',
    'chai'          : '../node_modules/chai/chai',
    'chai-jquery'   : '../node_modules/chai-jquery/chai-jquery',

    'models'        : '../js/models',
    'books'         : '../js/collections/books'
  },

  shim: {
    'mocha': { exports: 'mocha' },
    'chai-jquery': ['jquery', 'chai']
  }
});

define([
  'chai',
  'chai-jquery',
  'mocha'
], function (chai, chaiJquery, mocha) {
  window.expect = chai.expect;
  chai.use(chaiJquery);

  mocha.setup('bdd');

  require([
    'unit/collections/books-spec.js'
  ], function() {
    mocha.run();
  });
});
