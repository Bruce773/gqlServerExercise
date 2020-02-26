let data = {
  "bruce@blank.com": {
    email: "bruce@blank.com",
    password: "passwordhash!@)(*&^%$#@",
    friends: [
      {
        email: "friendEmail@fsdkj.com",
        password: "passwordhash48734278#@!#!@#!",
        avatar: "image2.jpeg"
      },
      {
        email: "secondFriendsemail@fsdkj.com",
        password: "fdkjfkdjddfhjk45678%$#@!@@"
      }
    ]
  },
  "notbruce@blank.com": {
    email: "notbruce@blank.com",
    password: "passwordhash2@!@$#$^#",
    avatar: "notbruceimage.jpeg",
    friends: [
      {
        email: "notbrucefriend@blank.com",
        password: "passwordhash3456&%^^$%^#@#@",
        avatar: "notbrucefriendavatar.jpeg"
      }
    ]
  },
  "user44@blank.com": {
    email: "user44@blank.com",
    password: "passwordhash3#@#@!@%",
    avatar: "notanimage.jpeg"
  }
};

module.exports.updateEmail = async ({ currentEmail, newEmail }) => {
  const updateEmail = () => {
    data[currentEmail].email = newEmail;
  };
  updateEmail();
  return data[currentEmail].email;
};

module.exports.data = data;