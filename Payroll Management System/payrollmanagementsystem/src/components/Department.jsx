import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Department = () => {

    const [department, setDepartment] = useState([])
    const [role, setRole] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/department')
        .then(result => {
            if(result.data.Status) {
                setDepartment(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
        axios.get('http://localhost:3000/auth/role')
        .then(result => {
            if(result.data.Status) {
                setRole(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
        
    }, []);

    const handleDelete = (departmentID,RoleID) => {
        axios.delete('http://localhost:3000/auth/delete_department/'+departmentID)
        .then(result => {
            if(result.data.Status) {
                window.location.reload()
            } else {
                alert(result.data.Error)
            }
        })
        axios.delete('http://localhost:3000/auth/delete_role/'+RoleID)
        .then(result => {
            if(result.data.Status) {
                window.location.reload()
            } else {
                alert(result.data.Error)
            }
        })
      }
      
 
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Department List</h3>
        </div>
        <Link to="/dashboard/add_department" className='btn btn-success'>Add Department</Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Department Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                
                        department.map(d => (
                            <tr key={d.departmentID}>
                                <td>{d.deptName}</td>
                                <td>    <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(d.departmentID)}
                  >
                    Delete
                  </button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div className='d-flex justify-content-center'>
            <h3>Role List</h3>
        </div>
        <Link to="/dashboard/add_role" className='btn btn-success'>Add Role</Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Role Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                
                        role.map(r => (
                            <tr key={r.RoleID}>
                                <td>{r.RoleName}</td>
                                <td>    <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(r.RoleID)}
                  >
                    Delete
                  </button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
    
  )
}

export default Department