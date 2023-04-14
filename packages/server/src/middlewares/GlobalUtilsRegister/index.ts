import { merge } from "lodash";
import { MiddleWareFn } from "../../server";
import { success, fail } from "../../utils/ResponseBodyCreator";
import { LogScheduler } from "../../utils/LogScheduler/index";

function GlobalUtilsRegister(): MiddleWareFn {
  return async (ctx, next) => {
    merge(ctx, {
      success,
      fail,
      ...LogScheduler.getAllLoggers(),
    });

    await next();
  };
}

export default GlobalUtilsRegister;
