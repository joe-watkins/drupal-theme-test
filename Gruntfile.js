'use strict';

var userIpAddress = require("./scripts/_browser-sync-ip.js");

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var config = {
    localIpAddress : userIpAddress,
    sassDir : "styles", // directory of working sass
    cssDir : "styles", // directory to store compiled css
    jsDir : "scripts", // folder where js lives
    jsMain : "main.js", // main js file name
    jsMin : "main.min.js", // desired minified js file name
    jsVendorFiles : [ // extra scripts to include in concat+minification
      'bower_components/jquery/dist/jquery.js',
      'bower_components/modernizr/modernizr.js',
      'scripts/vendor/compact-labels.js'
    ],
    imagesDir : "images", // images folder
    iconFontsDir : 'styles/fonts',
    targetSass : "styles/main.scss", // eg. /sass/main.scss
    compiledCss : "styles/main.min.css", // eg. /css/main-min.scss,
    sassStyle : 'expanded', // expanded, compressed
    sassLineNumbers : true,
    baseDir : ".", // working dir
    browserSyncGhost: false
  }

  grunt.initConfig({

    config: config,

    watch: {
      sass : {
        files: [config.sassDir+'/**/*.scss'],
        tasks: ['sass','autoprefixer']
      },
      gruntfile: {
          files: ['Gruntfile.js']
      },
      js : {
        files: [config.jsDir+'/'+config.jsMain],
        tasks : ['uglify']
      }
  	}, // watch

    sass: {
      dist: {
        options: {
          style: config.sassStyle,
          lineNumbers : config.sassLineNumbers
        },
        files: {
          '<%= config.compiledCss %>' : '<%= config.targetSass %>' // dest : source
        }
      }
    }, // sass

    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      dist: {
        files: [{
            src: '<%= config.compiledCss %>',
            dest: '<%= config.compiledCss %>'
        }]
      }
    },

    uglify: {
      my_target: {
        files: {
          '<%= config.jsDir %>/<%= config.jsMin %>': [config.jsVendorFiles,config.jsDir+'/'+config.jsMain]
        }
      }
    }, // uglify

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: config.imagesDir,
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: config.imagesDir
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: config.iconFontsDir,
          src: '{,*/}*.svg',
          dest: config.iconFontsDir
        }]
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
              '<%= config.cssDir %>/*.css',
              '<%= config.imagesDir %>/**/*.jpg',
              '<%= config.imagesDir %>/**/*.png',
              '<%= config.jsDir %>/**/*.js',
              '**/*.php',
              '**/*.html'
          ]
        },
        options: {
          watchTask: true,
          host: config.localIpAddress,
          server: {
            baseDir: config.baseDir
          },
          ghostMode: {
            clicks: config.browserSyncGhostScroll,
            scroll: config.browserSyncGhostScroll,
            links: config.browserSyncGhostScroll,
            forms: config.browserSyncGhostScroll
          }
        }
      }
    } // browserSync

  }); // initConfig

  // watch
  grunt.registerTask('default',['watch']);

  // build
  grunt.registerTask('build',['imagemin','svgmin']);

  // server
  grunt.registerTask('serve',['browserSync','watch']);

};
