const bcrypt = require("bcryptjs");
const User = require("../db/User");

module.exports.registerUser = async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    res.status(200).json({ ok: true, user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      res.status(404).json({ ok: false, message: "User not found!" });
    } else {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isPasswordValid) {
        res.status(201).json({ ok: true, user });
      } else {
        res.status(500).json({ ok: false, message: "Incorrect password!" });
      }
    }
  } catch (error) {
    res.status(500).json({ ok: false, error });
  }
};
