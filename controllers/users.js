const userModel = require("../models/users");
const cryptoUtil = require("../utils/encryption");

const getAllUsers = (req, res) => {
  res.send("Get all users");
};

const getUser = (req, res) => {
  res.send("Get an existing User");
};

const createNewUser = (req, res) => {
  const { username, email, password } = req.body;
  const signupBody = {
    username,
    email,
    password: cryptoUtil.cipherString(password),
  };
  let results = userModel
    .userSignup(signupBody)
    .then((res) => res)
    .catch((err) => console.log(err));
  console.log(results);
  res.send(req.body);
};

const updateUser = (req, res) => {
  res.send("Update an existing User");
};

const deleteUser = (req, res) => {
  res.send("Delete an existing User");
};

module.exports = {
  getAllUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
};
