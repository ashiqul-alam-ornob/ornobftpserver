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
	res.render('home/index', data);
});

router.get('/test', function(req, res){
	res.send('test works')
})



module.exports = router;


