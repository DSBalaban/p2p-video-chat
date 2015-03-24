module.exports = function(grunt) {
    grunt.registerTask('deploy', function(env) {
            grunt.task.run([
                'concat:less',
                'less:prod',
                'concat:js',
                'autoprefixer:prod',
                'cssmin',
                'requirejs',
                'copy:prod',
                'processhtml'
            ])
        }
    )
};