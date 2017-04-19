'use strict';

var os = require('os');
var cp = require('child_process');
var extend = require('extend-shallow');

/**
 * asynch
 */

function remotes(cwd, cb) {
  if (typeof cwd === 'function') {
    cb = cwd;
    cwd = process.cwd();
  }

  cp.exec('git remote -v', {cwd: cwd}, function(err, stdout, stderr) {
    if (err) {
      cb(err, null, String(stderr).trim());
      return;
    }
    cb(null, parseRemotes(stdout));
  });
}

/**
 * sync
 */

remotes.sync = function(cwd, options) {
  if (typeof cwd !== 'string') {
    options = cwd;
    cwd = process.cwd();
  }

  var defaults = {timeout: 3000, killSignal: 'SIGKILL'};
  var opts = extend({}, defaults, options, {cwd: cwd});
  var buf = cp.execSync('git remote -v', opts);
  return parseRemotes(String(buf));
};

/**
 * Parse the remotes into an object
 */

function parseRemotes(str) {
  var lines = str.trim().split(os.EOL);
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

/**
 * Expose `remotes`
 */

module.exports = remotes;
