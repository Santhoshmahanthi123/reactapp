const webpack = require('webpack');
//to direct to the path
const path = require('path');
//distribution directory to copy transpiled bundle of code to dist folder
const DIST_DIR = path.resolve(__dirname,"dist");
//To find the un transpiled source code
const SRC_DIR = path.resolve(__dirname,"dist");

const config = {

    entry : SRC_DIR + "/app/index.js",
    output: {
        path : DIST_DIR + "/app/",
        filename : "bundle.js",
        publicPath : "/app/"
    },
    module :{

        loaders : [ 
            {
                test : /\.js?/,
                include : SRC_DIR,
                loader : "babel-loader",
                query : {
                    presets : ["react","es2015","stage-2"]
                }
            }
        ]
    }

};
module.exports = config;