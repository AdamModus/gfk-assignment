var sass = require('gulp-sass');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var connect = require('connect');
var cRest = require('connect-rest');
var bodyParser = require('body-parser');
var http = require('http');


var bowerConfigs = {
   directory: 'app/bower_components',
   exclude: [
      'bower_components/angular/',
      'bower_components/jquery/',
      'bootstrap.js'
   ],
};

gulp.task('sass', function() {
   gulp.src('app/styles/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('app/styles'));
});

gulp.task('default', function() {
   gulp.start('watch');
});

gulp.task('connect', function() {
   var rest = cRest.create({});
   var app = connect()
      .use(require('connect-livereload')({
         port: 35729
      }))
      .use(bodyParser.urlencoded({
         extended: true
      }))
      .use(bodyParser.json())
      .use(serveStatic('app'))
      .use(serveIndex('app'));

   app.use(rest.processRequest());
   rest.get('/numberFour/restServiceBase', function(request, content, callback) {
      http.get('http://cdn.gfkdaphne.com/tests/async.php?a=1', function(response) {
         return callback(null, response, { minify: true });
      });
   });

   require('http').createServer(app)
      .listen(8000)
      .on('listening', function() {
         console.log('Started connect web server on http://localhost:8000');
      });
});

gulp.task('serve', ['connect'], function() {
   require('opn')('http://localhost:8000');
});

// inject bower components
gulp.task('wiredep', function() {
   var wiredep = require('wiredep').stream;

   gulp.src('app/styles/*.css')
      .pipe(wiredep(bowerConfigs))
      .pipe(gulp.dest('app/styles'));

   gulp.src('app/index.html')
      .pipe(wiredep(bowerConfigs))
      .pipe(gulp.dest('app'));
});

// watch for changes
gulp.task('watch', ['connect', 'serve'], function() {
   livereload.listen();

   gulp.watch([
      'app/*.html',
      'app/views/*.html',
      'app/styles/**/*.css',
      'app/scripts/**/*.js',
      'app/images/**/*'
   ]).on('change', function(file) {
      livereload.changed(file.path);
   });

   gulp.watch('app/styles/sass/**/*.scss', ['sass']);
   gulp.watch('bower.json', ['wiredep']);
});
