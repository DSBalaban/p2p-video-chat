module.exports = function(grunt) {
    grunt.config('autoprefixer', {
        dev: {
            multiple_files: {
                expand: true,
                flatten: true,
                src: '.temp/static/css/*.css',
                dest: 'public/static/css/'
            }
        },
        prod: {
            no_dest: {
                src: '.temp/static/css/style.css'
            }
        }
    });
};