const jwt = require("jsonwebtoken");
const passport = require("passport");

exports.getToken = (user) => {
  return jwt.sign(user, "secret", { expiresIn: "24h" });
};
exports.verifyUser = passport.authenticate("jwt", { session: false });
