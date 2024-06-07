var Turn = require('node-turn');
var server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    3azAmBrKaGBsX2: "q5asWQkqx5uALw"
  }
});
server.start();
