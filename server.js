var deployd = require('deployd')
  , options = {port: process.argv[2]}
  , server = deployd(options)
  , my_http = require("http");  

var program = require('./node_modules/deployd/node_modules/commander')
  , deployd = require('./node_modules/deployd')
  , repl = require('./node_modules/deployd/lib/client/repl')
  , shelljs = require('./node_modules/deployd/node_modules/shelljs/global')
  , mongod = require('./node_modules/deployd/lib/util/mongod')
  , path = require('path')
  , fs = require('fs')
  , tty = require('tty')
  , remote = require('./node_modules/deployd/lib/client/remote')
  , request = require('./node_modules/deployd/node_modules/request')
  , package = require('./node_modules/deployd/package')
  , latestversionFile = path.join(__dirname, './node_modules/deployd/.latestversion')
  , Deployment = require('./node_modules/deployd/lib/client/deploy').Deployment
  , open = require('./node_modules/deployd/lib/util/open');

program
  .command('keygen')
  .description('\tgenerate a key for remote access (./.dpd/keys.json)')
  .action(function() {
    var Keys = require('./node_modules/deployd/lib/keys')
      , keys = new Keys();

    keys.create(function(err, key) {
      if(err) return console.error(err);
      console.log('created key', key.substr(0, 16) + '...');
    });
  });

program
  .command('showkey')
  .description('\tshows current key for connecting to remote dashboard (./.dpd/keys.json)')
  .action(function() {
    var Keys = require('./node_modules/deployd/lib/keys')
      , keys = new Keys();

    keys.getLocal(function(err, key) {
      if(err) return console.error(err);
      console.log("Copy this key for use in remote dashboard");
      console.log();
      console.log(key);
      console.log();
    });
  });

var Keys = require('./node_modules/deployd/lib/keys')
keys = new Keys();
keys.getLocal(function(err, key) {
console.log(key);
});


server.listen();
server.on('listening', function() {
  console.log(server.options.port); // 2403
});


//var fs = require('fs');
//
//var data = fs.readFileSync('./resources/pds/config.json'),
//      myObj;
//
//try {
//  myObj = JSON.parse(data);
//  console.dir(myObj);
//}
//catch (err) {
//  console.log('There has been an error parsing your JSON.')
//  console.log(err);
//}
