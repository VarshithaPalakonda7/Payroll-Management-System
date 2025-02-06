import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({

    Name: "",
    Address: "",
    DateOfBirth: "",
    HireDate: "",
    email: "",
    password: "",
    phone: "",
    departmentID: "",
    RoleID: "",
  });
  const [department, setDepartment] = useState([])

  const [role, setRole] = useState([])
  // const [emprole, setEmpRole] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/department")
      .then((result) => {
        if (result.data.Status) {
          setDepartment(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      axios
      .get("http://localhost:3000/auth/role")
      .then((result) => {
        if (result.data.Status) {
          setRole(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form is working")
    const formData = new FormData();

    formData.append('Name', employee.Name);
    formData.append('Address', employee.Address);
    formData.append('DateOfBirth', employee.DateOfBirth);
    formData.append('HireDate', employee.HireDate);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('phone', employee.phone);
    formData.append('departmentID', employee.departmentID);
    formData.append('RoleID', employee.RoleID);


    console.log(`My emp details are ${employee.Name}`)
    console.log(`My emp details are ${employee.Address}`)
    console.log(`My emp details are ${employee.RoleID}`)

    axios.post('http://localhost:3000/auth/add_employee', employee)
    .then(result => {
      console.log(result)
        if(result.data.Status) {
            navigate('/dashboard/manageemployee')
        } else {
            alert(result.data.Error) 
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Employee Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={employee.Name}
              // onChange={handleChange}
             
              onChange={(e) =>
                setEmployee({ ...employee, Name: e.target.value })
                  
              }
              
            />
            <div>{console.log(employee)}</div>
            
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="Enter Address"
              value={employee.Address}
              onChange={(e) =>
                setEmployee({ ...employee, Address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDOB" className="form-label">
              Date Of Birth
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputDOB"
              placeholder="Enter Date of Birth"
              value={employee.DateOfBirth}
              onChange={(e) =>
                setEmployee({ ...employee, DateOfBirth: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputHireDate" className="form-label">
              Hire Date
            </label>
            <input
              type="Date"
              className="form-control rounded-0"
              id="inputHireDate"
              placeholder="Enter Hire Date"
              value={employee.HireDate}
              onChange={(e) =>
                setEmployee({ ...employee, HireDate: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              value={employee.email}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              value={employee.password}
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
            </div>
          <div className="col-12">
            <label htmlFor="inputPhone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputPhone"
              placeholder="Enter Phone No"
              value={employee.phone}
              onChange={(e) =>
                setEmployee({ ...employee, phone: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <select name="department" id="department" className="form-select"
                onChange={(e) => setEmployee({...employee, departmentID: e.target.value})}>
              {department.map((d) => {
                return <option key={d.departmentID} value={d.departmentID}>{d.departmentID}</option>;
              })}
            </select>
          </div> 
          <div className="col-12">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select name="role" id="role" className="form-select"
                onChange={(e) => setEmployee({...employee, RoleID: e.target.value})}>
              {role.map((r) => {
                return <option key={r.RoleID} value={r.RoleID}>{r.RoleID}</option>;
              })}
            </select>
          </div> 
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 

export default AddEmployee;