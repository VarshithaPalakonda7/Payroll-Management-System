import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSalary = () => {
    const [salary, setSalary] = useState({

        EmployeeID: "",
        BaseSalary: "",
        Allowance: "",
        Deduction: "",
        Effective_Days: "",


    });
      const [employee, setEmployee] = useState([])
      const navigate = useNavigate()
      useEffect(() => {
        axios
          .get("http://localhost:3000/auth/employee")
          .then((result) => {
            if (result.data.Status) {
              setEmployee(result.data.Result);
            } else {
              alert(result.data.Error);
            }
          })
          .catch((err) => console.log(err));
      }, []);
      const handleSubmit = (s) => {
        s.preventDefault()
        console.log("form is working")
        const formData = new FormData();
        formData.append('EmployeeID', salary.EmployeeID);
        formData.append('BaseSalary', salary.BaseSalary);
        formData.append('Allowance', salary.Allowance);
        formData.append('Deduction', salary.Deduction);
        formData.append('Effective_Days', salary.Effective_Days);


    
        axios.post('http://localhost:3000/auth/add_salary', salary)
        .then(result => {
            if(result.data.Status) {
              console.log(result)
                navigate('/dashboard/salary')
            } else {
                alert(result.data.Error) 
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Salary</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
            <label htmlFor="employee" className="form-label">
              Employee ID
            </label>
            <select name="employee" id="employeeID" className="form-select"
                onChange={(s) => setSalary({...salary, EmployeeID: s.target.value})}>
              {employee.map((e) => {
                return <option key={e.EmployeeID} value={e.EmployeeID}>{e.EmployeeID}</option>;
              })}
            </select>
          </div> 
          <div className="col-12">
            <label htmlFor="inputBase" className="form-label">
            Base Salary
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputBase"
              placeholder="Enter Base Salary"
              value={salary.BaseSalary}
              onChange={(s) =>
                setSalary({ ...salary, BaseSalary: s.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAllowance" className="form-label">
            Allowance
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputAllowance"
              placeholder="Enter Allowance"
              value={salary.Allowance}
              onChange={(s) =>
                setSalary({ ...salary, Allowance: s.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDeduction" className="form-label">
            Deduction
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputDeduction"
              placeholder="Enter Deduction"
              value={salary.Deduction}
              onChange={(s) =>
                setSalary({ ...salary, Deduction: s.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEffective" className="form-label">
            Effective Days
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputEffective"
              placeholder="Enter Effective Days"
              value={salary.Effective_Days}
              onChange={(s) =>
                setSalary({ ...salary, Effective_Days: s.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Salary
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}
export default AddSalary
