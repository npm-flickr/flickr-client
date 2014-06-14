var get = require("get-json");
var debug = require("debug")('flickr-client');
var querystring = require("querystring");

var auth;

module.exports = setup;

function setup (options) {
  if (typeof options == 'function') return options;

  auth = options || {};
  return client;
}

function client (query, options, callback) {
  var token = '';
  var sig = '';
  var qs = '';

  if (typeof options == 'function') {
    callback = options;
    options = undefined;
  }

  if (options) {
    qs = '&' + querystring.stringify(options);
  }

  if (auth.token) token = '&auth_token=' + auth.token;
  if (auth.sig) sig = '&auth_sig=' + auth.sig;

  var url = 'https://api.flickr.com/services/rest/?method=flickr.'
        + query
        + '&api_key='
        + auth.key
        + '&format=json&nojsoncallback=1'
        + token + sig + qs;

  debug('Requesting %s', url);

  get(url, function (error, response) {
    if (error) return callback(error);
    if (response.stat == 'fail') return callback(new Error(response.message));
    return callback(undefined, response);
  });
}
