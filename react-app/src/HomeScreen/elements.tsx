import styled, { css } from "styled-components";

export const StyledTitle = styled.div`
  font-size: 52px;
  text-align: center;
  color: #16db17f2;
`;

export const UserEmail = styled.div`
  text-align: center;
  font-size: 30px;
  color: darkgray;
  margin-bottom: 10px;
`;

export const FriendsEmail = styled.div`
  text-align: center;
  color: #d98212;
  font-size: 26px;
`;

export const StyledButton = styled.button`
  color: #d98212;
  font-size: 20px;
  border-radius: 5px;
  background-color: none;
  border-color: #d98212;
`;

export const TitleText = styled.div`
  text-align: center;
  color: #5c995cb3;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const UserInfoBox = styled.div`
  box-shadow: 1px 1px 6px 0px #7d9e7d82;
  width: 50%;
  padding: 10px;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Avatar = styled.div`
  display: inline-block;
  background-color: grey;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const AvatarText = styled.div`
  display: block;
  font-size: 20px;
`;

export const Divider = styled.div<{ top?: number; bottom?: number }>`
  ${({ top }) => `margin-top: ${top}px;`}
  ${({ bottom }) => `margin-bottom: ${bottom}px;`}
`;
