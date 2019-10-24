var db = require('./db');

module.exports={

	getByName: function(name, callback){

		var sql = "select * from media where medianame=?";
		db.getResults(sql, [name], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	
	getAll : function(callback){
		var sql = "select * from media";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(media, callback){
		var sql = "insert into media values(?, ?,  ?, ?)";
		db.execute(sql, [media.mediaid, media.medianame, media.catagories, media.subcatagories], function(status){
			callback(status);
		});
	},
	update : function(media, callback){
		var sql = "update media set medianame=?, catagories=?, subcatagories=? where id=?";		
			db.execute(sql, [media.medianame, media.catagories, media.subcatagories, media.mediaid], function(status){
				callback(status);
			});
		
	},
	delete : function(media, callback){
		//var sql = "insert into user values('','"+ user.username+"', '"+user.password+"')";
		db.execute(sql, [],  function(status){
			callback(status);
		});
	}
}	


