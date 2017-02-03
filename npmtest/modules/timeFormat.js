var os = require('os');
var colors = require('colors');
function timeFormat(){
  var uptime = os.uptime();
  var hours = Math.floor(uptime / 3600);
  var minutes = Math.floor((uptime - hours * 3600) / 60);
  var seconds = Math.floor(uptime - (hours * 3600+minutes * 60));
    if(uptime >= 3600){
	    console.log('uptime:'.cyan+hours+'h'+minutes+'min'+seconds+'s');
    } else{
	    console.log('uptime:'.cyan+hours+'h'+minutes+'min'+seconds+'s');
	}
}

exports.print = timeFormat;
