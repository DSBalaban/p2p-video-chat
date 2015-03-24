module.exports = function(grunt) {
    grunt.config('less', {
        dev: {
            files: [{
                expand: true,
                cwd: 'public/static/less',
                src: ['*.less'],
                dest: '.temp/static/css',
                ext: '.css'
            }]
        },
        prod: {
            files: [{
                expand: true,
                cwd: '.temp/static/less',
                src: ['*.less'],
                dest: '.temp/static/css',
                ext: '.css'
            }]
        }
    });
};