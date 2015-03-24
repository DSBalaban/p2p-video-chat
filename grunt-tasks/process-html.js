module.exports = function(grunt) {
    grunt.config('processhtml', {
        prod: {
            files: {
                'deploy/public/index.html': ['public/index.html']
            }
        }
    })
};