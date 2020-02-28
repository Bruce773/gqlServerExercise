const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");
const { data, updateEmail } = require("./database.ts");

const typeDefs = gql`
  type Verified {
    isUser: Boolean
    error: String
  }

  type UpdatedEmail {
    newEmail: String
    error: String
  }

  type User {
    email: String!
    password: String!
    avatar: String
    friends: [User]
  }

  input EmailInput {
    userEmail: String!
  }

  input UpdateEmailInput {
    currentEmail: String!
    newEmail: String!
  }

  type Query {
    allUsers: [User]!
    verifyUser(userEmail: String!, userPassword: String!): Verified! # Should be mutation
    allFriends(input: EmailInput): [User]
    updateUserEmail(input: UpdateEmailInput): UpdatedEmail! # Should be mutation
  }
`;

const resolvers = {
  Query: {
    // Resolver names must match the field names in the schema types
    allUsers() {
      const usersList = [];
      let i = 0;
      for (key in data) {
        usersList[i] = data[key];
        i++;
      }
      return usersList;
    },
    allFriends: (_, { input: { userEmail } }) => data[userEmail].friends,
    verifyUser(_, { input: { userEmail, userPassword } }) {
      if (!data[userEmail]) {
        return {
          error: "Email is not connected to an account!"
        };
      }
      return data[userEmail].password === userPassword
        ? { isUser: true }
        : { isUser: false };
    },
    updateUserEmail(_, { input: { currentEmail, newEmail } }) {
      if (!data[currentEmail]) {
        return { error: "Email is not connected to an account!" };
      }
      return updateEmail({ currentEmail, newEmail }).then(newUserEmail => ({
        newEmail: newUserEmail
      }));
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(8181).then(() => console.log("gql server running on port 8181"));
