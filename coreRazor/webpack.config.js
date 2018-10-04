const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, 'Scripts');
const DESTINATION = path.resolve(__dirname, 'wwwroot/js');

module.exports = {
    context: ROOT,

    entry: {
        'index': './calendar.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    }	
};