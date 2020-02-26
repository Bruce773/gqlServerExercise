import React from "react";
import { StyledTitle, UserEmail, Divider } from "./elements";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { User } from "../types";
import { UserInfoSection } from "./UserInfoSection";

const GET_ALL_USERS = gql`
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

interface AllUsers {
  allUsers: [User];
}

export const HomeScreen: React.FC = () => {
  const { loading, error, data } = useQuery<AllUsers>(GET_ALL_USERS);

  return (
    <>
      <StyledTitle>Welcome to a test!</StyledTitle>
      {loading && "Loading..."}
      {error && error}
      <Divider top={80} bottom={80} />
      {data &&
        data.allUsers.map(({ ...rest }) => <UserInfoSection {...rest} />)}
    </>
  );
};
