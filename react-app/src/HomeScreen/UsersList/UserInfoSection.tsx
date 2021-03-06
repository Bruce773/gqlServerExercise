import React, { useState } from "react";
import { User } from "types";
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
import { UseCurrentUser_LogInUser } from "hooks/useCurrentUser";

export const UserInfoSection: React.FC<User & {
  logInUser: UseCurrentUser_LogInUser;
}> = ({ email, friends, avatar, logInUser }) => {
  const [isDefault, setIsDefault] = useState(true);
  const [loginErrors, setLoginErrors] = useState("");
  const {
    handleChange,
    values: { emailAddressVal, passwordVal }
  } = useFormik({
    initialValues: { emailAddressVal: email, passwordVal: "" },
    onSubmit: () => undefined
  });

  return (
    <UserInfoBox
      elevation={10}
      onClick={() => isDefault && setIsDefault(false)}
    >
      {isDefault ? (
        <>
          {avatar && (
            <>
              <AvatarText variant="h6">{avatar}</AvatarText>
              <Avatar />
            </>
          )}
          <UserEmail variant="h5">{email}</UserEmail>
          <TitleText variant="h5">Friends:</TitleText>
          {friends ? (
            friends.map(({ email }) => (
              <FriendsEmail variant="h5">{email}</FriendsEmail>
            ))
          ) : (
            <FriendsEmail variant="h5">
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
                  const { errors } = logInUser({
                    userEmail: emailAddressVal,
                    userPassword: passwordVal
                  });
                  errors && setLoginErrors(errors);
                }}
              >
                Login
              </StyledButton>
              {loginErrors && <div>{loginErrors}</div>}
            </CenterWrapper>
          </InlineColumn>
        </>
      )}
    </UserInfoBox>
  );
};
