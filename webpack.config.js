module.exports = {
  entry: ['./app/react-entry.jsx'],

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },

  module: {
    preLoaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['eslint-loader'],
        include: __dirname + '/app',
      },
    ],

    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },

  devServer: {
    contentBase: __dirname + '/public',
  },
};
