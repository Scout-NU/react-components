path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/components/index',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules/'),
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        exclude: path.resolve(__dirname, 'node_modules/'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: path.resolve(__dirname, 'node_modules/'),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader'],
        exclude: path.resolve(__dirname, 'node_modules/'),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
        exclude: path.resolve(__dirname, 'node_modules/'),
      },
    ],
  },
};
