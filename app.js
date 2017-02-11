 /**
 * Created by ISORTEGAH on 09/10/2016
 */
 var express = require('express');
 var app     = express();
 var http    = require('http');
 var port    = process.env.PORT || 3000;
 
 app = require('./config/routes')(app,express);

 var server = http.createServer(app);
 server.listen(port)
 console.log("\n//////////////////////////////////////////////");
 console.log("////// http server listening on %d /////////", port);
 console.log("//////////////////////////////////////////////");