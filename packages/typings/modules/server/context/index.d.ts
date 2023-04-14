import { ResponseBody } from "../response";

declare interface CustomContext {
  success: (data?: any, message?: any) => ResponseBody;
  fail: (message?: any) => ResponseBody;
  debug: (message?: string) => any;
  trace: (message?: string) => any;
  warn: (message?: string) => any;
  info: (message?: string) => any;
  fatal: (message?: string) => any;
  error: (message?: string) => any;
}
