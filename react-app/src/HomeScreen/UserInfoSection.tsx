import React, { useState } from "react";
import { User } from "../types";
import {
  UserEmail,
  FriendsEmail,
  TitleText,
  UserInfoBox,
  StyledButton,
  Avatar,
  AvatarText,
  StyledInput,
  CenterWrapper,
  ExitButton,
  InlineColumn
} from "./elements";
import { useFormik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const LOGIN_USER = gql`
  mutation VerifyUser($userEmail: String!, $userPassword: String!) {
    verifyUser(input: { userEmail: $userEmail, userPassword: $userPassword }) {
      isUser
      error
    }
  }
`;

export const UserInfoSection: React.FC<User> = ({ email, friends, avatar }) => {
  const [isDefault, setIsDefault] = useState(true);
  const [errors, setErrors] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const {
    handleChange,
    values: { emailAddressVal, passwordVal }
  } = useFormik({
    initialValues: { emailAddressVal: email, passwordVal: "" },
    onSubmit: () => undefined
  });
  const [verifyUser] = useMutation<{
    verifyUser: { isUser: boolean; error?: string };
  }>(LOGIN_USER, {
    onCompleted: ({ verifyUser: { isUser, error } }) => {
      console.log(isUser, error);
      setErrors(error || (!isUser && "Invalid password!"));
      if (isUser) {
        setIsLoggedIn(true);
        setIsDefault(true);
      }
    },
    onError: e => console.log(e)
  });

  return (
    <UserInfoBox onClick={() => isDefault && setIsDefault(false)}>
      {isLoggedIn && <div>You're currently logged in as {email}!</div>}
      {isDefault ? (
        <>
          {avatar && (
            <>
              <AvatarText>{avatar}</AvatarText>
              <Avatar />
            </>
          )}
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
        </>
      ) : (
        <>
          <InlineColumn>
            <ExitButton onClick={() => setIsDefault(true)}>X</ExitButton>
          </InlineColumn>
          <InlineColumn>
            <CenterWrapper>
              <StyledInput
                id="emailAddressVal"
                onChange={handleChange}
                value={emailAddressVal}
              />
              <StyledInput
                name="passwordVal"
                onChange={handleChange}
                value={passwordVal}
              />
              <StyledButton
                onClick={() => {
                  verifyUser({
                    variables: {
                      userEmail: emailAddressVal,
                      userPassword: passwordVal
                    }
                  });
                }}
              >
                Login
              </StyledButton>
              {errors && <div>{errors}</div>}
            </CenterWrapper>
          </InlineColumn>
        </>
      )}
    </UserInfoBox>
  );
};
