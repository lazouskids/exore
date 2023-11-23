export type UserToken = string;

export interface UserCredentials {
  username: string;
  password: string;
}

export interface IUserApplication {
  login: (username: string, password: string) => Promise<string>;
  logout: () => Promise<Boolean>;
}
