import { userDao } from "../dao/UserDao";
import { User } from "../model/UserModel";
import { createRouter } from "../utils/RouterCreator";

const router = createRouter();

router.prefix("/user");

router.get("/findUserInfo/:username", async (ctx) => {
  const { username } = ctx.params;
  ctx.body = ctx.success(`欢迎 ${username}`);
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

router.get("/findUser", async (ctx) => {
  ctx.success(await userDao.findUser());
});

router.get("/findOneUser", async (ctx) => {
  ctx.success(await userDao.findOneUser("yiwwhl", "shijing2"));
});

router.post("/addUser", async (ctx) => {
  const user: User = ctx.request.body;
  const res = await userDao.addUser(user);
  console.log(res);
  ctx.success(res);
});

router.get("/findAll", async (ctx) => {
  const allUsers = await userDao.findAllUser();
  ctx.trace(allUsers);
  ctx.success(allUsers);
});

export default router;
