import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeInfo = () => {
    const {EmployeeID} = useParams()
    const [employee, setEmployee] = useState({
      Name: "",
      Address: "",
      DateOfBirth: "",
      phone: "",
    });
    const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:3000/employee/details/'+EmployeeID)
        .then(result => {
            setEmployee({
                ...employee,
                Name: result.data.Result[0].Name,
                Address: result.data.Result[0].Address,
                DateOfBirth: result.data.Result[0].DateOfBirth,
                phone: result.data.Result[0].phone,
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/employee/employee_info/'+EmployeeID, employee)
        .then(result => {
            if(result.data.Status) {
                navigate('/employee_details')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Employee</h3>
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
              onChange={(e) =>
                setEmployee({ ...employee, Name: e.target.value })
              }
            />
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
            <label htmlFor="inputPhone" className="form-label">
            Phone
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputPhone"
              // placeholder="Enter Phone No"
              value={employee.phone}
              onChange={(e) =>
                setEmployee({ ...employee, phone: e.target.value })
              }
            />
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeInfo