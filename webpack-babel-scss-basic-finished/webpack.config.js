// Twicks  to original  version  ( subfolder:  'webpack-babel-scss-basic/')

// 1. File index.html is sitting in the root folder instead of /src folder. And finally will end up in /dist folder
//  2.  also <scripts>  elements   and <link> elements would be generated dynamically.
//
// 3. Image file  added  into the index.html
//
//  New loaders:
// npm install --save-dev html-loader html-webpack-plugin file-loader
//  html-loader and html-webpack-plugin are working close together.
//   first loads HTML into DOM , second generates HTML, when using source HTML file as template
//   file-loader is for images processing.
//
// 4. Completely remove /dist folder  before each new build.  Because othervise the builds are keep adding
//     files into the /dist folder. No  clean up will be done.
//

var path = require('path');  // (Path is nodejs module )
var ExtractTextPlugin = require('extract-text-webpack-plugin');  // Text extract object
var HtmlWebpackPlugin = require('html-webpack-plugin');   // HTML collection object
var CleanWebpackPlugin = require('clean-webpack-plugin');  // Remove /dist folder before each build

var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'   // where to extract CSS rules from the loaded into DOM
});

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'   // Now  index.html is in /dist folder too. So  publicPath is no longer needed for injection of  elements
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({   //  collect CSS data for extraction from DOM
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']   // files are loaded into DOM by html-loader
            },
            {
                test: /\.(jpg|png)$/,   // process .jpg and .png files  in the project directorie(s)
                use: [
                        {
                            loader: 'file-loader',
                            options: {  // of the file-loader
                                name:  '[name].[ext]',      // by default it will "hash" name, so forced to use old name
                                outputPath: 'img/',             // Where physically output the image
                                // publicPath: 'img/'      // Where HTML file supposed to find the image of the elements
                            }
                        }
                ]
            }
        ]
    },
    plugins: [
        extractPlugin,  // Dump CSS information from the objeect extractPlugin to  filename: which was set during
                                // object construction ( see above)
        new HtmlWebpackPlugin({  //  outputs HTML into file(s)
              template: 'src/index.html'   // Index.html  file content  is used as template
                                                         // to inject new CSS styles and scripts JS
        }),
        new CleanWebpackPlugin(['dist'],{})
    ]
};
