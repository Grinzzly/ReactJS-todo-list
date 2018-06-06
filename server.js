var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: false,
  historyApiFallback: true,
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.error(err);
  }

  console.info('Listening at localhost:3000');
});
