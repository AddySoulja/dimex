const express = require("express");
const bodyParser = require("body-parser");
const Post = require("../db/Products");
const User = require("../db/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const router = express.Router();
const productsApi = require("./products");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");

router.use(bodyParser.json());

router.get("/products", (req, res) => {
  res.json({ ok: true, data: productsApi });
});

//Products router
router.post("/create", ProductController.saveProduct);
router.get("/all", ProductController.getProducts);
router.get("/public", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ ok: true, data: posts });
  } catch (error) {
    res.json({ ok: false, data: error });
  }
});

// User router
router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);
router.post("/logout", (req, res) => {
  res.json({ ok: true, message: "Logged out successfully!" });
});

module.exports = router;
