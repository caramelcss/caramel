module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        project: {
          src: 'src',
          scss: ['<%= project.src %>/css/caramel.scss'],
          css:  ['<%= project.src %>/css/caramel.css'],
          js:   ['<%= project.src %>/js/caramel.js']
        },

        // Global Banner
        tag: {
          banner: '/*!\n' +
                  '// Caramel (<%= pkg.homepage %>)\n' +
                  '// Copyright 2015, All Rights Reserved\n' +
                  '// @version <%= pkg.version %>\n' +
                  '// @license SEE <LICENSE>\n' +
                  '*/\n'
        },

        // Appends Banner to Files
        /*concat: {
          dev: {
            files: {
              '<%= project.src %>/css/caramel.css': '<%= project.css %>',
              '<%= project.src %>/css/caramel.min.css': '<%= project.src %>/css/caramel.min.css'
            }
          },
          options: {
            stripBanners: true,
            nonull: true,
            banner: '<%= tag.banner %>'
          }
      },*/

        // JavaScript Minification
        uglify: {
          options: {
            banner: '<%= tag.banner %>'
          },
          dist: {
            files: {
              '<%= project.src %>/js/caramel.min.js': '<%= project.js %>'
            }
          }
        },

        // Sass Compiler
        sass: {
          expanded: {
            options: {
              outputStyle: 'expanded',
              //banner: '<%= tag.banner %>'
            },
            files: {
              '<%= project.src %>/css/caramel.css': '<%= project.scss %>'
            }
          },
          compressed: {
            options: {
              outputStyle: 'compressed',
              //banner: '<%= tag.banner %>'
            },
            files: {
              '<%= project.src %>/css/caramel.min.css': '<%= project.scss %>'
            }
          }
        },
    });

    grunt.registerTask('build', [
        //'concat:dev',
        'sass:expanded',
        'sass:compressed',
        'uglify'
    ]);
};
