var db = require('./db');

module.exports={

	getById: function(userid, callback){

		var sql = "select * from user where userid=?";
		db.getResults(sql, [userid], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where username=? and userpassword=?";

		db.getResults(sql, [user.username, user.password], function(result){

			if(result.length > 0 ) {
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from user";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(user, callback){
		var sql = "insert into user values('', ?, ?, ?, ?, ?)";
		db.execute(sql, [user.username, user.password, user.role, user.contactnumber, user.name], function(status){
			callback(status);
		});
	},
	update : function(user, callback){
		var sql = "update user set username=?, userpassword=?, contactnumber=?, name=? where id=?";		
			db.execute(sql, [user.username, user.password, user.contactnumber, user.name, user.id], function(status){
				callback(status);
			});
		
	},
	delete : function(user, callback){
		var sql = "delete from user where userid=?"
		db.execute(sql, [user.userid],  function(status){
			callback(status);
		});
	}
}	


