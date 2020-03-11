const express = require('express');
const webpack = require('webpack');
const middleWare = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

//tell express to use the webpack-dev-middleware and use the webpack.config.js configuration file as base

const options = {
  publicPath: config.output.publicPath,
  contentBase: './dist',
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
};

app.use(middleWare(compiler, options));

//serve the files on port 3000

app.listen(3000, err => {
  if (err) {
    return console.log(err);
  }
  console.log('listening on localhost:3000');
});
