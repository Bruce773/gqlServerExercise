import { User } from "types";
import { useMutation } from "react-apollo";
import { gql } from "apollo-boost";
import { useState } from "react";

interface Credentials {
  userEmail: string;
  userPassword: string;
}

export type UseCurrentUser_LogInUser = ({}: Credentials) => {
  errors?: string | null;
};

interface MutationVars {
  isUser: boolean;
  error?: string;
  userData: User;
}
const LOGIN_USER = gql`
  mutation VerifyUser($userEmail: String!, $userPassword: String!) {
    verifyUser(input: { userEmail: $userEmail, userPassword: $userPassword }) {
      isUser
      userData {
        email
        friends {
          email
          avatar
        }
        avatar
      }
      error
    }
  }
`;

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<string | null>(null);

  const [verifyUser] = useMutation<{ verifyUser: MutationVars }>(LOGIN_USER, {
    onCompleted: ({ verifyUser: { isUser, error, userData } }) => {
      setErrors(error || (!isUser ? "Invalid password!" : null));
      if (isUser) {
        setCurrentUser(userData);
      }
    },
    onError: e => console.log(e)
  });

  const logInUser: UseCurrentUser_LogInUser = ({ userEmail, userPassword }) => {
    verifyUser({ variables: { userEmail, userPassword } });
    return { errors };
  };

  return { currentUser, logInUser, errors };
};
