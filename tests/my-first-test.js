var path = require('path')

module.exports = {
	'Page title is correct': function(test) {
		test
			.open('http://localhost:5555')
			.assert.title().is('Hello World', 'It has the correct title')
			.wait(1000)
			.assert.text('h1').is('muchos gracias!', 'The correct text')
			.screenshot(path.join(__dirname, 'screenshots', 'whatever.jpg'))
			.done();
	}
};