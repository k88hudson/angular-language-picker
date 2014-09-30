module.exports = function (grunt) {

  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    html2js: {
      options: {
        base: 'src/templates',
        indentString: '  '
      },
      languagePicker: {
        src: ['src/templates/**/*.html'],
        dest: 'dist/angular-language-picker.templates.js'
      },
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['bower_components/langmap/language-mapping-list.js','src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'],
          'dist/<%= pkg.name %>.templates.min.js': ['<%= html2js.languagePicker.dest %>']
        }
      }
    },

    watch: {
      src: {
        files: ['src/**/*'],
        tasks: ['build'],
        options: {
          spawn: false
        }
      }
    },

    connect: {
      server: {
        options: {
          base: './',
          port: 1987
        }
      }
    },

  });

  grunt.registerTask('build', [
    'html2js',
    'concat',
    'uglify'
  ]);

  grunt.registerTask('dev', [
    'build',
    'connect',
    'watch'
  ]);

};
