import express, { json } from "express";
import { createConnection } from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import { hash as _hash } from "bcrypt";
const salt = 10;

const app = express();
app.use(json());
app.use(cors());
app.use(cookieParser());

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "Joshua2@3",
  database: "test",
});

//user
app.post("/register", (req, res) => {
  let values = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  let sql = "INSERT INTO user SET ?";

  _hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "error hashing" });
  });
  db.query(sql, [values], (err, result) => {
    if (err) {
      return res.json({ Error: "inserting data Error in server" });
    } else {
      return res.json({ status: "Success" });
    }
  });
});

// login

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ message: "An error occurred while processing your request." });
    } else {
      if (result.length > 0) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res
          .status(401)
          .json({ message: "Login failed. Invalid username or password." });
      }
    }
  });
});

app.get("/user", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/member", (req, res) => {
  const sql = "SELECT * FROM member";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/member", (req, res) => {
  let values = {
    fullname: req.body.fullname,
    id: req.body.id,
    gender: req.body.gender,
    savings: req.body.savings,
    telnumber: req.body.telnumber,
    development: req.body.development,
    socialfund: req.body.socialfund,
    shares: req.body.shares,
    fines: req.body.fines,
    socialfundgiveout: req.body.socialfundgiveout,
    savingswithdraw: req.body.savingswithdraw,
    loan: req.body.loan,
    loanformfee: req.body.loanformfee,
    otherfunds: req.body.otherfunds,
  };
  let sql = "INSERT INTO member SET ?";

  db.query(sql, [values], (err, result) => {
    if (err) {
      return res.json({ Error: "inserting data Error in server" });
    } else {
      return res.json({ status: "Success" });
    }
  });
});
app.listen(8081, () => {
  console.log("listening");
});
