import { merge } from "lodash";
import { MiddleWareFn } from "../../server";
import { success, fail } from "../../utils/ResponseBodyCreator";
import { LogScheduler } from "../../utils/LogScheduler/index";

function GlobalUtilsRegister(customMountBodys: AnyObject[]): MiddleWareFn {
  const allUtils = {
    success,
    fail,
    ...LogScheduler.getAllLoggers(),
  };

  // 通过自定义挂载主体可将通用工具挂载到任意实例上使用，而不仅是中间件内部的 ctx
  customMountBodys.forEach((mountBody) => {
    merge(mountBody, allUtils);
  });

  return async (ctx, next) => {
    // ctx
    merge(ctx, allUtils);

    await next();
  };
}

export default GlobalUtilsRegister;
