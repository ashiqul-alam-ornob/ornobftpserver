//DECLARATION
var express  	= require('express');
var ejs  		= require('ejs');
var home  		= require('./controllers/home');
var login  		= require('./controllers/login');
var app 		= express();

//CONGIFURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use('/home', home);
app.use('/login', login);

//ROUTING
app.get('/', function(req, res){
	res.send('<h2>hello from express</h2>');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});


