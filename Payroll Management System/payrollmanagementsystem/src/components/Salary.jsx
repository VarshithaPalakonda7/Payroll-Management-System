import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Salary = () => {
  const [salary, setSalary] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/salary")
      .then((result) => {
        if (result.data.Status) {
          setSalary(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (SalaryID) => {
    axios.delete('http://localhost:3000/auth/delete_salary/'+SalaryID)
    .then(result => {
        if(result.data.Status) {
            window.location.reload()
        } else {
            alert(result.data.Error)
        }
    })
  }
  return (
<div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Set salary to existing employees</h3>
      </div>
      <Link to="/dashboard/add_salary" className="btn btn-success">
        Set Salary
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Base Salary</th>
              <th>Allowance</th>
              <th>Deduction</th>
              <th>Effective Days</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {salary.map((s) => (
              <tr>
                <td>{s.EmployeeID}</td>
                <td>{s.BaseSalary}</td>
                <td>{s.Allowance}</td>
                <td>{s.Deduction}</td>
                <td>{s.Effective_Days}</td>

                <td>
                  <Link
                    to={`/dashboard/edit_salary/` + s.EmployeeID}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(s.SalaryID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Salary
