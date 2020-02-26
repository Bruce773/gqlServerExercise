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

  type Query {
    allUsers: [User]!
    verifyUser(userEmail: String!, userPassword: String!): Verified!
    allFriends(userEmail: String!): [User]
    updateUserEmail(currentEmail: String!, newEmail: String!): UpdatedEmail!
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
    allFriends: (_, { userEmail }) => data[userEmail].friends,
    verifyUser(_, { userEmail, userPassword }) {
      if (!data[userEmail]) {
        return {
          error: "Email is not connected to an account!"
        };
      }
      return data[userEmail].password === userPassword
        ? { isUser: true }
        : { isUser: false };
    },
    updateUserEmail(_, { currentEmail, newEmail }) {
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
