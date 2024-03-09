import React from 'react';
import GrievanceForm from './GrievanceForm';
import UserSidebar from '../../components/UserSidebar';



const Grievances = () => {

  return (
    <div className='grid-container'>
    
         <UserSidebar/>  
       <div className='profile-box'> 
    <div align="center">
     
      <h1 className='h1'> ADD GRIEVANCES</h1>
      <GrievanceForm/>
     </div>
     </div>
     </div> 
  );
};

export default Grievances;