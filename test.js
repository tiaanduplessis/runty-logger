/* eslint-env jest */
'use strict'

const createLogger = require('./src')

test('should export createLogger function', () => {
  expect(createLogger).toBeDefined()
  expect(typeof createLogger).toBe('function')
})

test('should have logger functions', () => {
  const logger = createLogger()
  expect(logger.info).toBeDefined()
  expect(logger.warn).toBeDefined()
})
