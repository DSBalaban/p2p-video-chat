module.exports = function(grunt) {
    grunt.config('cssmin', {
        target: {
            files: [{
                expand: true,
                cwd: '.temp/static/css',
                src: ['*.css', '!*.min.css'],
                dest: 'build/static/css',
                ext: '.min.css'
            }]
        }
    })
};