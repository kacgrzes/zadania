var os =  require('os');
var osinfo = require('./modules/osinfo');
 
process.stdin.setEncoding("utf-8");

process.stdin.on('readable', function(){
  var input=process.stdin.read();
  
  if(input !==null){
    var instruction = input.trim();
    switch(instruction){
        case '/exit': process.stdout.write('Quitting App\n');
        process.exit();
        break;
        case '/sayhello':process.stdout.write('hello\n');
        break;
	    case '/getOSinfo':osinfo.print();
        break;
        default:process.stderr.write('wrong instruction');
	  }
    }
})
