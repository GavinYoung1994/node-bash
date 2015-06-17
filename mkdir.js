module.exports = function(name){
	var fs = require('fs');
	fs.mkdir(__dirname+'/'+name,function(err){
		if(err) return err;
	})
}