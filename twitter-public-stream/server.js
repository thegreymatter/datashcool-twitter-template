
var Twitter = require('twitter');
var config = require('config');
var kafka = require('kafka');

var twitterConfig = config.get('twitterApi');
var client = new Twitter(twitterConfig);

var stream = client.stream('statuses/filter', {track: 'data'});

stream.on('data', function(event) {
  console.log(event && event.text);
});
