// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Attendance = () => {
//   const [attendance, setAttendance] = useState([]);
//   const navigate = useNavigate()
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/employee/attendance")
//       .then((result) => {
//         if (result.data.Status) {
//           setAttendance(result.data.Result);
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);
// //   const handleDelete = (EmployeeID) => {
// //     axios.delete('http://localhost:3000/auth/delete_employee/'+EmployeeID)
// //     .then(result => {
// //         if(result.data.Status) {
// //             window.location.reload()
// //         } else {
// //             alert(result.data.Error)
// //         }
// //     })
// //   } 
//   return (
    // <div className="px-5 mt-3">
    //   <div className="d-flex justify-content-center">
    //     <h3>Attendance</h3>
    //   </div>
    //   <div className="mt-3">
    //     <table className="table">
    //       <thead>
    //         <tr>
    //           <th>Date</th>
    //           <th>TimeIn</th>
    //           <th>TimeOut</th>
    //           <th>Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {attendance.map((a) => (
    //           <tr>
    //             <td>{a.Date}</td>
    //             <td>{a.TimeIn}</td>
    //             <td>{a.TimeOut}</td>
    //             <td>
    //               <Link
    //                 to={`/edit_attendance/` }
    //                 className="btn btn-info btn-sm me-2"
    //               >
    //                 Edit
    //               </Link>
    //               {/* <button
    //                 className="btn btn-danger btn-sm"
    //                 onClick={() => handleDelete(a.EmployeeID)}
    //               >
    //                 Delete
    //               </button> */}
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
//   );
// };

// export default Attendance;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

const AddAttendance = () => {
    const [attendance, setAttendance] = useState({

        EmployeeID: "",
        Date: "",
        TimeIn: "",
        TimeOut: "",


    });
      const [employee, setEmployee] = useState([])
      const navigate = useNavigate()
      const {EmployeeID} = useParams()
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
        // axios
        //   .get("http://localhost:3000/employee/attendance/"+EmployeeID)
        //   .then((result) => {
        //     if (result.data.Status) {
        //       setEmployee(result.data.Result);
        //     } else {
        //       alert(result.data.Error);
        //     }
        //   })
        //   .catch((err) => console.log(err));
      }, []);
      const handleSubmit = (a) => {
        a.preventDefault()
        console.log("form is working")
        const formData = new FormData();
        formData.append('EmployeeID', attendance.EmployeeID);
        formData.append('Date', attendance.Date);
        formData.append('TimeIn', attendance.TimeIn);
        formData.append('TimeOut', attendance.TimeOut);

        console.log(`My emp details are ${attendance.EmployeeID}`)
    
        axios.post('http://localhost:3000/employee/attendance', attendance)
        .then(result => {
            if(result.data.Status) {
              console.log(result)
                navigate('/employee_detail')
            } else {
                alert(result.data.Error) 
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Attendance</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
            <label htmlFor="employee" className="form-label">
              Employee ID
            </label>
            <select name="employee" id="employeeID" className="form-select"
                onChange={(a) => setAttendance({...attendance, EmployeeID: a.target.value})}>
              {employee.map((e) => {
                return <option key={e.EmployeeID} value={e.EmployeeID}>{e.EmployeeID}</option>;
              })}
            </select>
          </div> 
          <div className="col-12">
            <label htmlFor="inputDate" className="form-label">
                Date
                  </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputDate"
              placeholder="Enter Date"
              value={attendance.Date}
              onChange={(a) =>
                setAttendance({ ...attendance, Date: a.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputTimeIn" className="form-label">
                Date
                  </label>
            <input
              type="datetime-local"
              className="form-control rounded-0"
              id="inputTimeIn"
              placeholder="Enter TimeIn"
              value={attendance.TimeIn}
              onChange={(a) =>
                setAttendance({ ...attendance, TimeIn: a.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputTimeOut" className="form-label">
                Date
                  </label>
            <input
              type="datetime-Local"
              className="form-control rounded-0"
              id="inputTimeOut"
              placeholder="Enter TimeOut"
              value={attendance.TimeOut}
              onChange={(a) =>
                setAttendance({ ...attendance, TimeOut: a.target.value })
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
export default AddAttendance
