var os=require('os');
var timeFormat=require('./timeFormat');



function getOSinfo(){
	var type = os.type();
	var release = os.release();
	if(type === 'Darwin') {
			type = 'OSX';
	} 
	else if(type === 'Windows_NT') {
			type = 'Windows';
	}
	console.log('System:', type);
	console.log('Release:', release);
	var cpu = os.cpus()[0].model;
	console.log('CPU model:', cpu);
	timeFormat.print();
	var userInfo=os.userInfo();
	console.log('user name:'+userInfo.username);
	console.log('home dir:'+userInfo.homedir);
	  
  }  
  
  exports.print=getOSinfo;	
  