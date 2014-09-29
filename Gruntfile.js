var path = require('path');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		dalek: {
			options: {
				browser: ['chrome'],
				reporter: ['console', 'html'],
				dalekfile: false,
				advanced: {
					browsers: [{
						chrome: {
							port: 4000
						}
					}]
				}
			},
			dist: {
				src: ['tests/*.js']
			},

		}
	});

	grunt.loadNpmTasks('grunt-dalek');

	grunt.registerTask('default', ['dalek']);
}



