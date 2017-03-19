<h1 align="center">🐶 runty-logger</h1>
<div align="center">
  <strong>Lightweight unoriginal logger</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/runty-logger">
    <img src="https://img.shields.io/npm/v/runty-logger.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/runty-logger">
  <img src="https://img.shields.io/npm/dm/runty-logger.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/runty-logger">
    <img src="https://img.shields.io/travis/tiaanduplessis/runty-logger.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Frunty-logger">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Frunty-logger.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/runty-logger">
    <img src="https://dependencyci.com/github/tiaanduplessis/runty-logger/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/runty-logger/blob/master/other/LICENSE">
    <img src="https://img.shields.io/npm/l/runty-logger.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/runty-logger/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/runty-logger.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/runty-logger/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/runty-logger.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20runty-logger!%20https://github.com/tiaanduplessis/runty-logger%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/runty-logger.svg?style=social" alt="Tweet"
		/>
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaanduplessis.co.za">Tiaan</a> and <a href="https://github.com/tiaanduplessis/runty-logger/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
	<li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

- Small & lightweight([less than 80 lines of code](index.js)).
- Colorized output that works in node & browser.
- 6 Log levels(`trace`, `debug`, `info`, `warn`, `error` and `fatal`).
- No Dependencies.

## Install

```sh
$ npm install --save runty-logger
```

Or

```sh
$ yarn add runty-logger
```

## Usage

```js

const createLogger = require('runty-logger')

const log = createlog({
	name: 'Foo',
	level: 'trace'
})

log.info('Hello') // ✨ 13:47:18 Foo:info - Hello {}
log.error('Bar') // 🚨 13:47:18 Foo:error - Bar

```

Will log depending on chosen log level:

```js

var log = require('runty-logger')({ level: 'info' })

log.trace('a') // will not do anything
log.debug('b') // will not do anything
log.info('c')  // ✨ 13:57:01 info - c
log.warn('d')  // ⚠️ 13:57:01 warn - d
log.error('e') // 🚨 13:57:01 error - e
log.fatal('f') // 💀 13:57:01 fatal - f

```

## API

The module exports a single `createLogger` function that accepts an object with a `level`(default `info`) and optional `name` property.


## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
