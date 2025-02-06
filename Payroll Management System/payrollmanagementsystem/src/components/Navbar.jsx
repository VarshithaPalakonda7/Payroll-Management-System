import React from 'react'
import './style.css'
import payroll from "../assets/payroll.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="leftSide">
            <img className="navbar-image"src={payroll} alt="Description" />
      {/* <img src={url('Images/payroll.jpg')} alt="Payroll Management System" /> */}
      <h3>PAYROLL MANAGEMENT SYSTEM</h3>
    </div>
    <div className="rightSide">
      <Link to="/">Home</Link>
      <Link to="/aboutus">About US</Link>
      <Link to="/services">Services</Link>
      <Link to="/logins">Login</Link>

    </div>
  </div>
  )
}

export default Navbar
