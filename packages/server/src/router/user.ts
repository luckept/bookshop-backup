import { createRouter } from "../utils/RouterCreator";

const router = createRouter();

router.prefix("/user");

router.get("/findUserInfo/:username", async (ctx) => {
  const { username } = ctx.params;
  ctx.body = ctx.success(`欢迎 ${username}`);
});

router.post("/addUser", async (ctx) => {
  const user = ctx.request.body;
  ctx.body = user;
});

router.get("/autoloader", async (ctx) => {
  ctx.success("测试", "ok");

  ctx.trace("debug info");
  ctx.debug("debug info");
  ctx.info("debug info");
  ctx.warn("debug info");
  ctx.error("debug info");
  ctx.fatal("debug info");
});

export default router;
