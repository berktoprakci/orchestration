const http = require('http'),
      fs = require('fs');

const handler = (request, response) => {
  fs.readFile('/etc/config/user.log.level', 'UTF-8', (err, fileData) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("'USERNAME' (from env variable): " + process.env.USERNAME + '<br />');
      response.write("'PASSWORD' (from env variable): " + process.env.PASSWORD + '<br />');
      response.write("'USERADMIN' (from env variable): " + process.env.USERADMIN + '<br />');
      response.write("'user.log.level' (from volume): " + fileData);
      response.end();
    }
  });
};

const www = http.createServer(handler);
www.listen(9000);