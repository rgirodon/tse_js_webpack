const path = require('path');

module.exports = {
  /*
  entry: './src/index_jquery.js',
  output: {
    filename: 'main_jquery.js',
    path: path.resolve(__dirname, 'dist'),
  },
  */
  
  entry: './src/index_shopping_list.js',
  output: {
    filename: 'main_shopping_list.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  /*
  entry: './src/index_lodash.js',
  output: {
    filename: 'main_lodash.js',
    path: path.resolve(__dirname, 'dist'),
  },
  */
  /*
  entry: {
    main_jquery: './src/index_jquery.js',
    main_lodash: './src/index_lodash.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  */
};