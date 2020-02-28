const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");
const { data, updateEmail } = require("./database.ts");

const typeDefs = gql`
    """
    Documentation viewable in tools
    """
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

  input VerifyUserInput {
    userEmail: String!
    userPassword: String!
  }

  type Query {
    allUsers: [User]!
    allFriends(input: EmailInput): [User]
  }

  type Mutation {
    verifyUser(input: VerifyUserInput): Verified!
    updateUserEmail(input: UpdateEmailInput): UpdatedEmail!
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
    allFriends: (_, { input: { userEmail } }) => data[userEmail].friends
  },
  Mutation: {
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
