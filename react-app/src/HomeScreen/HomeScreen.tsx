import React from "react";
import { StyledTitle, Divider, Subtitle } from "./elements";
import { useQuery } from "react-apollo";
import { useCurrentUser } from "../Hooks";
import { GET_ALL_USERS } from "../operations";
import { UsersList } from "./UsersList";
import { AllUsers } from "../types";

export const HomeScreen: React.FC = () => {
  const { loading, error, data } = useQuery<AllUsers>(GET_ALL_USERS);
  const { currentUser } = useCurrentUser();

  return (
    <>
      <Divider top={40} bottom={40} />
      <StyledTitle variant="h2">Welcome to a test!</StyledTitle>
      <Subtitle variant="h6">Go ahead! Pick a user</Subtitle>
      {loading && "Loading..."}
      {error && error}
      <Divider top={40} bottom={40} />
      {!currentUser ? (
        data && <UsersList />
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
