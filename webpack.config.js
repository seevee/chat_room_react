const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      //use: ExtractTextPlugin.extract("style-loader", "css?sourceMap!resolve-url!postcss-loader!sass?sourceMap")
    },
    {
      test: /\.woff(2)?(\?[a-z0-9]+)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/font-woff'
      }
    },
    {
      test: /\.(otf|ttf|eot|svg)(\?[a-z0-9]+)?$/,
      loader: "file-loader"
    }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('./style.css', {
      allChunks: true
    })
  ]
};
