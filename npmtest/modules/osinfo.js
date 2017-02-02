var os=require('os');
var timeFormat=require('./timeFormat');
var colors=require('colors');



function getOSinfo(){
	var type = os.type();
	var release = os.release();
	if(type === 'Darwin') {
			type = 'OSX';
	} 
	else if(type === 'Windows_NT') {
			type = 'Windows';
	}
	console.log('System:'.red+ type);
	console.log('Release:'.green+ release);
	var cpu = os.cpus()[0].model;
	console.log('CPU model:'.magenta+ cpu);
	timeFormat.print();
	var userInfo=os.userInfo();
	console.log('user name:'.blue+userInfo.username);
	console.log('home dir:'.rainbow+userInfo.homedir);
	  
  }  
  
  exports.print=getOSinfo;	
  	
  
