module.exports = function(grunt){
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', '**/**/*.js', '!node_modules/**/*.js']
        }
    });

grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.registerTask('default', ['jshint']);

};