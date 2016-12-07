var async = require('async');
var assert = require('assert');
var lookupLocation = require('../lib').lookupLocation;
var record = require('./record');

var postalCode = process.env.POSTAL_CODE || '97202';

describe('lookupLocation', function () {
  var recorder = record('lookupLocation');

  before(recorder.before);

  it('look up location for zip codes from ' + postalCode, function (done) {
    var self = this;
    var currentCode = parseInt(postalCode);
    this.timeout(0);

    // Look up postal code info
    async.timesSeries(15, function (n, done) {
      lookupLocation(currentCode++, done);
    }, done);
  });

  after(recorder.after);
});
