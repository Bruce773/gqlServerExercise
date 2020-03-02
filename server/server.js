const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");
const { resolvers } = require("./resolvers.js");

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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(8181).then(() => console.log("gql server running on port 8181"));
