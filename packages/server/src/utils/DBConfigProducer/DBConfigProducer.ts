import { ProjectEnv } from "@bookshop/typings/enum";
import { CommonUtils } from "../CommonUtils";
import { DBConnectConfig } from "./type";

export class DBConfig {
  static env: ProjectEnv;
  static config: DBConnectConfig;

  private constructor() {}

  static initConfig() {
    this.env = CommonUtils.getProjectEnv();
    this.config = this.getPresetConfig();
  }

  static getPresetConfig(): DBConnectConfig;
  static getPresetConfig(key: keyof DBConnectConfig): keyof any;
  static getPresetConfig(key?: keyof DBConnectConfig): any {
    const presetConfig = {
      development: {
        host: "localhost",
        user: "yiwwhl",
        password: "shijing",
        database: "core",
        port: 1234,
      },
      production: {
        host: "localhost",
        user: "yiwwhl",
        password: "shijing",
        database: "bookshop",
        port: 3306,
      },
    };

    if (!key) return presetConfig[this.env];
    return presetConfig[this.env][key];
  }
}
