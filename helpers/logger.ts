class Logger {
  debugModeEnabled: boolean;

  constructor(debugModeEnabled?: boolean) {
    this.debugModeEnabled = !!debugModeEnabled;
  }

  debug(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.debug('[InHotel]', ...args);
  }

  log(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.log('[InHotel]', ...args);
  }

  info(...args: any) {
    console.info('[InHotel]', ...args);
  }

  warn(...args: any) {
    console.warn('[InHotel]', ...args);
  }

  error(...args: any) {
    console.error('[InHotel]', ...args);
  }
}

export default Logger;
