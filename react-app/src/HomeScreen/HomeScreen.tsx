import React from "react";
import { StyledTitle, Divider, Subtitle } from "./elements";
import { useQuery } from "react-apollo";
import { User } from "../types";
import { UserInfoSection } from "./UserInfoSection";
import { useCurrentUser } from "../Hooks";
import { GET_ALL_USERS } from "../operations";

interface AllUsers {
  allUsers: [User];
}

export const HomeScreen: React.FC = () => {
  const { loading, error, data } = useQuery<AllUsers>(GET_ALL_USERS);
  const { currentUser, logInUser } = useCurrentUser();

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
