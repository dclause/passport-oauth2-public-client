var vows = require('vows');
var assert = require('assert');
var util = require('util');
var publicClient = require('../lib');


vows.describe('passport-oauth2-public-client').addBatch({

  'module': {
    'should export Strategy': function (x) {
      assert.isFunction(publicClient.Strategy);
    },
  },

}).export(module);
