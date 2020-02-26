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
  word-break: break-word;
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
  max-width: 900px;
  min-width: 400px;
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

export const StyledInput = styled.input`
  font-size: 25px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
`;

export const InlineColumn = styled.div`
  display: inline;
`;

export const CenterWrapper = styled.div`
  text-align: center;
`;

export const ExitButton = styled.div`
  font-size: 17px;
  text-align: left;
  box-shadow: 1px 1px 6px 0px #7d9e7d82;
  border-radius: 50%;
  width: fit-content;
  padding: 6px;
  cursor: pointer;
`;

export const Divider = styled.div<{ top?: number; bottom?: number }>`
  ${({ top }) => `margin-top: ${top}px;`}
  ${({ bottom }) => `margin-bottom: ${bottom}px;`}
`;
