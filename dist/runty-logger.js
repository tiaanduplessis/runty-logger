(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

const isNode = typeof process === 'object';

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
};

function getTimeStamp () {
  const date = new Date();
  const pad = (time) => time.length === 2 ? time : `0${time}`;
  return `${pad(date.getHours().toString())}:${pad(date.getMinutes().toString())}:${pad(date.getSeconds().toString())}`
}

function createLogger (options = {}) {
  const {level = 'info', name} = options;

  if (!levels[level]) {
    throw Error('Invalid log level set')
  }

  const logger = {};

  const log = (level) => {
    const {symbol, color} = levels[level];
    const outputName = name ? `${name}:` : '';

    return (message, data = '') => {
      if (isNode) {
        const output = `${symbol} ${getTimeStamp()} ${outputName}${color} - ${color}`;
        console.log(output, level, message, data);
      } else {
        const output = `${symbol} ${getTimeStamp()} ${outputName}%c${level} %c- %c${message}`;
        console.log(output, color, '', color, data);
      }
    }
  };

  for (let current in levels) {
    logger[current] = levels[current].priority >= levels[level].priority
      ? log(current)
      : () => {
      };
  }

  return logger
}

module.exports = createLogger;

})));
//# sourceMappingURL=runty-logger.js.map
