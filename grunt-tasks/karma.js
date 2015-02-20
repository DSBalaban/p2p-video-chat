module.exports = function(grunt) {
    grunt.config('karma', {
        unit: {
            configFile: 'grunt-tasks/karma/karma.conf.js'
        }
    });

    grunt.registerTask('test', ['karma']);
};