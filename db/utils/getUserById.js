const User = require("../User");

const getUserById = async (id) => {
  return await User.findOne({ _id: id }).exec();
};

module.exports = getUserById;
