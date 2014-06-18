## flickr-client

Flickr API Client. Works on both NodeJS and Browsers

## Install

```bash
$ npm install flickr-client
```

## Usage

```js
var flickr = require('flickr-client')({
  key: 'key',
  token: 'token',
  sig: 'sig'
});

flickr('people.findByUsername', { username: 'azer' }, function (error, response) {
  error
  // => undefined

  response
  // => { "user": { "id": "13517180@N00", "nsid": "13517180@N00", "username": { "_content": "azer" } }, "stat": "ok" }
})
```
