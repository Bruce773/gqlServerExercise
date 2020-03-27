import React from "react";
import { useCurrentUser } from "hooks";
import { useQuery } from "react-apollo";
import { AllUsers } from "types";
import { GET_ALL_USERS } from "operations";
import { UserInfoSection } from "./UserInfoSection";

export const UsersList: React.FC = () => {
  const { data } = useQuery<AllUsers>(GET_ALL_USERS);
  const { logInUser } = useCurrentUser();

  return (
    <>
      {data &&
        data.allUsers.map(({ ...rest }) => (
          <UserInfoSection logInUser={logInUser} {...rest} />
        ))}
    </>
  );
};
