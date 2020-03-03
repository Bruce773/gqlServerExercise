export interface User {
  email: string;
  avatar?: string;
  friends?: [User];
}
