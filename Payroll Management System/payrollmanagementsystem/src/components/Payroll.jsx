import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Payroll = () => {
    const [payroll, setPayroll] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios
          .get("http://localhost:3000/auth/payroll")
          .then((result) => {
            if (result.data.Status) {
              setPayroll(result.data.Result);
            } else {
              alert(result.data.Error);
            }
          })
          .catch((err) => console.log(err));
      }, []);
      const handleDelete = (PayrollID) => {
        axios.delete('http://localhost:3000/auth/delete_payroll/'+PayrollID)
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
        <h3>Payroll Data</h3>
      </div>
      <Link to="/dashboard/add_payroll" className="btn btn-success">
        Set Payroll
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Pay Date</th>
              <th>Period Start Date</th>
              <th>Period End Date</th>
              <th>Gross Pay</th>
              <th>Net pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payroll.map((p) => (
              <tr>
                <td>{p.EmployeeID}</td>
                <td>{p.PayDate}</td>
                <td>{p.PeriodStartDate}</td>
                <td>{p.PeriodEndDate}</td>
                <td>{p.GrossPay}</td>
                <td>{p.NetPay}</td>
                <td>                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(p.PayrollID)}
                  >
                    Delete
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Payroll
