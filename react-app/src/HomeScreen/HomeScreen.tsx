import React from "react";
import { StyledTitle, Divider, Subtitle } from "./elements";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { User } from "../types";
import { UserInfoSection } from "./UserInfoSection";
import { useCurrentUser } from "../Hooks";

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
  const { currentUser, logInUser, errors } = useCurrentUser();

  return (
    <>
      <StyledTitle>Welcome to a test!</StyledTitle>
      <Subtitle>Go ahead! Pick a user</Subtitle>
      {loading && "Loading..."}
      {error && error}
      <Divider top={80} bottom={80} />
      {!currentUser ? (
        data &&
        data.allUsers.map(({ ...rest }) => (
          <UserInfoSection logInUser={logInUser} {...rest} />
        ))
      ) : (
        <>
          <StyledTitle>{currentUser.email}</StyledTitle>
          {currentUser.friends?.map(({ email }) => (
            <Subtitle>{email}</Subtitle>
          ))}
        </>
      )}
    </>
  );
};
