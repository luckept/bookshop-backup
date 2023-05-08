import { ResponseBody } from "../response";

declare interface CustomContext {
  success: (data?: any, message?: any) => ResponseBody;
  fail: (message?: any) => ResponseBody;
  debug: (message?: any) => any;
  trace: (message?: any) => any;
  warn: (message?: any) => any;
  info: (message?: any) => any;
  fatal: (message?: any) => any;
  error: (message?: any) => any;
}
