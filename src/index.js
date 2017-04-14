'use strict'

function createLogger (options = {}) {
  const {level = 'info', name} = options
  const isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]'

  const levels = {
    trace: {
      priority: 10,
      symbol: '🔍',
      color: isNode ? '\x1b[34m%s\x1b[0m' : 'color: #6699cc;'
    },
    debug: {
      priority: 20,
      symbol: '🐛',
      color: isNode ? '\x1b[36m%s\x1b[0m' : 'color: #66cccc;'
    },
    info: {
      priority: 30,
      symbol: '✨',
      color: isNode ? '\x1b[32m%s\x1b[0m' : 'color: #99cc99;'
    },
    warn: {
      priority: 40,
      symbol: '⚠️',
      color: isNode ? '\x1b[33m%s\x1b[0m' : 'color: #ffcc66;'
    },
    error: {
      priority: 50,
      symbol: '🚨',
      color: isNode ? '\x1b[31m%s\x1b[0m' : 'color: #f2777a;'
    },
    fatal: {
      priority: 60,
      symbol: '💀',
      color: isNode ? '\x1b[31m%s\x1b[0m' : 'color: #f2777a;'
    }
  }

  if (!levels[level]) {
    throw Error('Invalid log level set')
  }

  function getTimeStamp () {
    const date = new Date()
    const pad = (time) => time.length === 2 ? time : `0${time}`
    return `${pad(date.getHours().toString())}:${pad(date.getMinutes().toString())}:${pad(date.getSeconds().toString())}`
  }

  const logger = {}

  const log = (level) => {
    const {symbol, color} = levels[level]
    const outputName = name ? `${name}:` : ''

    return (message, data = '') => {
      if (isNode) {
        const output = `${symbol} ${getTimeStamp()} ${outputName}${color} - ${color}`
        console.log(output, level, message, data)
        return data || message
      } else {
        const output = `${getTimeStamp()} ${outputName}%c${level} %c- %c${message}`
        console.log(output, color, '', color, data)
        return data || message
      }
    }
  }

  for (let current in levels) {
    logger[current] = levels[current].priority >= levels[level].priority
      ? log(current)
      : (message, data) => data || message
  }

  return logger
}

module.exports = createLogger
