var gulp = require('gulp');

var concat = require("gulp-concat");

gulp.task('scripts', function() {
    return gulp.src("scripts/js/**/*.js")
         .pipe(concat('scripts/index.js'));
});

gulp.task('watch', function(){
    gulp.watch('scripts/js/**/*.js', gulp.parallel('scripts')); 
});