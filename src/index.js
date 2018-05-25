function pad (val = '0') {
  return val.toString().padStart(2, '0')
}

function getTimeStamp () {
  const date = new Date()
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

function identity (message, data) {
  return data || message
}

const defaultLevels = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
}

function defaultLog (timestamp, level = '', name) {
  const outputName = name && name.length ? `${name} -` : '-'
  return (message, data = '') => {
    const output = `${timestamp} ${level.toUpperCase().padEnd(5)} ${outputName}`
    console.log(output, message, data)
    return data || message
  }
}

function createLogger ({level = 'info', name = '', levels = defaultLevels, log = defaultLog} = {}) {
  if (!levels[level]) {
    const levelStr = Object.keys(levels).join(', ')
    throw Error(`Invalid log level set. Please select level of ${levelStr}`)
  }

  const logger = {}

  for (let current in levels) {
    logger[current] = levels[current] >= levels[level]
      ? log(getTimeStamp(), current, name)
      : identity
  }

  return logger
}

module.exports = createLogger
