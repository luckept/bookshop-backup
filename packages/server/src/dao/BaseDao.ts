import { Sequelize } from "sequelize-typescript";
import { DBConfig } from "../utils/DBConfigProducer/DBConfigProducer";

class BaseDao {
  static instance = new BaseDao();
  connection!: Sequelize;
  constructor() {
    this.connectDatabase();
  }

  async connectDatabase() {
    DBConfig.initConfig();
    const { host, user, password, database, port } = DBConfig.getPresetConfig();

    this.connection = new Sequelize(database, user, password, {
      host,
      port,
      dialect: "mysql",
      define: { timestamps: false, freezeTableName: true },
    });
  }
}

export const baseDao = BaseDao.instance;
