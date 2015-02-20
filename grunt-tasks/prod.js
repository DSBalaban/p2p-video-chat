module.exports = function(grunt) {
    grunt.registerTask('prod', function(env) {
            grunt.task.run([
                'less:prod',
                'concat:js',
                'concat:css',
                'cssmin',
                'requirejs'
            ])
        }
    )
};