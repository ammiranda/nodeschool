var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];

http.get(urls[0], function(res){
  var str = '';
  res.on('data', function(data){
    str += data;
  });

  res.on('end', function(){
    console.log(str);
    http.get(urls[1], function(res){
      var str = '';
      res.on('data', function(data){
        str += data;
      });

      res.on('end', function(){
        console.log(str);
        http.get(urls[2], function(res){
          var str = '';
          res.on('data', function(data){
            str += data;
          });

          res.on('end', function(){
            console.log(str);
          });
        });
      });
    });
  });
});
