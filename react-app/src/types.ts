export interface User {
  email: string;
  password: string;
  avatar?: string;
  friends?: [User];
}
