require('with-env')();

var test = require('prova');
var flickr = require('./')({
  key: process.env.FLICKR_API_KEY
});

test('reading username', function (assert) {
  flickr('people.findByUsername', { username: 'azer' }, function (error, response) {
    assert.plan(2);
    assert.error(error);
    assert.deepEqual(response, {
      "user": {
        "id": "13517180@N00",
        "nsid": "13517180@N00",
        "username": { "_content": "azer" }
      },
      "stat": "ok"
    });
  });
});
