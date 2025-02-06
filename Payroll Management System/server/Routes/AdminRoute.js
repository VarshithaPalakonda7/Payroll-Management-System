import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import multer from "multer";
import path from "path";

const router = express.Router();

router.post("/adminlogin", (req, res) => {
  const sql = "SELECT * from admin Where email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email, id: result[0].id },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie('token', token)
      return res.json({ loginStatus: true });
    } else {
        return res.json({ loginStatus: false, Error:"wrong email or password" });
    }
  });
});

router.get('/department', (req, res) => {
  const sql = "SELECT * FROM department";
  con.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
});

router.get('/role', (req, res) => {
  const sql = "SELECT * FROM role";
  con.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
});

router.post('/add_department', (req, res) => {
  const sql = "INSERT INTO department (`deptName`) VALUES (?)"
  con.query(sql, [req.body.department], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true})
  })
});
router.delete('/delete_department/:departmentID', (req, res) => {
  const departmentID = req.params.departmentID;
  const sql = "delete from department where departmentID = ?"
  con.query(sql,[departmentID], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})

router.post('/add_role', (req, res) => {
  const sql = "INSERT INTO role (`RoleName`) VALUES (?)"
  con.query(sql, [req.body.role], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true})
  })
});

router.delete('/delete_role/:RoleID', (req, res) => {
  const RoleID = req.params.RoleID;
  const sql = "delete from role where RoleID = ?"
  con.query(sql,[RoleID], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
});

router.post('/add_employee', (req, res) => {
  
  const sql = `INSERT INTO employee 
  (Name,Address,DateOfBirth,HireDate,email,password,phone,departmentID,RoleID) 
  VALUES (?)`;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err) return res.json({Status: false, Error: "Query Error"})
      const values = [

          req.body.Name,
          req.body.Address,
          req.body.DateOfBirth, 
          req.body.HireDate,
          req.body.email,
          hash,
          req.body.phone,
          req.body.departmentID,
          req.body.RoleID,

        ]
      console.log(values)
      con.query(sql, [values], (err, result) => {
        console.log(result,err)

          if(err) return res.json({Status: false, Error: err})
          return res.json({Status: true})
      })
    })
  })

  router.get('/employee', (req, res) => {
    const sql = "SELECT * FROM Employee";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

router.get('/employee/:EmployeeID', (req, res) => {
  const EmployeeID = req.params.EmployeeID;
  const sql = "SELECT * FROM employee WHERE EmployeeID = ?";
  con.query(sql,[EmployeeID], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
})

router.put('/edit_employee/:EmployeeID', (req, res) => {
  const EmployeeID = req.params.EmployeeID;
  const sql = `UPDATE employee 
      set  Name = ?, Address = ?, DateOfBirth = ?, HireDate = ?,email = ?, phone = ?, departmentID = ? , RoleID = ?
      Where EmployeeID = ?`
      console.log(req.body)  
  const values = [

    req.body.Name,
    req.body.Address,
    req.body.DateOfBirth, 
    req.body.HireDate,
    req.body.email,
    req.body.phone,
    req.body.departmentID,
    req.body.RoleID,

  ]
  con.query(sql,[...values, EmployeeID], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})

router.delete('/delete_employee/:EmployeeID', (req, res) => {
  const EmployeeID = req.params.EmployeeID;
  const sql = "delete from employee where EmployeeID = ?"
  con.query(sql,[EmployeeID], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})


router.get('/salary', (req, res) => {
  const sql = "SELECT * FROM salary";
  con.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
})
router.post('/add_salary', (req, res) => {

  const sql = "INSERT INTO salary (EmployeeID, BaseSalary, Allowance, Deduction, Effective_Days) VALUES (?)"
  console.log(req.body)   
  const values = [
        
          req.body.EmployeeID,
          req.body.BaseSalary,
          req.body.Allowance, 
          req.body.Deduction,
          req.body.Effective_Days,
      ]
      console.log(values);
      con.query(sql, [values], (err, result) => {
        console.log(result,err)
          if(err) return res.json({Status: false, Error: err})
          return res.json({Status: true})
      })
  });


router.get('/salary/:EmployeeID', (req, res) => {
  const EmployeeID = req.params.EmployeeID;
  const sql = "SELECT * FROM salary WHERE EmployeeID = ?";
  con.query(sql,[EmployeeID], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
})

router.put('/edit_salary/:EmployeeID', (req, res) => {
  const EmployeeID = req.params.EmployeeID;
  const sql = `UPDATE salary 
      set EmployeeID = ?, BaseSalary = ?, Allowance = ?, Deduction = ?, Effective_Days=?
      Where EmployeeID = ?`
      console.log(req.body)   
  const values = [
    req.body.EmployeeID,
    req.body.BaseSalary,
    req.body.Allowance, 
    req.body.Deduction,
    req.body.Effective_days,
  ]
  con.query(sql,[...values, EmployeeID], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})

router.delete('/delete_salary/:SalaryID', (req, res) => {
  const SalaryID = req.params.SalaryID;
  const sql = "delete from salary where SalaryID = ?"
  con.query(sql,[SalaryID], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})
router.post('/add_payroll', (req, res) => {
  const sql = `INSERT INTO payroll 
  (EmployeeID,PayDate,PeriodStartDate,PeriodEndDate,GrossPay,NetPay) 
  VALUES (?)`;
  console.log(req.body)
      const values = [
          req.body.EmployeeID,
          req.body.PayDate,
          req.body.PeriodStartDate, 
          req.body.PeriodEndDate,
          req.body.GrossPay,
          req.body.NetPay,
      ]
      con.query(sql, [values], (err, result) => {
          if(err) return res.json({Status: false, Error: err})
          return res.json({Status: true})
      })
  })

  router.get('/payroll', (req, res) => {
    const sql = "SELECT * FROM payroll";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})
router.delete('/delete_payroll/:PayrollID', (req, res) => {
  const PayrollID = req.params.PayrollID;
  const sql = "delete from payroll where PayrollID = ?"
  con.query(sql,[PayrollID], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})

router.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({Status: true})
})


export {router as adminRouter}
