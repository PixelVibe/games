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
        src: 'src/assets/**/scripts/*.js'
      }
    },

    sync:
    {
      devToBin:
      {
        files:
        [{
          cwd:  'src',
          src:  '**',
          dest: 'bin'
        }]
      }
    },

    watch:
    {
      jscheck:
      {
        files: 'src/assets/**/scripts/*.js',
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
  grunt.registerTask('test', ['jshint', 'sync']);

}
