var geonamesUser = process.env.GEONAMES_USER;
var axios = require('axios');

function lookupLocation (zipcode, done) {
  return axios.get('http://api.geonames.org/postalCodeLookupJSON', {
    params: {
      postalcode: zipcode,
      username: geonamesUser,
      country: 'US'
    }
  })
    .then(function (response) {
      
    })
    .then(function () {
      return done();
    });
}

module.exports = {
  lookupLocation: lookupLocation
};
