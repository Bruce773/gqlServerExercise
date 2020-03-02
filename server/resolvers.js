const data = require("./database.js").data;
const updateEmail = require("./database.js").updateEmail;

const allUsers = () => {
  const usersList = [];
  let i = 0;
  for (let key in data) {
    usersList[i] = data[key];
    i++;
  }
  return usersList;
};

const allFriends = (_, { input: { userEmail } }) => data[userEmail].friends;

const verifyUser = (_, { input: { userEmail, userPassword } }) => {
  if (!data[userEmail]) {
    return {
      error: "Email is not connected to an account!"
    };
  }
  return data[userEmail].password === userPassword
    ? { isUser: true }
    : { isUser: false };
};

const updateUserEmail = (_, { input: { currentEmail, newEmail } }) => {
  if (!data[currentEmail]) {
    return { error: "Email is not connected to an account!" };
  }
  return updateEmail({ currentEmail, newEmail }).then(newUserEmail => ({
    newEmail: newUserEmail
  }));
};

module.exports.resolvers = {
  Query: {
    // Resolver names must match the field names in the schema types
    allUsers,
    allFriends
  },
  Mutation: {
    verifyUser,
    updateUserEmail
  }
};
