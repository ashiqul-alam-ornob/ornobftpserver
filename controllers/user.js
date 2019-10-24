var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('*', function(req, res, next){

	if(req.cookies['username'] != null){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/userlist', function(req, res){

		userModel.getAll(function(results){
			if(req.cookies['username'] != null){
				res.render('user/index', {user: results});
			}else{
				res.redirect('/login');
			}
		});
});

router.get('/adduser', function(req, res){
	res.render('user/adduser');
});

router.post('/adduser', function(req, res){

	var user = {
		
		username: req.body.username,
		password: req.body.password,
		role: req.body.role,
		contactnumber: req.body.contactnumber,
		name: req.body.name
	};
	
		userModel.insert(user, function(status){
		if(status){
			res.redirect('/user/userlist');
		}else{
			res.redirect('/user/adduser');
		}
	});
});


router.get('/addmoderator', function(req, res){
	res.render('user/addmoderator');
});

router.post('/addmoderator', function(req, res){

	var user = {
		
		username: req.body.username,
		password: req.body.password,
		role: req.body.role,
		contactnumber: req.body.contactnumber,
		name: req.body.name
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/user/moderatorlist');
		}else{
			res.redirect('/user/addmoderator');
		}
	});
});

router.get('/edit/:userid', function(req, res){

	userModel.getById(req.params.userid, function(results){
		res.render('user/edit', {user: results[0]});		
	});

});

router.post('/edit/:userid', function(req, res){
	
	var user = {
		userid: req.body.userid,
		username: req.body.username,
		password: req.body.password,
		role: req.body.role,
		contactnumber: req.body.contactnumber,
		name: req.body.name,
		
		userid: req.params.userid
	};

	userModel.update(user, function(status){

		if(status){
			res.redirect('/user/userlist');
		}else{
			res.redirect('/user/adduser');
		}
	});
});

router.get('/details/:userid', function(req, res){

	userModel.getById(req.params.userid, function(result){
		console.log(result);
		res.render('user/details', {user: result});
	});
});

module.exports = router;
