const connection = require("../db");
const DB = require("../db");

const userSignup = async (signupBody) => {
  const { username, email, password } = signupBody;
  const query = `INSERT INTO users (username, password, email) VALUES ('${username}', '${email}', '${password}');`;

  console.log(query);
  const result = await connection.promise().execute(query);

  console.log(result);
  return result;
};

module.exports = { userSignup };
