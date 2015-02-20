module.exports = function(grunt) {

    grunt.registerTask('dev', function(env) {
        grunt.task.run([
            'less:dev',
            'concat:js',
            'concat:css',
            'cssmin',
            'requirejs'
        ])
    });
};