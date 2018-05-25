
# runty-logger
[![package version](https://img.shields.io/npm/v/runty-logger.svg?style=flat-square)](https://npmjs.org/package/runty-logger)
[![package downloads](https://img.shields.io/npm/dm/runty-logger.svg?style=flat-square)](https://npmjs.org/package/runty-logger)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/runty-logger.svg?style=flat-square)](https://npmjs.org/package/runty-logger)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/runty-logger.svg)](https://greenkeeper.io/)

> Pure, lightweight, multi-level, flexible logger

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install runty-logger
$ # OR
$ yarn add runty-logger
```

## Usage

```js
const createLogger = require('runty-logger')

// All arguments are optional. Shown with defaults
const log = createLogger({
  level: 'info',
  name: '',
  levels: {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
  },
  // Control how the message is logged
  log: function defaultLog (timestamp, level = '', name) {
    const outputName = name && name.length ? `${name} -` : '-'
    return (message, data = '') => {
      const output = `${timestamp} ${level.toUpperCase().padEnd(5)} ${outputName}`
      console.log(output, message, data)
      return data || message
    }
  }
})

log.trace('a') // will not do anything
log.debug('b') // will not do anything
log.info('c') // 12:37:33 INFO  - c
log.warn('d') // 12:37:33 WARN  - d
log.error('e') // 12:37:33 ERROR - e
log.fatal('f') // 12:37:33 FATAL - f

const someBool = true
const someObject = {foo: 5}

// Returns value provided for cleaning logging
if (log.info('Some bool set:', someBool)) { // 12:37:33 INFO  - Some bool set: true
  log.info('Ran!') // 12:37:33 INFO  - Ran!
}

if (log.info('someObject.foo', someObject.foo) > 1) { // 12:37:33 INFO  - someObject.foo 5
  log.info('Ran!') // 12:37:33 INFO  - Ran!
}

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    