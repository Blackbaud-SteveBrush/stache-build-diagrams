module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        copy: {
            scripts: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/gitgraph.js/build/',
                        dest: 'build/js',
                        src: 'gitgraph.min.js'
                    },
                    {
                        expand: true,
                        cwd: 'src/scripts',
                        dest: 'build/js',
                        src: '*.js'
                    }
                ]
            },
            styles: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/gitgraph.js/build/',
                        dest: 'build/css',
                        src: 'gitgraph.css'
                    }
                ]
            },
            html: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['index.html'],
                    dest: 'build'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['copy:scripts']
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['copy:html']
            }
        }
    });

    grunt.registerTask('default', ['copy', 'watch']);
};
