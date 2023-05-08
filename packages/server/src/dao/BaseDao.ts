import mysql, { Connection } from "mysql";
import { DBConfig } from "../utils/DBConfigProducer/DBConfigProducer";

class BaseDao {
  static instance = new BaseDao();
  connection!: Connection;
  constructor() {
    this.connectDatabase();
  }

  async connectDatabase() {
    DBConfig.initConfig();
    this.connection = await mysql.createConnection(DBConfig.config);
  }

  async query<T>(sql: string) {
    return new Promise<T>((resolve, reject) => {
      this.connection.query(sql, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
}

export const baseDao = BaseDao.instance;
