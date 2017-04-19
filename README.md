# list-git-remotes [![NPM version](https://img.shields.io/npm/v/list-git-remotes.svg?style=flat)](https://www.npmjs.com/package/list-git-remotes) [![NPM monthly downloads](https://img.shields.io/npm/dm/list-git-remotes.svg?style=flat)](https://npmjs.org/package/list-git-remotes) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/list-git-remotes.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/list-git-remotes) [![Windows Build Status](https://img.shields.io/appveyor/ci/jonschlinkert/list-git-remotes.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/jonschlinkert/list-git-remotes)

> List the remotes for a local git repository. Sync and async.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save list-git-remotes
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add list-git-remotes
```

## Usage

```js
var remotes = require('list-git-remotes');

console.log(remotes.sync('some/project'));
//=> { origin: 'https://github.com/jonschlinkert/list-git-remotes.git' }

remotes('some/project', function(err, res) {
  if (err) throw err;
  console.log(res);
  //=> { origin: 'https://github.com/jonschlinkert/list-git-remotes.git' }
});
```

## About

### Related projects

* [git-branch](https://www.npmjs.com/package/git-branch): Get the current branch for a local git repository. | [homepage](https://github.com/jonschlinkert/git-branch "Get the current branch for a local git repository.")
* [git-user-email](https://www.npmjs.com/package/git-user-email): Get the email address of the current user from git config. | [homepage](https://github.com/jonschlinkert/git-user-email "Get the email address of the current user from git config.")
* [git-user-name](https://www.npmjs.com/package/git-user-name): Get a user's name from git config at the project or global scope, depending on… [more](https://github.com/jonschlinkert/git-user-name) | [homepage](https://github.com/jonschlinkert/git-user-name "Get a user's name from git config at the project or global scope, depending on what git uses in the current context.")
* [git-username](https://www.npmjs.com/package/git-username): Get the username from a git remote origin URL. | [homepage](https://github.com/jonschlinkert/git-username "Get the username from a git remote origin URL.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.5.0, on April 19, 2017._