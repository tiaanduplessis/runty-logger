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
