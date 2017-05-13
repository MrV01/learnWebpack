//  webpack.config.js
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');  // Extract plugin import
// Instantiation and configuration of the extract plugin
var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

//
// According to the webpack configuration below, As the output we will have two files
//1.  JS bundle file:  dist/bundle.js
//2.  CSS main.css file  (Transpiled, converted, extracted ) :  dist/main.css
// Both files must be included in primary  index.html
//
module.exports = {
  entry: './src/js/app.js',
  output: {
      path: path.resolve(__dirname, 'dist'), // Absolute PATH is required for the output
      filename: 'bundle.js',
      publicPath: '/dist'     // RELATIVE path, which seen from index.html file
  },
  // loaders,  transpilers ,  are going to module section
  module: {
      rules: [  // each rule is JS object
        {
            test: /\.js$/ ,  // *.js  shoud be  transpiled to es6 JS, aka es2015
            use: [
              {
                 loader: 'babel-loader',    //  options provide config setttings for the particular webpack loader
                 options: {
                   presets: ['es2015']
                 }
              }
            ]
        },
        {  // transpile  SASS files to CSS
            test: /\.scss$/,
            use: extractPlugin.extract({
                use: [   // extractPlugin config:  transpile first, ->  load to DOM, then -> extract to the preconfig file
                   'css-loader',
                   'scss-loader'
                     ]
            })
        }
      ]
  },
  // Plugins sections
  plugins: [
      extractPlugin  // puckup configuration, uploaded to DOM, and generate the output NOW
  ]

}
// The END
