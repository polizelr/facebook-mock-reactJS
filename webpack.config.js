const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.js'),
   output: {
       path: path.resolve(__dirname, 'public'),
       filename: 'bundle.js'
   },
   module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               exclude: /node-modules/,
               use: {
                   loader: 'babel-loader'
               }
           },
           {
               test: /\.css$/,
               use: [
                   {
                       loader: 'css-loader'
                   },
                   {
                       loader: 'style-loader'
                   }
               ]            
           },
           {
               test: /.*\.(png|jpe?g|gif)$/i,
               use: {
                   loader: 'file-loader'
               }
           }
       ]
   },
   devServer: {
       contentBase: path.resolve(__dirname, 'public')
   }
}