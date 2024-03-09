//LeaveRequestForm.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSidebar from '../../components/UserSidebar';
import { Paper, TableBody, TableCell, TableContainer, Table, TableRow, TextField, TableHead } from '@mui/material';

const LeaveView = () => {
    
    const [leaveRequests, setLeaveRequests] = useState([]);

    

   
    useEffect(() => {
        const fetchLeaveRequests = async () => {
            try {
                const response = await axios.get('http://localhost:4005/leaverequests');
                setLeaveRequests(response.data);
            } catch (error) {
                console.error('Error fetching leave requests:', error);
            }
        };

        fetchLeaveRequests();
    }, []);

    const getStatusMessage = (status) => {
        switch (status) {
            case 'approved':
                return 'Approved';
            case 'denied':
                return 'Denied';
            default:
                return 'Pending';
        }
    };


    return (
        <div className='grid-container'>
    
    <UserSidebar/>
    
    <div className='training'>
<div className='bb'>
        <h2 ><b className='head'>Leave Status</b></h2>
        <TableContainer component={Paper}>
        
            <Table>
            <TableHead>
    <TableRow>
      <TableCell >Leave Type</TableCell>
      <TableCell >Start date</TableCell>
      <TableCell >End date</TableCell>
      <TableCell >Reason</TableCell>
      <TableCell >Status</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
                {leaveRequests.map(request => (
                    <TableRow key={request._id}>
                        <TableCell> {request.leaveType}</TableCell>
                        <TableCell>{request.startDate} </TableCell>
                        <TableCell> {request.endDate}</TableCell>
                        <TableCell>{request.reason}</TableCell>
                        <TableCell>{getStatusMessage(request.status)}</TableCell>
                        </TableRow>
                ))}
                 </TableBody>                
                 </Table>
               </TableContainer>
               </div>
        </div>
        </div>
    );
};

export default LeaveView;
