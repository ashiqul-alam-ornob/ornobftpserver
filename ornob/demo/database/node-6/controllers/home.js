var express = require('express');
var mysql   = require('mysql');
var router = express.Router();

router.get('/', function(req, res){
	var connection = mysql.createConnection({
		host:'localhost',
		user: 'root',
		password: '',
		database: 'node1'
	});
	 
	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	  console.log('connected as id ' + connection.threadId);
	});

	var sql = "select * from user where username='"+req.cookies['username']+"'";
	connection.query(sql, function(error, results){

		if(req.cookies['username'] != null){
			res.render('home/index', results[0]);

		}else{
			res.redirect('/login');
		}

	});
	
	connection.end(function(err) {
	  console.log("Database connection is terminated.");
	});

});

router.get('/test/:name/:id', function(req, res){

	res.send(req.params.id+ "|"+req.params.name)
})



module.exports = router;


