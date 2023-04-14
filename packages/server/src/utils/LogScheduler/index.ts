import log4js from "log4js";
import { LogMessage } from "./type";

enum LoggerLevel {
  TRACE = "trace",
  DEBUG = "debug",
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
  FATAL = "fatal",
}

log4js.configure({
  appenders: {
    console: {
      type: "console",
    },
    debugFile: {
      type: "file",
      filename: "logs/debug.log",
    },
  },
  categories: {
    [LoggerLevel.TRACE]: {
      appenders: ["console"],
      level: LoggerLevel.TRACE,
    },
    default: {
      appenders: ["console", "debugFile"],
      level: LoggerLevel.DEBUG,
    },
    [LoggerLevel.INFO]: {
      appenders: ["console"],
      level: LoggerLevel.INFO,
    },
    [LoggerLevel.WARN]: {
      appenders: ["console"],
      level: LoggerLevel.WARN,
    },
    [LoggerLevel.ERROR]: {
      appenders: ["console"],
      level: LoggerLevel.ERROR,
    },
    [LoggerLevel.FATAL]: {
      appenders: ["console"],
      level: LoggerLevel.FATAL,
    },
  },
});

export class LogScheduler {
  private constructor() {}
  static logger: log4js.Logger;
  static getLogger(appendersName: LoggerLevel) {
    return (this.logger = log4js.getLogger(appendersName));
  }
  static trace(message: LogMessage) {
    this.getLogger(LoggerLevel.TRACE);
    this.logger[LoggerLevel.TRACE](message);
  }
  static debug(message: LogMessage) {
    this.getLogger(LoggerLevel.DEBUG);
    this.logger[LoggerLevel.DEBUG](message);
  }
  static info(message: LogMessage) {
    this.getLogger(LoggerLevel.INFO);
    this.logger[LoggerLevel.INFO](message);
  }
  static warn(message: LogMessage) {
    this.getLogger(LoggerLevel.WARN);
    this.logger[LoggerLevel.WARN](message);
  }
  static error(message: LogMessage) {
    this.getLogger(LoggerLevel.ERROR);
    this.logger[LoggerLevel.ERROR](message);
  }
  static fatal(message: LogMessage) {
    this.getLogger(LoggerLevel.FATAL);
    this.logger[LoggerLevel.FATAL](message);
  }
  static getAllLoggers() {
    return {
      trace: this.trace.bind(this),
      debug: this.debug.bind(this),
      info: this.info.bind(this),
      warn: this.warn.bind(this),
      error: this.error.bind(this),
      fatal: this.fatal.bind(this),
    };
  }
}
