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
        src: 'src/assets/chess/scripts/checkboard.js'
      }
    },

    sync:
    {
      devToBin:
      {
        files:
        {
          cwd:  'src',
          src:  '**',
          dest: 'bin'
        }
      }
    },

    watch:
    {
      jscheck:
      {
        files: 'src/**',
        task:  'jshint'
      },
      livereload:
      {
        options: { livereload: true },
        files:   'bin/assets/**/scripts/*.js'
      }
    }

  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('devbin', ['watch']);
}