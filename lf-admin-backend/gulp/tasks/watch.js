'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./public/source/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./public/source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./public/source/**/*.css', $.gulp.series('css'));
    $.gulp.watch('./public/source/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./public/source/images/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./public/source/**/*.html', $.gulp.series('copy:html'));
  });
};
