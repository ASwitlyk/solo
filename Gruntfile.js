module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'server.js'
      }
    }
    
  });

  // Load the plugin that provides the "" task.
  grunt.loadNpmTasks('grunt-nodemon');
  

  // Default task(s).
  grunt.registerTask('default', ['nodemon']);

};