import { ProjectEnv } from "@bookshop/typings/enum";

export interface DBConnectConfig {
  host: string;
  user: string;
  password: string;
  port: number;
  database: string;
}

export type ProjectEnv_Config_Map = {
  [ProjectEnv.DEV]: DBConnectConfig;
  [ProjectEnv.PROD]: DBConnectConfig;
};
