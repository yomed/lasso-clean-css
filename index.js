'use strict';

var CleanCSS = require('clean-css');

function minify(src, options) {
    return new CleanCSS(options || {}).minify(src).styles;
}

module.exports = function (lasso, config) {
    lasso.addTransform({
        contentType: 'css',
        name: module.id,
        stream: false,
        transform: function (code) {
            return minify(code, config);
        }
    });
};
