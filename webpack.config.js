var path = require('path');
var webpack = require('webpack'); // Import Plugins from Webpack Core

module.exports = {
    entry: './app/src/js/app.js',    // Core concept ENTRY = where to start
    output: {   // Core concept  Output = where to end
        path: path.resolve(__dirname, 'build'),  // __dirname  = pre-set current directory
        filename: 'bundle.js',
        publicPath: '/build'
    },
    // Module - Loaders ( per file basis)
    module: {  //  The Jorney  =  What to do with each individual file
        rules: [
            {
                test: /\.css$/,
                use: [     //  Array of loaders [] with options] . It works in reverse order   css-loader first, style-loader last
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    //  Webpack Plugins  array  ( Apply to the bundle)  What you should to do with prepared code
    //   before gererating the bundle. For instance generate stylesheets  to  the separate files !
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // ...
        })
    ]
};
