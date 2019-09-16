class AbstractLogger {
  constructor(config) {
    this._logLevel = config.logLevel;
  }

  log(message) {
    throw new Error('not implemented');
  }
}

export class Logger extends AbstractLogger {
  constructor(config) {
    super(config);
  }

  log(message) {
    switch (this._logLevel) {
      case 'debug':
        console.log(`${new Date().toISOString()}: ${message}`);
        break;

      case 'production':
        break;
    }
  }
}

export class LoggerWithHistory extends AbstractLogger {
  constructor(config) {
    super(config);
    this._history = [];
  }

  get history() {
    return this._history;
  }

  log(message) {
    this._history.push(`${new Date().toISOString()}: ${message}`);
  }
}