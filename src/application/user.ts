import { IUserApplication } from '../domain/user';
import { APIService } from '../services/api/api';

const { login: loginUser } = new APIService();

export class UserApplication implements IUserApplication {
  async login(username: string, password: string) {
    const token = await loginUser(username, password);
    return token;
  }

  async logout() {
    return await Promise.resolve(true);
  }
}
