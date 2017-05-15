/**
 * Created by ttn on 02/05/17.
 */
const path= require('path');
const webpack= require('webpack');
module.exports={
  entry: './src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader'],
      }
    ],
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin(),
  ],
};