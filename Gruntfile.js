module.exports = function(grunt) {
	'use strict';
	require('time-grunt')(grunt);

	grunt.initConfig({
		watch: {
			js: {
				files: ['app/scripts/*.js'],
				tasks: ['jshint', 'concat'],
				options: {
					livereload: true
				}
			},
			lib: {
				files: [
					'lib/*.js',
					'app.js',
					'config.js',
					'config.js.example'
				],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['app/less/*.less'],
				tasks: ['less:dev']
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'app.js',
				'config.js',
				'config.js.example',
				'app/scripts/*.js',
				'lib/* .js '
			]
		},
		less: {
			all: {
				files: {
					'app/static/css/styles.css': 'app/less/*.less'
				}
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			all: {
				src: ['app/scripts/*.js', 'app/scripts/vendor/*.js'],
				dest: 'app/static/js/script.js',
			},
		},
		uglify: {
			dist: {
				files: {
					'app/static/js/script.min.js': ['app/static/js/script.js']
				}
			}
		},
		copy: {
			less: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'bower_components',
					dest: 'app/less',
					flatten: true,
					src: [
						'normalize-less/*.less'
					]
				}]
			},
			js: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'bower_components',
					dest: 'app/scripts/vendor',
					flatten: true,
					src: [
						'momentjs/*.js',
						'jquery/jquery.js'
					]
				}]
			},

		},
		cssmin: {
			'dist': {
				'src': ['app/static/css/styles.css'],
				'dest': 'app/static/css/styles.min.css'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-yui-compressor');

	// JS distribution task.
	grunt.registerTask('default', ['copy', 'jshint', 'less', 'concat', 'watch']);
	grunt.registerTask('dist', ['copy', 'jshint', 'less', 'cssmin', 'uglify']);

};