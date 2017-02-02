process.stdin.setEncoding("utf-8");

console.log('type /exit to exit,/ver to display node version , /lang for system language\n')  

process.stdin.on("readable", function(){
var input= process.stdin.read();

if(input !== null){
  var instruction=input.toString().trim();

  switch(instruction){ 
  case "/exit":  process.stdout.write("bye bye\n");
    process.exit();
   break;
   
  case "/ver":  process.stdout.write("your node version is " + process.versions.node+"\n");
  break;
 
  case "/lang":process.stdout.write("your system language is " + process.env.LANG+"\n"); 
  break;

  default:process.stderr.write("wrong instruction\n");}
}});
