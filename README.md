# passport-oauth2-public-client

OAuth 2.0 public client authentication strategy for [Passport](https://github.com/jaredhanson/passport).


This module lets you authenticate requests containing client credentials in the
request body, as [defined](http://tools.ietf.org/html/draft-ietf-oauth-v2-27#section-2.3.1)
by the OAuth 2.0 specification but with client_secret being optional.  
This strategy is typically used by a category of clients that are notable to reliably keep their secrets.

NOTE: This strategy accepts both body and request params source. 

**Warning: In most case, you want to use [passport-oauth2-client-password](https://github.com/jaredhanson/passport-oauth2-client-password). This strategy let's you authorize public client, ie clients without *secret_key*.**

**You should make sure to understand the security implications to use it.**

<!---
[![npm](https://img.shields.io/npm/v/passport-oauth2-public-client.svg)](https://www.npmjs.com/package/passport-oauth2-public-client)
[![build](https://img.shields.io/travis/dclause/passport-oauth2-public-client.svg)](https://travis-ci.org/dclause/passport-oauth2-public-client)
[![coverage](https://img.shields.io/coveralls/dclause/passport-oauth2-public-client.svg)](https://coveralls.io/github/dclause/passport-oauth2-public-client)
[...](https://github.com/dclause/passport-oauth2-public-client/wiki/Status)
--->
## Install

```sh
$ npm install dclause/passport-oauth2-public-client
```

## Usage

#### Configure Strategy

The OAuth 2.0 ppublic client authentication strategy authenticates clients
using a client ID and an optional client secret.  The strategy requires a `verify` callback,
which accepts those credentials and calls `done` providing a client.

```js
passport.use(new PublicClientStrategy(
    function(clientId, clientSecret, done) {
    Clients.findOne({ clientId: clientId }, function (err, client) {
      if (err) { return done(err); }
      if (!client) { return done(null, false); }
      if (client.clientSecret && client.clientSecret != clientSecret) { return done(null, false); }
      return done(null, client);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'oauth2-public-client'`
strategy, to authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application, using [OAuth2orize](https://github.com/jaredhanson/oauth2orize)
middleware to implement the token endpoint:

```
app.get('/profile', 
  passport.authenticate(['oauth2-public-client'], { session: false }),
  oauth2orize.token());
```

## Tests

```sh
$ npm install --dev
$ make test
```

## Credits

  - [Dominique Clause](http://github.com/dclause)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2020-2021 Dominique Clause <[http://acino.fr/](http://acino.fr/)>


