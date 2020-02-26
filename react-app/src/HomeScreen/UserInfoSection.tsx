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

export const UserInfoSection: React.FC<User> = ({ email, friends, avatar }) => {
  const [isDefault, setIsDefault] = useState(true);
  const {
    handleChange,
    values: { emailAddressVal, passwordVal }
  } = useFormik({
    initialValues: { emailAddressVal: email, passwordVal: "" },
    onSubmit: () => undefined
  });

  return (
    <UserInfoBox onClick={() => isDefault && setIsDefault(false)}>
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
                onClick={() => alert("Login feature not available, yet!")}
              >
                Login
              </StyledButton>
            </CenterWrapper>
          </InlineColumn>
        </>
      )}
    </UserInfoBox>
  );
};
