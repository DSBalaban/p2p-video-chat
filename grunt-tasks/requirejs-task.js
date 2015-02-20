module.exports = function(grunt) {
    grunt.config('requirejs', {
        compile: {
            options: {
                baseUrl: "public/app",
                mainConfigFile: "public/app/main.js",
                name: 'main',
                out: "build/main.js",
                uglify2: {
                    mangle: false
                },
                optimize: 'uglify2'
            }
        }
    })
};