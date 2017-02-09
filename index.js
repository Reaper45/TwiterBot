var Twit  = require('twit');

// console.log('This Shit is Working Good');
var config = require('./config');

var T = new Twit(config);

T.post(
	'statuses/update', 
	{ 
		status: '#TweeterBot @kev_barasa!' 
	}, 
	function(err, data, response) {
		console.log(data)
})
