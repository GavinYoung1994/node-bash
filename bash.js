function simulator(cmd){
	if(cmd === 'pwd'){
		var pwd = require('./pwd.js');
		pwd();
	}else if(cmd === 'ls'){
		var ls = require('./ls.js');
		ls(__dirname);
	}else if(cmd === 'mkdir'){
		var mkdir = require('./mkdir');
		mkdir(process.argv[3]);
	}	
}

simulator(process.argv[2]);