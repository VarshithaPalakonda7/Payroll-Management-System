use payrollmanagementsystem;

CREATE TABLE Department (
  departmentID INT auto_increment PRIMARY KEY,
  deptName VARCHAR(50) NOT NULL
);
select * from Department;
CREATE TABLE Role (
  RoleID INT auto_increment PRIMARY KEY,
  RoleName VARCHAR(50) NOT NULL
);
   select * from Role;

CREATE TABLE Employee (
  EmployeeID Int auto_increment KEY,
  Name VARCHAR(50) NOT NULL,
  Address VARCHAR(255),
  DateOfBirth DATE,
  HireDate DATE,
  email varchar(255),
  password varchar(140),
  phone varchar(30),
  departmentID INT,
  RoleID INT,
  FOREIGN KEY (departmentID) REFERENCES Department(departmentID),
  FOREIGN KEY (RoleID) REFERENCES Role(RoleID)
);
select * from Employee;

INSERT INTO Employee (EmployeeID, Name, Address, DateOfBirth, HireDate, DepartmentID,RoleID,password,email,phone)
VALUES (10002, "Neale Cornelis", "PO Box 78892", "1993-01-07", "2022-11-01", 8,2,"12345","neale@gmail.com","+1 3124545987");
		
       
CREATE TABLE Salary (
  SalaryID INT AUTO_INCREMENT PRIMARY KEY,
  EmployeeID INT,
  BaseSalary DECIMAL(10,2) NOT NULL,
  Allowance DECIMAL(10,2),
  Deduction DECIMAL(10,2),
  Effective_Days INT,
  FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
); 

select * from Salary;


INSERT INTO salary (EmployeeID, BaseSalary, Allowance, Deduction, Effective_Days) VALUES ('10002', '2456', '666', '66', '32');
CREATE INDEX idx_EmployeeID ON Salary(EmployeeID);

CREATE TABLE Payroll (
  PayrollID INT auto_increment PRIMARY KEY,
  EmployeeID INT NOT NULL,
  PayDate DATE,
  PeriodStartDate DATE,
  PeriodEndDate DATE,
  GrossPay DECIMAL(10,2) NOT NULL,
  NetPay DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);
select * from Payroll;

CREATE TABLE Attendance (
  AttendanceID INT auto_increment PRIMARY KEY,
  EmployeeID INT NOT NULL,
  Date DATE,
  TimeIn TIME,
  TimeOut TIME,
  FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);  
CREATE INDEX idx_EmployeeID ON Attendance(EmployeeID);


  



CREATE TABLE Payroll (
  PayrollID INT auto_increment PRIMARY KEY,
  EmployeeID INT NOT NULL,
  PayDate DATE,
  PeriodStartDate DATE,
  PeriodEndDate DATE,
  GrossPay DECIMAL(10,2) NOT NULL,
  NetPay DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);
select * from Payroll;



CREATE TABLE Attendance (
  AttendanceID INT auto_increment PRIMARY KEY,
  EmployeeID INT NOT NULL,
  Date DATE,
  TimeIn TIME,
  TimeOut TIME,
  FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);

SELECT * FROM payroll;