'use strict';

var cp = require("child_process");

module.exports = function(cwd, name, url) {
  cp.execSync('git remote add ' + name + ' ' + url, {cwd: cwd});
};
