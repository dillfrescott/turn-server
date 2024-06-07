var Turn = require('node-turn');
var server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    dill: "q5asWQkqx5uALw"
  }
});
server.start();
