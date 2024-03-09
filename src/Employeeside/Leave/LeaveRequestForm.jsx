//LeaveRequestForm.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSidebar from '../../components/UserSidebar';
import {  Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';

const LeaveRequestForm = () => {
    const [leaveType, setLeaveType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4005/leaves', {
                leaveType,
                startDate,
                endDate,
                reason
            });
            alert('Leave successfully applied')
            console.log(response.data); // Handle success message
        } catch (error) {
            console.error('Error submitting leave request:', error);
        }
    };

   
   


    return (
        <div className='grid-container'>
    
    <UserSidebar/>
    <Card sx={{width: 500,height: 450, marginLeft: 50 ,marginTop: 20}}  align='center'>
        <form >
      <CardContent>
        <br/> 
      <TextField
          id="outlined-multiline-flexible"
          label="Leave Type"
          value={leaveType} onChange={(e) => setLeaveType(e.target.value)} 
          multiline
          maxRows={4}
          variant="filled"
        /><br/><br/><br/>
       From&nbsp; <input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} /> &nbsp;To &nbsp;
             <input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <br/><br/><br/>
            <textarea placeholder="Reason" value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
            <br/><br/><br/>
        
      </CardContent>
      <CardActions>
        <button type='button'color='success' size="small" onClick={handleSubmit}>Submit</button>
        
      </CardActions>
      </form>
    </Card> 
          
        {/* <form onSubmit={handleSubmit} align='center'>
        <TextField
          id="outlined-multiline-flexible"
          label="Leave Type"
          value={leaveType} onChange={(e) => setLeaveType(e.target.value)} 
          multiline
          maxRows={4}
          variant="filled"
        /><br/><br/> */}
         
        
            {/* <input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <br/><br/>
            <textarea placeholder="Reason" value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
            <br/><br/>
            <button type="submit">Submit</button>
        </form> */}
        </div> 
        
    );
};

export default LeaveRequestForm;
