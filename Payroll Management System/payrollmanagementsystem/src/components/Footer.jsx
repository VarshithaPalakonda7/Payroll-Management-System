import React from 'react';
import "./style.css"; // Import your CSS file for styling

function Footer() {
  return (
    <div>
    <div className='heading'>
      <h1>Contact Us</h1>
   </div>
    <footer className="footer-container">
      <div className="footer-column">
        <h4>For Hassle Free Payments</h4>
        <h3>Smoother Management Of Your Employees Payroll Management</h3>
      </div>
      <div className="footer-column">
        <h3>About Us</h3>
        <p>Team</p>
      </div>
      <div className="footer-column">
        <h3>Address</h3>
        <p>📍2727 S Indiana Avenue, Chicago, IL, 60616</p>
        <p>☎ +1 630-364-0032</p>
        <p>📠 amashapari@hawk.iit.edu</p>
        {/* Content for the Address column */}
      </div>
    </footer>
    </div>
  );
}

export default Footer;