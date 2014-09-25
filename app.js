var feathers = require('feathers');
var app = feathers();
var path = require('path');

app.configure(feathers.rest());
app.use(feathers.static(path.join(__dirname, 'public')));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index')
});

app.listen(5555, function(err) {
	if (err) {
		console.log('Application could not be started')	
	} else {
		console.log('Application started')	
	}
}); 