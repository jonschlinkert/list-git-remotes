'use strict';

var os = require('os');
var cp = require('child_process');
var extend = require('extend-shallow');
module.exports = listRemotes;

/**
 * Asynchronously list the remotes for a git repository
 */

function listRemotes(cwd, cb) {
  cp.exec('git remote -v', {cwd: cwd}, function(err, stdout, stderr) {
    if (err) {
      cb(err, null, String(stderr).trim());
      return;
    }
    cb(null, parseRemotes(stdout));
    return;
  });
}

/**
 * Synchronously list the remotes for a git repository
 */

listRemotes.sync = function(cwd, options) {
  var defaults = {timeout: 3000, killSignal: 'SIGKILL'};
  var opts = extend({}, defaults, options, {cwd: cwd});
  var buf = cp.execSync('git remote -v', opts);
  return parseRemotes(buf.toString());
};

/**
 * Parse the remotes into an object
 */

function parseRemotes(buf) {
  var lines = String(buf).trim().split(os.EOL);
  var remotes = {};
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var match = /([^\(]+)\((push|fetch)\)/.exec(line);
    if (match) {
      var segs = match[1].trim().split('\t');
      remotes[segs[0]] = segs[1];
    }
  }
  return remotes;
}
