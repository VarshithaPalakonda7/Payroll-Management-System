import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const router = express.Router();


router.post("/employeelogin", (req, res) => {
  const sql = "SELECT * from employee Where email = ?";
  con.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      bcrypt.compare(req.body.password, result[0].password, (err, response) => {
          if (err) return res.json({ loginStatus: false, Error: "Wrong Password" });
          if(response) {
              const email = result[0].email;
              const token = jwt.sign(
                  { role: "employee", email: email, EmployeeID: result[0].EmployeeID },
                  "jwt_secret_key",
                  { expiresIn: "1d" }
              );
              res.cookie('token', token)
              return res.json({ loginStatus: true, EmployeeID: result[0].EmployeeID });
          }
      })
      
    } else {
        return res.json({ loginStatus: false, Error:"wrong email or password" });
    }
  });
});

router.get("/detail/:EmployeeID", (req, res) => {
  const EmployeeID = req.params.EmployeeID;
  const sql = "SELECT * FROM employee where EmployeeID = ?";
  con.query(sql, [EmployeeID], (err, result) => {
    if (err) return res.json({ Status: false });
    return res.json(result);
  });
});


router.get('/attendance', (req, res) => {
  const sql = "SELECT * FROM attendance";
  con.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
})

router.post('/attendance', (req, res) => {
  const sql = `INSERT INTO attendance 
  (EmployeeID, Date, TimeIn, TimeOut) 
  VALUES (?)`;
  console.log(req.body)
      const values = [
        req.body.EmployeeID,
          req.body.Date,
          req.body.TimeIn, 
          req.body.TimeOut,
      ]
      con.query(sql, [values], (err, result) => {
          if(err) return res.json({Status: false, Error: err})
          return res.json({Status: true})
      })
    });

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: true });
});

export { router as employeeRouter };
