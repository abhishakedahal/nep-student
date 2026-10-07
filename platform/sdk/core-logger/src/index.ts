// Platform SDK: core-logger
import pino from 'pino';

export interface LoggerOptions {
  serviceName: string;
  logLevel?: string;
}

export function createServiceLogger(options: LoggerOptions) {
  const isProd = process.env.NODE_ENV === 'production';
  return pino({
    name: options.serviceName,
    level: options.logLevel || process.env.LOG_LEVEL || (isProd ? 'info' : 'debug'),
    transport: !isProd
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname'
          }
        }
      : undefined,
    base: {
      service: options.serviceName,
      env: process.env.NODE_ENV || 'development'
    }
  });
}
