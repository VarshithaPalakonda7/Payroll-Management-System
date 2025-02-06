import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditSalary = () => {
    const [salary, setSalary] = useState({
        EmployeeID: "",
        BaseSalary: "",
        Allowance: "",
        Deduction: "",
        Effective_days: "",
      });
      const {EmployeeID} = useParams()

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
          axios.get('http://localhost:3000/auth/salary/'+EmployeeID)
        .then(result => {
            setSalary({
                ...salary,
                EmployeeID: result.data.Result[0].EmployeeID,
                BaseSalary: result.data.Result[0].BaseSalary,
                Allowance: result.data.Result[0].Allowance,
                Deduction: result.data.Result[0].Deduction,
                Effective_days: result.data.Result[0].Effective_days,
            })
        }).catch(err => console.log(err))
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_salary/'+EmployeeID,salary)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/salary')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Salary</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
            <label htmlFor="employee" className="form-label">
              Employee ID
            </label>
            <select name="employee" id="employee" className="form-select"
                onChange={(s) => setSalary({...salary, EmployeeID: s.target.value})}>
              {employee.map((e) => {
                return <option value={e.EmployeeID}>{e.EmployeeID}</option>;
              })}
            </select>
        </div>
        <div className="col-12">
            <label htmlFor="inputBaseSalary" className="form-label">
                Base Salary
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputBaseSalary"
            //   placeholder="Enter Base Salary"
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
            //   placeholder="Enter Allowance"
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
            //   placeholder="Enter Deduction"
              value={salary.Deduction}
              onChange={(s) =>
                setSalary({ ...salary, Deduction: s.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDays" className="form-label">
                Effective Days
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputDays"
            //   placeholder="Enter Days"
              value={salary.Effective_days}
              onChange={(s) =>
                setSalary({ ...salary, Effective_days: s.target.value })
              }
            />
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Salary
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditSalary
