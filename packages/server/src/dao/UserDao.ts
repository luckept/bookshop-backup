import { baseDao } from "./BaseDao";

class UserDao {
  static instance = new UserDao();
  findUser({ username, password }: any) {
    const sql = `select * from user where username="${username}" and password="${password}"`;
    return baseDao.query<AnyObject[]>(sql);
  }
}

export const userDao = UserDao.instance;
