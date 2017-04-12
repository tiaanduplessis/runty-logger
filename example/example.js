const createLogger = require('../index')

const log = createLogger()

log.trace('a') // will not do anything
log.debug('b') // will not do anything
log.info('c')  // ✨ 13:57:01 info - c
log.warn('d')  // ⚠️ 13:57:01 warn - d
log.error('e') // 🚨 13:57:01 error - e
log.fatal('f') // 💀 13:57:01 fatal - f

const someBool = true
if (log.info('Some bool set:', someBool)) {
	console.log('Ran!')
}
