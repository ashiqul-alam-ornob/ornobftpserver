var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	var data ={
		name: 'node',
		version: '4.1.8',
		obj2: {
			date: '12/22/33333',
			time: '12:30pm'
		}
	}; 

	if(req.cookies['username'] != null){
		res.render('home/index', data);
	}else{
		res.redirect('/login');
	}

});

router.get('/test/:name/:id', function(req, res){

	res.send(req.params.id+ "|"+req.params.name)
})



module.exports = router;


