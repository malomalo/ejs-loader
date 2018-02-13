import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.txt$/,
        use: {
          loader: path.resolve(__dirname, '../lib/loader.js'),
          options: {
            name: 'Alice'
          }
        }
      }]
    }
  });

  compiler.outputFileSystem = new memoryfs();

  return function(resolve, reject) {
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  }
  // return new Promise((resolve, reject) => {
  //   compiler.run((err, stats) => {
  //     if (err) reject(err);
  //
  //     resolve(stats);
  //   });
  // });
}