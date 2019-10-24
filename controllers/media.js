var express = require('express');
var userModel = require('./../models/movie-model');
var router = express.Router();


router.get('/addmedia', function(req, res){
	res.render('media/addmedia');
});

router.post('/addmedia', function(req, res){

	var media = {
		mediaid: req.body.mediaid,
		medianame: req.body.medianame,
		catagories: req.body.catagories,
		subcatagories: req.body.subcatagories,
	};
	
		mediaModel.insert(media, function(status){
		if(status){
			res.redirect('/media/medialist');
		}else{
			res.redirect('/media/mediauser');
		}
	});
});




router.get('/edit/:name', function(req, res){

	mediaModel.getById(req.params.name, function(results){
		res.render('media/edit', {media: results[0]});		
	});

});

router.post('/edit/:name', function(req, res){
	
	var name = {
		mediaid: req.body.mediaid,
		medianame: req.body.medianame,
		catagories: req.body.catagories,
		subcatagories: req.body.subcatagories,
		
		name: req.params.name
	};

	mediaModel.update(media, function(status){

		if(status){
			res.redirect('/media/medialist');
		}else{
			res.redirect('/media/addmedia');
		}
	});
});

router.get('/details/:name', function(req, res){

	userModel.getById(req.params.name, function(result){
		console.log(result);
		res.render('media/details', {user: result});
	});
});

module.exports = router;
