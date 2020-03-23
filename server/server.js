const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");
const { resolvers } = require("./resolvers.js");

const typeDefs = gql`
  """
  Documentation viewable in tools
  """
  type Verified {
    isUser: Boolean
    userData: User
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

  input CreateNewUserInput {
    email: String!
    password: String!
    avatar: String
  }

  type Query {
    allUsers: [User]!
    allFriends(input: EmailInput): [User]
  }

  type Mutation {
    verifyUser(input: VerifyUserInput): Verified!
    updateUserEmail(input: UpdateEmailInput): UpdatedEmail!
    createNewUser(input: CreateNewUserInput): Verified!
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen(8181)
  .then(() => console.log("🚀 gql server running on port 8181"));
