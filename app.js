require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const usersRoutes = require("./routes/users");

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRoutes);

app.get("/ping", (req, res) => {
  const test = mysql.createPool(process.env.DATABASE_URL_TEST);
  // test.promise().query('SELECT * FROM users' , (err, results, fields) => {
  //   if(err) throw err;
  //   console.log(results)
  //   res.send('PING')
  // })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
