module.exports = function(grunt) {
    grunt.config('cssmin', {
        target: {
            options: {
                rebase: false
            },
            files: [{
                expand: true,
                cwd: '.temp/static/css',
                src: ['*.css', '!*.min.css'],
                dest: 'deploy/public/static/css',
                ext: '.min.css'
            }]
        }
    })
};