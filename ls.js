module.exports = function(path){
	var fs = require('fs');
	fs.readdir(path, function(err, files){
		if(err){
			return err;
		}
		files = files.filter(function(file){
			return file[0]!=='.';
		});
		var names = files.join('        ');
		console.log(names);
	})
}
