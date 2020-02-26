import React from "react";
import { User } from "../types";
import {
  UserEmail,
  FriendsEmail,
  TitleText,
  UserInfoBox,
  StyledButton
} from "./elements";

export const UserInfoSection: React.FC<User> = ({ email, friends }) => (
  <UserInfoBox>
    <UserEmail>{email}</UserEmail>
    <TitleText>Friends:</TitleText>
    {friends ? (
      friends.map(({ email }) => <FriendsEmail>{email}</FriendsEmail>)
    ) : (
      <FriendsEmail>
        Uh oh! It doesn't look like you have any friends <br />
        Click <StyledButton>HERE</StyledButton> to make some!
      </FriendsEmail>
    )}
  </UserInfoBox>
);
