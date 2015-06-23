
browserify-header
=================

[Browserify](http://browserify.org/) plugin for adding a header comment
to the output bundle -- usually used to place license information to
the top of the generated bundle.

<p/>
<img src="https://nodei.co/npm/browserify-header.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/browserify-header.png" alt=""/>

About
-----

When creating Browser versions of libraries and applications with the
help of the excellent [Browserify](http://browserify.org/) toolchain,
comments are left in the bundle, of course. But if you compress
the output bundle (usually with the help of the Browserify plugin
[minifyify](https://www.npmjs.com/package/minifyify)), then all comments
would be stripped away. Then at least a header comment should be left,
usually holding license information about the bundle.
This Browserify plugin [browserify-header](https://www.npmjs.com/package/browserify-header)
adds the first `/*!...*/` comment (or alternatively just the first `/*...*/` comment at all)
back to the top of the output bundle. By default the header is extracted
from the first entry file to Browserify, but a separate file can be
specified with the plugin option `--file`.

Installation
------------

```shell
$ npm install -g browserify
$ npm install -g browserify-header
```

Usage
-----

#### Shell

```shell
$ browserify -p [ minifyify --output sample.browser.map ] \
             -p browserify-header \
             -o sample.browser.js sample.js
$ browserify -p [ minifyify --output sample.browser.map ] \
             -p [ browserify-header --file header.js ] \
             -o sample.browser.js sample.js
```

#### Grunt

```js
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-browserify");
    grunt.initConfig({
        browserify: {
            "sample": {
                files: {
                    "sample.browser.js": [ "sample.js" ]
                },
                options: {
                    plugin: [
                        [ "minifyify", { output: "sample.browser.map" } ],
                        [ "browserify-header", { file: "header.js" } ]
                    ]
                }
            }
        },
        [...]
    });
    [...]
};
```

License
-------

Copyright (c) 2014 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

