var express = require('express');
var app = express();
var request = require('request');
var $ = require('jquery');


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//routes
//home route
app.get('/', function(req, res){
  res.render('home');
});

app.get('/getHero', function(req, res){
  var myUrl = "http://gateway.marvel.com:80/v1/public/characters/";
  var myKey = "4337f0a429d61d2d987288de6cbf339e";
  var charName = $('input[type="text"]').val();
  console.log('At getHero');
});

//listener
app.listen(3000, function(){
  console.log('Server Started!');
});
