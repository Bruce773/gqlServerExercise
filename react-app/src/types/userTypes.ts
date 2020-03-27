export interface User {
  email: string;
  avatar?: string;
  friends?: [User];
}

export interface AllUsers {
  allUsers: [User];
}
