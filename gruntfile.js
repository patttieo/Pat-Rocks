'use strict';

const fs = require('fs'),
      path = require('path'),
      async = require('async'),
      exphbs = require('express-handlebars'),
      hbs = exphbs.create({extname: '.hbs', partialsDir: 'templates'});


module.exports = (grunt) => {
  grunt.config.init({

    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {
              ignore: 'scripts/compiled/*.js',
            }],
          ],
        },
        files: {
          'static/app.js': './scripts/main.js',
        },
      },
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
        },
        files: {                         // Dictionary of files
          'static/style.css': 'style/app.scss',
        },
      },
    },
    handlebars: {
      default: {
        files: {
          'scripts/compiled/templates.js': ['templates/browser/**/*.hbs'],
        },
        options: {
          commonjs: true,
        },
      },
    },
    clean: ['dist'],
    copy: {
      main: {
        src: 'static/**',
        dest: 'dist/',
        expand: true,
      },
    },
    uglify: {
      my_target: {
        files: {
          'dist/app.js': ['app.js'],
        },
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: ['style/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
      handlebars: {
        files: ['templates/browser/*.hbs'],
        tasks: ['handlebars', 'browserify'],
        options: {
          spawn: false,
        },
      },
      browserify: {
        files: ['scripts/*.js'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.registerTask('templates', 'Create hbs template',
    function createTemplates() {
      const done = this.async(),
            files = [
              '/index.hbs',
            ];

      grunt.file.mkdir('dist');
      grunt.file.copy('static/style.css', 'dist/static/style.css');
      grunt.file.copy('static/app.js', 'dist/static/app.js');

      async.eachSeries(files, (file, next) => {
        const newPath = path.join('dist', file.replace('.hbs', '.html'));

        hbs.renderView(`templates${file}`, {}, (err, template) => {
          if (err) throw err;
          fs.writeFileSync(newPath, template);
          next();
        });
      }, (err) => {
        if (err) throw err;
        done();
      });
    }
  );

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('dev', ['default', 'watch']);
  grunt.registerTask('default', ['sass', 'handlebars', 'browserify']);
  grunt.registerTask('build', [
    'clean', 'sass', 'handlebars', 'browserify', 'templates', 'copy',
  ]);
  grunt.registerTask('deploy', ['build']);
};
