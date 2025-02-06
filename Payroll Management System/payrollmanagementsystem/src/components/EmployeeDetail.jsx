import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const { EmployeeID } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/detail/" + EmployeeID)
      .then((result) => {
        setEmployee(result.data[0]);
      })
      .catch((err) => console.log(err));
      // axios
      // .get("http://localhost:3000/employee/attendance/" )
      // .then((result) => {
      //   setEmployee(result.data[0]);
      // })
      // .catch((err) => console.log(err));
  }, []);
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/employee/logout")
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem("valid");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee Details</h3>
      </div>

      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Hire Date</th>
              <th>Phone No</th>
              <th>Department ID</th>
              <th>Role ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employee.EmployeeID}</td>
              <td>{employee.Name}</td>
              <td>{employee.email}</td>
              <td>{employee.Address}</td>
              <td>{employee.DateOfBirth}</td>
              <td>{employee.HireDate}</td>
              <td>{employee.phone}</td>
              <td>{employee.departmentID}</td>
              <td>{employee.RoleID}</td>
              {/* <td>
                <Link
                  to={'/employee_detail/attendance/'}
                  className="btn btn-success"
                >
                  Add Attendance
                </Link>
                </td>  */}
                <td  onClick={handleLogout}
>               <Link
                  to={'/'}
                  className="btn btn-danger"
                >
                  Logout
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Attendance</h3>
      </div>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>TimeIn</th>
              <th>TimeOut</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((a) => (
              <tr>
                <td>{a.Date}</td>
                <td>{a.TimeIn}</td>
                <td>{a.TimeOut}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> */}
    </div>
    
  );
};

export default EmployeeDetail;
