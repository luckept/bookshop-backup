import { Model } from "sequelize";
import { DataType } from "sequelize-typescript";
import { baseDao } from "../dao/BaseDao";

const connection = baseDao.connection;

export interface User {
  id: string;
  username: string;
  password: string;
  address: string;
  valid: number;
  birthday: string;
}

class UserModel {
  static create() {
    return connection.define<Model<User>>(
      "user",
      {
        id: {
          type: DataType.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataType.STRING(30),
          field: "username",
          allowNull: false,
        },
        password: {
          type: DataType.STRING(30),
          field: "password",
          allowNull: false,
        },
        address: {
          type: DataType.STRING(50),
          field: "address",
          allowNull: true,
        },
        valid: {
          type: DataType.TINYINT,
          field: "valid",
          allowNull: true,
        },
        birthday: {
          type: DataType.DATE,
          field: "birthday",
          allowNull: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  }
}

export const userModel = UserModel.create();
