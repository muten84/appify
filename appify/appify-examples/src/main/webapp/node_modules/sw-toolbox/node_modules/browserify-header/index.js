/*
**  browserify-header -- Browserify Plugin for Adding Header Comment
**  Copyright (c) 2014 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var fs      = require("fs");
var through = require("through2");

/*  export a Browserify plugin  */
module.exports = function (browserify, opts) {
    /*  determine filename of header file  */
    var filename;
    if (typeof opts.file === "string")
        filename = opts.file;
    else
        filename = browserify._options.entries[0];

    /*  load header comment from header file  */
    var source;
    try {
        source = fs.readFileSync(filename, "utf8");
    }
    catch (e) {
        throw new Error("browserify-header: " +
            "failed to read file \"" + filename + "\": " + e.message);
    }
    var m = source.match(/^(?:.|\r?\n)*?(\/\*!\r?\n(?:.|\r?\n)*?\*\/\r?\n).*/);
    if (m === null)
        m = source.match(/^(?:.|\r?\n)*?(\/\*\r?\n(?:.|\r?\n)*?\*\/\r?\n).*/);
    if (m === null)
        throw new Error("browserify-header: " +
            "no header comment found in file \"" + filename + "\"");
    var header = m[1].replace(/\r?\n/g, "\n") + "\n";

    /*  create a transform stream  */
    var createStream = function () {
        var firstChunk = true;
        var stream = through.obj(function (buf, enc, next) {
            if (firstChunk) {
                /*  insert the header comment as the first chunk  */
                this.push(new Buffer(header));
                firstChunk = false;
            }
            this.push(buf);
            next();
        });
        stream.label = "header";
        return stream;
    };

    /*  hook into the bundle generation pipeline of Browserify  */
    browserify.pipeline.get("wrap").push(createStream());
    browserify.on("reset", function () {
        browserify.pipeline.get("wrap").push(createStream());
    });
};

