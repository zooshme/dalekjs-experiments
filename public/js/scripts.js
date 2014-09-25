window.onload = function() {
	setTimeout(function() {
		console.log('hello world')
		document.getElementsByTagName('h1')[0].innerHTML = 'muchos gracias!';
	}, 1000);
};