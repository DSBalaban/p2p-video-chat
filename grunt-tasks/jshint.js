module.exports = function(grunt) {
    grunt.config('jshint', {
        options: {
            reporter: require('jshint-stylish')
        },
        files: {
            src: ['public/app/**/*.js']
        }
    });
};