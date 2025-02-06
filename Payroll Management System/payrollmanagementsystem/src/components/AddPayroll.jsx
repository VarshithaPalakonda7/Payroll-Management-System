import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPayroll = () => {
    const [payroll, setPayroll] = useState({

        EmployeeID: "",
        PayDate: "",
        PeriodStartDate: "",
        PeriodEndDate: "",
        GrossPay: "",
        NetPay: "",

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
      const handleSubmit = (p) => {
        p.preventDefault()
        console.log("form is working")
        const formData = new FormData();
        formData.append('EmployeeID', payroll.EmployeeID);
        formData.append('PayDate', payroll.PayDate);
        formData.append('PeriodStartDate', payroll.PeriodStartDate);
        formData.append('PeriodEndDate', payroll.PeriodEndDate);
        formData.append('GrossPay', payroll.GrossPay);
        formData.append('NetPay', payroll.NetPay);
        console.log(`My emp details are ${payroll}`)
    
        axios.post('http://localhost:3000/auth/add_payroll', payroll)
        .then(result => {
            if(result.data.Status) {
              console.log(result)
                navigate('/dashboard/payroll')
            } else {
                alert(result.data.Error) 
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Payroll</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
            <label htmlFor="employee" className="form-label">
              Employee ID
            </label>
            <select name="employee" id="employeeID" className="form-select"
                onChange={(p) => setPayroll({...payroll, EmployeeID: p.target.value})}>
              {employee.map((e) => {
                return <option key={e.EmployeeID} value={e.EmployeeID}>{e.EmployeeID}</option>;
              })}
            </select>
          </div> 
          <div className="col-12">
            <label htmlFor="inputPayDate" className="form-label">
                Pay Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputPayDate"
              placeholder="Enter Pay Date"
              value={payroll.PayDate}
              onChange={(p) =>
                setPayroll({ ...payroll, PayDate: p.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPeriodStartDate" className="form-label">
                Period Start Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputPeriodStartDate"
              placeholder="Enter Period Start Date"
              value={payroll.PeriodStartDate}
              onChange={(p) =>
                setPayroll({ ...payroll, PeriodStartDate: p.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPeriodEndDate" className="form-label">
                Period End Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputPeriodEndDate"
              placeholder="Enter Period End Date"
              value={payroll.PeriodEndDate}
              onChange={(p) =>
                setPayroll({ ...payroll, PeriodEndDate: p.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputGrossPay" className="form-label">
                Gross Pay 
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputGrossPay"
              placeholder="Enter Gross Pay"
              value={payroll.GrossPay}
              onChange={(p) =>
                setPayroll({ ...payroll, GrossPay: p.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputNetPay" className="form-label">
                Net Pay 
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputNetPay"
              placeholder="Enter Net Pay"
              value={payroll.NetPay}
              onChange={(p) =>
                setPayroll({ ...payroll, NetPay: p.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Payroll
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}
export default AddPayroll
