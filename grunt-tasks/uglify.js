module.exports = function(grunt) {

    grunt.config('uglify', {
            build: {
                src: ['!public/app/main.js', 'public/app/**/*.js'],
                dest: 'build/production.min.js'
            }
    });
};