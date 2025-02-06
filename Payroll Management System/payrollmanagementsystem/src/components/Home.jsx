import React from 'react';
import "./style.css";
import payrollImage from "../assets/payrollhome.jpg"; // Import the image using a relative path
import Footer from './Footer';
import Services from "./Services";
import AboutUS from './AboutUs';
// import Contact from "./Contact"

function Home() {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomePage-Content'>
          <div className='HomePage-text'>
            <p>Efficient Payroll Management Made Simple</p>
            <h1> Streamline Your<br></br>Payroll Processes with<br></br>Our Comprehensive Solution</h1>
          </div>
          <div className='HomePage-Image'>
            <img className="home-image"src={payrollImage} alt="Description" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

