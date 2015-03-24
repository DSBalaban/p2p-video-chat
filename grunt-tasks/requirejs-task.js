module.exports = function(grunt) {
    grunt.config('requirejs', {
        compile: {
            options: {
                baseUrl: "public/app",
                mainConfigFile: "public/app/main.js",
                name: 'main',
                out: "deploy/public/app/main.js",
                uglify2: {
                    mangle: false
                },
                optimize: 'uglify2'
            }
        }
    })
};