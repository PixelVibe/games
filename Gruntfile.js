module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    jshint:
    {
      options:
      {
        'eqeqeq':   true,
        'forin':    true,
        'trailing': true,
        'sub':      true
      },
      devToBin:
      {
        files: 'src/assets/**/scripts/*.js'
      }
    },

    sync:
    {
      main:
      {
        files:
        [{
          cwd:  'src',
          src:  '*',
          dest: 'bin'
        }]
      }
    },

    watch:
    {
      jshint:
      {
        files: 'src/assets/**/scripts/*.js',
        task:  'jshint'
      },
      sync:
      {
         files: 'src/*',
         task:  'sync'
      },
      livereload:
      {
        options: { livereload: true },
        files:   'bin/assets/**/scripts/*.js'
      }
    },

  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('devbin', ['watch']);
  
}