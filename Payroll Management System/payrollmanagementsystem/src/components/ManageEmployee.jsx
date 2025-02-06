import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ManageEmployee = () => {
  const [employee, setEmployee] = useState([]);
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
  const handleDelete = (EmployeeID) => {
    axios.delete('http://localhost:3000/auth/delete_employee/'+EmployeeID)
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
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Hire Date</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Department ID</th>
              <th>Role ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr>
                <td>{e.EmployeeID}</td>
                <td>{e.Name}</td>
                <td>{e.Address}</td>
                <td>{e.DateOfBirth}</td>
                <td>{e.HireDate}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.departmentID}</td>
                <td>{e.RoleID}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_employee/` + e.EmployeeID}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(e.EmployeeID)}
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
  );
};

export default ManageEmployee;