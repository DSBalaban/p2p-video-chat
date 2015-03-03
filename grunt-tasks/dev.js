module.exports = function(grunt) {

    grunt.config('watch', {
        less: {
            files: ['public/static/less/**/*.less'],
            tasks: ['less:dev']
        }
    });

    grunt.registerTask('dev', function(env) {
        grunt.task.run([
            'watch'
        ])
    });

    grunt.registerTask('testbuild', function(env) {
        grunt.task.run([
            'less:dev',
            'concat:js',
            'concat:css',
            'cssmin',
            'requirejs'
        ])
    });
};