const User = require("../User");
const getUserByEmail = async (email) => {
  return await User.findOne({ email: email }).exec();
};

module.exports = getUserByEmail;
