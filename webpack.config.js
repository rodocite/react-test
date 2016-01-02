module.exports = {
  entry: ['./app/react-entry.jsx'],

  output: {
    path: './public',
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
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
    contentBase: './public',
  },
};
