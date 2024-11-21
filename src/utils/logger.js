import log from 'loglevel'

log.setLevel('debug')

const logger = {
  debug: (message) => log.debug(message),
  info: (message) => log.info(message),
  warn: (message) => log.warn(message),
  error: (message) => log.error(message),
}

export default logger
