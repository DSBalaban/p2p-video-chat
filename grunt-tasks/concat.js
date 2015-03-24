module.exports = function(grunt) {

    grunt.config('concat', {
        js: {
            src: ['public/app/**/*.js'],
            dest: '.temp/app/app.js'
        },
        css: {
            src: ['public/static/css/**/*.css'],
            dest: '.temp/static/css/style.css'
        },
        less: {
            src: ['public/static/less/**/*.less'],
            dest: '.temp/static/less/style.less'
        }
    })
};