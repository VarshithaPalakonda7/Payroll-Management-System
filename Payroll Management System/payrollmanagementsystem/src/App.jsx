
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './components/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Employeelogin from './components/Employeelogin'
import ManageEmployee from './components/ManageEmployee'
import Department from './components/Department'
import Salary from './components/Salary'
import Payroll from './components/Payroll'
import AddDepartment from './components/AddDepartment'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Services from './components/Services'
import AddRole from './components/AddRole'
import AddSalary from './components/AddSalary'
import EditSalary from './components/EditSalary'
import AddPayroll from './components/AddPayroll'
import Logins from './components/Logins'
import EmployeeDetail from './components/EmployeeDetail'
import Attendance from './components/Attendance'
// import EditAttendance from './components/EditAttendance'
// import EmployeeInfo from './components/EmployeeInfo'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route> 
      <Route path="/aboutus" element={<AboutUs />}></Route> 
      <Route path="/footer" element={<Footer />}></Route> 
      <Route path="/services" element={<Services />}></Route> 
      <Route path='/logins' element={<Logins />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/employeelogin' element={<Employeelogin />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='/dashboard/manageemployee' element={<ManageEmployee />}></Route>
        <Route path='/dashboard/department' element={<Department />}></Route>
        <Route path='/dashboard/salary' element={<Salary />}></Route>
        <Route path='/dashboard/payroll' element={<Payroll />}></Route>
        <Route path='/dashboard/add_department' element={<AddDepartment />}></Route>
        <Route path='/dashboard/add_role' element={<AddRole />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:EmployeeID' element={<EditEmployee />}></Route>
        <Route path='/dashboard/add_salary' element={<AddSalary />}></Route>
        <Route path='/dashboard/edit_salary/:EmployeeID' element={<EditSalary />}></Route>
        <Route path='/dashboard/add_payroll' element={<AddPayroll />}></Route>
      </Route>
      <Route path='/employee_detail/:EmployeeID' element={<EmployeeDetail />}>    </Route>  
        {/* <Route path='/employee_detail/attendance/' element={<Attendance />}></Route> */}
        {/* <Route path='/edit_attendance' element={<EditAttendance />}></Route> */}

        {/* <Route path='/employee_detail/employee_info' element={<EmployeeInfo />}></Route> */}
    </Routes>
    </BrowserRouter>
    
      
  )
}

export default App
