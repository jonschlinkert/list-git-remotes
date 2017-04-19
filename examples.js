var remotes = require('./');

console.log(remotes.sync('.git'));

remotes('./.git', function(err, res) {
  console.log(err, res);
});
