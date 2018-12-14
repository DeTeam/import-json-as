const { join } = require('path');

module.exports = {
  name: 'browser',
  entry: {
    'entry1': join(__dirname, 'src/entry1/index.js'),
    'entry2': join(__dirname, 'src/entry2/index.js'),
    'entry3': join(__dirname, 'src/entry3/index.js'),
  },
  mode: 'production',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name]/index.js'
  },
  target: 'web',
  performance: {
    hints: 'warning'
  },
  optimization: {
    minimizer: []
  }
}
