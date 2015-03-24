module.exports = function(grunt) {
    grunt.config('copy', {
        prod: {
            files: [
                {
                    expand: true,
                    cwd: 'public/app/',
                    src: ['**/*.html', '!public/app/**/*.js', '!index.html', '../static/img/*.*'],
                    dest: 'deploy/public/app/'
                }
            ]
        }
    })
};