var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var extname = '.' + process.argv[3];

fs.readdir(file, function(err, list){
   for (var i = 0; i < list.length; i++){
     if (path.extname(list[i]) === extname){
       console.log(list[i]);
     }
   }
});
