'use strict';
var webpack = require('webpack');

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src('./public/source/js/**/*.js')
      .pipe($.gp.webpack({
        output: {
            filename: 'script.js'
        },
        plugins: [
          // new webpack.optimize.CommonsChunkPlugin({
          //     name: 'common'
          // }),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
          }),
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
          })
        ],
        module: {
          loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
          ]
        },
        stats: {
          colors: true
        },
        devtool: 'eval'
      }, webpack))
      .pipe($.gulp.dest($.config.root + '/js'))
      //.pipe($.browserSync.stream());
  })
};
