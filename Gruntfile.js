module.exports = function(grunt){

  grunt.loadTasks('tasks');

  grunt.initConfig({
    release: {
      options: {
        // bump: true,
        // file: 'alt-package.json',
        // files: ['test-component.json'],
        // add: false,
        // commit: false,
        // tag: false,
        // push: false,
        // pushTags: false,
        // npm: false,
      }
    }
  });
};