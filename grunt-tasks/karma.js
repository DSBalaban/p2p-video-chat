module.exports = function(grunt) {
    grunt.config('karma', {
        unit: {
            configFile: 'grunt-tasks/tests/karma.conf.js'
        }
    });

    grunt.registerTask('test', ['karma']);
};