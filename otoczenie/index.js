var fs=require('fs');
var colors=require('colors');

fs.readdir('./', 'utf-8', function(err, files){
	console.log('wyswietlam zawartosc katalogu:'.green)
	console.log(files);
	fs.writeFile('dir.txt', files, function(err){
		if (err) throw err;
		console.log('plik zapisany'.magenta);
		console.log('zawartosc pliku dir.txt to:'.green)
		fs.readFile('dir.txt', 'utf-8', function(err, data){
			console.log(data);
			
		})
	})
	
})