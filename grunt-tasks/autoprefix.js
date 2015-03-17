module.exports = function(grunt) {
    grunt.config('autoprefixer', {
        multiple_files: {
            expand: true,
            flatten: true,
            src: '.temp/static/css/*.css',
            dest: 'public/static/css/'
        }
    });
};