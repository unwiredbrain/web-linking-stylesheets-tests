# Web Linking Stylesheets Tests

Test cases for including stylesheets via Web Linking ([RFC 5988][RFC5988])

[RFC5988]: https://tools.ietf.org/html/rfc5988

## Usage

You'll need [Node.js](https://nodejs.org/).

Clone this repository, then in a terminal window launch:

```shell
npm install
npm start
```

This will launch an [Express](http://expressjs.com/) server listening on port `3000`.

Then open http://localhost:3000/ in your web browser.

Once done, stop it with `Ctrl+C`.

If you need debugging informations, launch:

```shell
DEBUG=web-linking-stylesheets-tests:* npm start
```

# License

The MIT License (MIT)

Copyright (c) 2015 Massimo Lombardo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
