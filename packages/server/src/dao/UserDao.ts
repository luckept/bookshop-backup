import { Op } from "sequelize";
import { User, userModel } from "../model/UserModel";

class UserDao {
  static instance = new UserDao();
  findUser() {
    return userModel.findAll({
      raw: true,
      attributes: ["username", "password"],
    });
  }
  addUser(user: User) {
    return userModel.create(user);
  }
  findAllUser() {
    return userModel.findAll({
      raw: true,
    });
  }
  findOneUser(username: string, password: string) {
    return userModel.findAll({
      raw: true,
      where: {
        [Op.or]: [{ username }, { password }],
      },
    });
  }
}

export const userDao = UserDao.instance;
