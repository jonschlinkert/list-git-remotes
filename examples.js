var remotes = require('./');

console.log(remotes.sync('.'));

remotes('.', function(err, res) {
  console.log(err, res);
});
