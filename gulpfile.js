const gulp = require('gulp');
const zip = require('gulp-zip');

let activeConfig;

function getToday(){
  return new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()
}


function isStaging(cb) {
  activeConfig = 'staging'
  cb()
}

function isProduction(cb) {
  activeConfig = 'production'
  cb()
}


function compressFolders(cb){
  gulp.src(`dist/${activeConfig} - Allam/**/*`)
    .pipe(zip(`[${activeConfig}] Allam - ${getToday()}.zip`))
    .pipe(gulp.dest('dist/deploy'));
  cb()
}

function uploadToServer(cb) {
  // gulp.src(`dist/${activeConfig} - FlairsHunter/**/*`)
  //     .pipe(gulp.dest(`s:/FrontEnd/test - ${getToday()}/`))
  cb()
}

exports.compress = compressFolders;
exports.default = gulp.series(compressFolders);
exports.staging = gulp.series(isStaging, compressFolders, uploadToServer);
exports.production = gulp.series(isProduction, compressFolders, uploadToServer);
