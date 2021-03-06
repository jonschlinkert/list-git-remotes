'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var remotes = require('..');
var addRemote = require('./support/remote');
var gfc = require('gfc');

var fixtures = path.resolve.bind(path, __dirname, 'fixtures');

describe('list-git-remotes', function() {
  describe('main export', function() {
    it('should export a function', function() {
      assert.equal(typeof remotes, 'function');
    });

    it('should expose a .sync method', function() {
      assert.equal(typeof remotes.sync, 'function');
    });
  });

  describe('remotes', function() {
    before(function(cb) {
      rimraf.sync(fixtures());
      gfc(fixtures(), function(err) {
        if (err) {
          cb(err);
          return;
        }
        addRemote(fixtures(), 'foo', 'https://foo.git');
        addRemote(fixtures(), 'bar', 'https://bar.git');
        addRemote(fixtures(), 'baz', 'https://baz.git');
        cb();
      });
    });

    after(function(cb) {
      rimraf(fixtures(), cb);
    });

    it('should get remotes (async)', function(cb) {
      remotes(fixtures(), function(err, obj) {
        if (err) {
          cb(err);
          return;
        }
        assert.equal(obj.foo, 'https://foo.git');
        assert.equal(obj.bar, 'https://bar.git');
        assert.equal(obj.baz, 'https://baz.git');
        cb();
      });
    });

    it('should get remotes (sync)', function() {
      var obj = remotes.sync(fixtures());
      assert.equal(obj.foo, 'https://foo.git');
      assert.equal(obj.bar, 'https://bar.git');
      assert.equal(obj.baz, 'https://baz.git');
    });
  });
});
