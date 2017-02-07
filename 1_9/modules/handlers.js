var fs = require('fs');
var formidable = require('formidable');

exports.welcome = function(request, response){
	console.log("Rozpoczynam obsługę żądania welcome");
	fs.readFile('./templates/start.html', function(err, html){
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		response.write(html);
		response.end();
	});
}

exports.upload = function(request, response) {
	console.log("Rozpoczynam obsługę żądania upload");
	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files) {
		fs.renameSync(files.upload.path, "test.png");
		fs.readFile('./templates/upload.html', function(err, html){
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		response.write(html);
		response.end();
	});
  })
}

exports.show = function(request, response) {
    fs.readFile('test.png', 'binary', function(error, file) {
    	console.log("Rozpoczynam pobieranie obrazka");
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, 'binary');
        response.end();
    });
}

exports.css = function(request, response){
	fs.readFile('./css/style.css', function(error, css) {
		if (error) console.log(error);
		console.log("Rozpoczynam pobieranie styli");
		response.writeHead(200, {"Content-Type": "text/css; charset=utf-8"});
	    response.write(css);
	    response.end();
	})

}

exports.error = function(request, response){
	console.log("Nie wiem co mam zrobić");
	response.write("404 :(");
	response.end();
}