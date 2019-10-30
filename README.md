# Find package cache [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/find-pkg-cache/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/find-pkg-cache)

A cache directory automatically created specifically for your package to use.

[![NPM Badge](https://nodei.co/npm/find-pkg-cache.png)](https://npmjs.com/package/find-pkg-cache)

## Install

```sh
npm install find-pkg-cache
```

## Usage

```js
const cacheDir = require("find-pkg-cache");

console.log(cacheDir);
//=> '/home/richiebendall/find-pkg-cache/node_modules/.cache/find-pkg-cache'
```

## API

### pkgCache

Type: `string`

The directory to use.
