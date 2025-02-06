import React from "react";
import "./style.css"

function Services(){
    return(
        <div className="container-services">
            <div className="header">
                <h1>Our Services</h1>
            </div>
            <div className="services">
                <div className="list_of_Services">
                    <div className="first">
                        <h1>Payroll Processing</h1>
                        <p>calculates employees' salaries, wages, bonuses, deductions, and taxes based on predefined rules and regulations</p>

                    </div>
                    <div className="second">
                        <h1>Employee Self-Service (ESS)</h1>
                        <p>ESS allows employees to view and manage their payroll information, such as pay stubs, tax forms, direct deposit details, and benefits enrollment. It empowers employees to handle their payroll-related tasks independently.</p>
                        
                    </div>
                    <div className="third">
                        <h1>Time and Attendance Manage</h1>
                        <p>This service tracks employees' work hours, attendance, leaves (such as vacation, sick leave), overtime, and breaks. It integrates with payroll processing to ensure accurate compensation based on actual work hours.</p>
                        
                    </div>
                    <div className="fourth">
                        <h1>Benefits Administration</h1>
                        <p>Services related to tax compliance include calculating, withholding, and reporting taxes (such as income tax, Social Security, Medicare) for employees. It also generates tax forms (e.g., W-2, 1099) and ensures compliance with tax laws.</p>
                        
                    </div>
                    <div className="five">
                        <h1>Direct Deposit and Payment</h1>
                        <p>Direct deposit services enable electronic fund transfers for employee salaries, bonuses, and reimbursements directly to their bank accounts. It may also include payment distribution methods like paper checks or prepaid cards.</p>
                        
                    </div>
                    <div className="six">
                        <h1>Customer and Training upport</h1>
                        <p>Services related to customer support offer assistance, training, and troubleshooting for users of the payroll system, including employees, managers, HR personnel, and administrators.</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;