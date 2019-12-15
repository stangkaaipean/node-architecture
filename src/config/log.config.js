import log4js from 'log4js';
import { config } from './config'
const dateTime = new Date().toLocaleDateString();
(() => {
  log4js.configure({
    appenders: {
      console: { type: 'console' },
      file: { type: 'file', filename: `logs/${config.logFileName}-${dateTime}.log` },
    },
    categories: { default: { appenders: ['console', 'file'], level: config.logLevel } }
  });
})();
