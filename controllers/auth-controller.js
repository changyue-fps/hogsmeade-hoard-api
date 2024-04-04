const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// const jsonSecretKey =
//   "39bae5d780e6c526adc443a4df6567ff5819437c12b45eef38885be255d71cbd";

// function getToken(req) {
//   if (!req.headers.authorization) {
//     return;
//   } else {
//     return req.headers.authorization.split(" ")[1];
//   }
// }

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await knex("users").where({ email }).select();

    if (users.length === 0) {
      return res.status(401).send("Email does not exist");
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password_encrypted);

    if (!isMatch) {
      return res.status(401).send("Invalid password");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send("Server error during login");
  }
};

const signup = async (req, res) => {
  const { user_name, email, password } = req.body;
  console.log(req.body);

  try {
    const existingUsers = await knex("users").where({ email }).select("id");

    if (existingUsers.length > 0) {
      return res.status(409).send("Email is already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const [newUserId] = await knex("users").insert({
      user_name,
      email,
      password_encrypted: hashedPassword,
    }, 'id');

    const token = jwt.sign({ id: newUserId }, process.env.JWT_SECRET, {
      expiresIn: '24h' 
    });

    res.status(201).json({ message: "User registered", token });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).send("Server error during registration");
  }
};

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

const addToLike = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  try {
    const existingItem = await knex("likes")
      .where({
        user_id: userId,
        product_id: productId,
      })
      .first();

    if (!existingItem) {
      await knex("likes").insert({
        user_id: userId,
        product_id: productId,
      });
    }

    res.status(200).json({ message: "Product added to like successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding product to likes");
  }
};

const deleteLike = async (req, res) => {
  const productId = req.params.id;
  
  console.log(productId);
  const userId = req.user.id;
  console.log(userId);
  try {
    const deleted = await knex('likes')
      .where({
        'user_id': userId,
        'product_id': productId,
      })
      .del();

    if (deleted) {
      return res.status(200).json({ message: 'Like deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Like not found' });
    }
  } catch (error) {
    console.error('Error deleting like:', error);
    res.status(500).send('Internal server error');
  }
}

const getProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    const userInfo = await knex("users").where({ id: userId }).first();
    const likes = await knex("likes")
      .join("products", "likes.product_id", "products.id")
      .where("likes.user_id", userId)
      .select("products.*");

    res.status(200).json({
      user: userInfo,
      likes: likes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving account information");
  }
};

module.exports = {
  authenticateToken,
  login,
  signup,
  addToLike,
  getProfile,
  deleteLike,
};
