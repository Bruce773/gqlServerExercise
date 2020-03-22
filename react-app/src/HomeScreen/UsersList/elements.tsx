import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typeography from "@material-ui/core/Typography";

export const UserEmail = styled(Typeography)`
  text-align: center;
  && {
    font-size: 30px;
  }
  color: darkgray;
  margin-bottom: 10px;
  word-break: break-word;
`;

export const FriendsEmail = styled(Typeography)`
  text-align: center;
  color: #d98212;
  font-size: 26px;
`;

export const TitleText = styled(Typeography)`
  text-align: center;
  color: #5c995cb3;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const UserInfoBox = styled(Paper)`
  width: 50%;
  max-width: 680px;
  min-width: 350px;
  padding: 10px;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  color: #d98212;
  font-size: 20px;
  border-radius: 5px;
  background-color: none;
  border-color: #d98212;
`;

export const Avatar = styled.div`
  display: inline-block;
  background-color: grey;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const AvatarText = styled(Typeography)`
  display: block;
  font-size: 20px;
`;

export const StyledInput = styled.input`
  font-size: 25px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  border-radius: 5px;
`;

export const CenterWrapper = styled.div`
  text-align: center;
`;

export const ExitButton = styled.div`
  font-size: 17px;
  text-align: right;
  box-shadow: 1px 1px 6px 0px #7d9e7d82;
  border-radius: 50%;
  width: fit-content;
  padding: 6px;
  cursor: pointer;
`;

export const InlineColumn = styled.div`
  display: inline;
`;
