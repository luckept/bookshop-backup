import { User, userModel } from "../model/UserModel";

class UserDao {
  static instance = new UserDao();
  findUser({ username, password }: any) {
    const sql = `select * from user where username="${username}" and password="${password}"`;
  }
  addUser(user: User) {
    userModel.create(user);
  }
}

export const userDao = UserDao.instance;
