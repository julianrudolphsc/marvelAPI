var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//routes
//home route
app.get('/', function(req, res){
  res.render('home');
});

//listener
app.listen(3000, function(){
  console.log('Server Started!');
});
