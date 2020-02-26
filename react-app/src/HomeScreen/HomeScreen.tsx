import React from "react";
import { StyledTitle } from "./elements";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { User } from "../types";

const GET_ALL_USERS = gql`
  {
    allUsers {
      email
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
      {data && data.allUsers.map(({ email }) => <div>{email}</div>)}
    </>
  );
};
