// const { data } = require("./database.js");
const fs = require("fs");

let data = {};

fs.readFile("./database.json", (err, fileData) => {
  data = JSON.parse(fileData);
});

const updateDatabaseFile = () => {
  fs.writeFile("./database.json", JSON.stringify(data), err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

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
    ? { isUser: true, userData: data[userEmail] }
    : { isUser: false };
};

const updateUserEmail = (_, { input: { currentEmail, newEmail } }) => {
  if (!data[currentEmail]) {
    return { error: "Email is not connected to an account!" };
  }
  data[currentEmail].email = newEmail;
  updateDatabaseFile();
  return { newEmail: data[currentEmail].email };
};

const createNewUser = (_, { input: { email, password, avatar } }) => {
  if (!email) return { error: "Email is not valid" };
  if (!password) return { error: "Password is not valid" };
  const userData = { email, password, avatar: avatar ? avatar : null };
  data[email] = userData;
  updateDatabaseFile();
  return { userData, isUser: true };
};

module.exports.resolvers = {
  Query: {
    // Resolver names must match the field names in the schema types
    allUsers,
    allFriends
  },
  Mutation: {
    verifyUser,
    updateUserEmail,
    createNewUser
  }
};
