import { gql } from "apollo-boost";

export const GET_ALL_USERS = gql`
  {
    allUsers {
      email
      friends {
        email
        avatar
      }
      avatar
    }
  }
`;
