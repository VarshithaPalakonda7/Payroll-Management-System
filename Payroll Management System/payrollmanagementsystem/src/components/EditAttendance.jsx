// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const EditAttendance = () => {
//   const [attendance, setAttendance] = useState({
//     EmployeeID:"",
//     Date: "",
//     TimeIn: "",
//     TimeOut: "",
//   });
//   const {EmployeeID} = useParams()
//   const [employee, setEmployee] = useState([])
//   const navigate = useNavigate()
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/employee/detail")
//       .then((result) => {
//         if (result.data.Status) {
//           setEmployee(result.data.Result);
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("form is working")
//     const formData = new FormData();
//     formData.append('EmployeeID', employee.EmployeeID);
//     formData.append('Date', attendance.Date);
//     formData.append('TimeIn', attendance.TimeIn);
//     formData.append('TimeOut', attendance.TimeOut);

//     console.log(`My emp details are ${attendance}`)

//     axios.post('http://localhost:3000/employee/edit_attendance', attendance)
//     .then(result => {
//         if(result.data.Status) {
//             navigate('/attendance')
//         } else {
//             alert(result.data.Error) 
//         }
//     })
//     .catch(err => console.log(err))
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center mt-3">
//       <div className="p-3 rounded w-50 border">
//         <h3 className="text-center">Add Attendance</h3>

//         console.log("filling form")
//         <form className="row g-1" onSubmit={handleSubmit}>
//         <div className="col-12">
//             <label htmlFor="employee" className="form-label">
//               Employee ID
//             </label>
//             <select name="employee" id="employeeID" className="form-select"
//                 onChange={(a) => setAttendance({...attendance, EmployeeID: a.target.value})}>
//               {employee.map((e) => {
//                 return <option key={e.EmployeeID} value={e.EmployeeID}>{e.EmployeeID}</option>;
//               })}
//             </select>
//           </div> 
//           <div className="col-12">
//             <label htmlFor="inputDate" className="form-label">
//               Date
//             </label>
//             <input
//               type="date"
//               className="form-control rounded-0"
//               id="inputDate"
//               placeholder="Enter Date"
//               value={attendance.Date}
//               // onChange={handleChange}
             
//               onChange={(a) =>
//                 setAttendance({ ...attendance, Date: a.target.value })
                  
//               }
              
//             />
//             <div>{console.log(attendance)}</div>
            
//           </div>
//           <div className="col-12">
//             <label htmlFor="inputTimeIn" className="form-label">
//               Time In
//             </label>
//             <input
//               type="datetime-local"
//               className="form-control rounded-0"
//               id="inputTimeIn"
//               placeholder="Enter Time In"
//               value={attendance.TimeIn}
//               // onChange={handleChange}
             
//               onChange={(a) =>
//                 setAttendance({ ...attendance, TimeIn: a.target.value })
                  
//               }
              
//             />
//             <div>{console.log(attendance)}</div>
            
//           </div>
//           <div className="col-12">
//             <label htmlFor="inputTimeOut" className="form-label">
//               Time Out
//             </label>
//             <input
//               type="datetime-local"
//               className="form-control rounded-0"
//               id="inputTimeOut"
//               placeholder="Enter Time Out"
//               value={attendance.TimeOut}
//               // onChange={handleChange}
             
//               onChange={(a) =>
//                 setAttendance({ ...attendance, TimeOut: a.target.value })
                  
//               }
              
//             />
//             <div>{console.log(attendance)}</div>
            
//           </div>
          
//           <div className="col-12">
//             <button type="submit" className="btn btn-primary w-100">
//               Add Employee
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditAttendance;