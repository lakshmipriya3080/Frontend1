import React, { useState } from 'react';
import { Button } from '@mui/material';
import UserSidebar from '../../components/UserSidebar';
import './profile.css';


const Profile = (props) => {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    department: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  return (
    <div className='grid-container'>
    
    <UserSidebar/> 
    <div className='profile-box'>     
    <h2 align='center' className='color'><b>EMPLOYEE PROFILE</b></h2>
    <div className='h'>
      <form>
        
          First Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleChange}
          />
        <br /><br/>
          Last Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleChange}
          />
        <br /><br/>
          Job Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="jobTitle"
            value={employeeData.jobTitle}
            onChange={handleChange}
          />
        <br /><br/>
          Department:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="department"
            value={employeeData.department}
            onChange={handleChange}
          />
        <br /><br/>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
          />
        <br /><br/>
          Phone Number:&nbsp;
          <input
            type="text"
            name="phoneNumber"
            value={employeeData.phoneNumber}
            onChange={handleChange}
          />
        <br /><br/>
        <Button variant='contained'>Submit</Button>
      </form>
      </div>
    </div>
    </div> 
  );
};

export default Profile;