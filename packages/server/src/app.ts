import Koa from "koa";
import ExceptionProcessor from "./middlewares/ExceptionProcessor";
import GlobalUtilsRegister from "./middlewares/GlobalUtilsRegister";
import RouterAutoLoader from "./middlewares/RouterAutoLoader";
import { DBConfig } from "./utils/DBConnector/DBConfigProducer";

DBConfig.initConfig();

const app = new Koa<{}, CustomContext>();

app.use(ExceptionProcessor());
app.use(GlobalUtilsRegister([app.context]));
app.use(
  RouterAutoLoader({
    rootRouterPrefix: "/bookshop",
  })
);

app.listen(6008);
app.context.trace("app runs on http://127.0.0.1:6008");
