//LeaveRequests.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const LeaveRequests = () => {
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

    const handleApprove = async (id) => {
        try {
            await axios.put(`http://localhost:4005/leaves/${id}`, { status: 'approved' });
            alert('Leave succesfully approved')
            // Update leaveRequests state or fetch leave requests again
        } catch (error) {
            console.error('Error approving leave request:', error);
        }
    };

    const handleDeny = async (id) => {
        try {
            await axios.put(`http://localhost:4005/leaves/${id}`, { status: 'denied' });
            alert('Leave succesfully denied')

            // Update leaveRequests state or fetch leave requests again
        } catch (error) {
            console.error('Error denying leave request:', error);
        }
    };

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
    
    <Sidebar/>
    <div className='training'>
<div className='bb'>            
    <h2 className='head'>Leave Requests</h2>
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
                        <TableCell>{request.leaveType}</TableCell>
                        <TableCell>{request.startDate} </TableCell>
                        <TableCell>{request.endDate}</TableCell>
                        <TableCell>{request.reason}</TableCell>
                        <TableCell>{getStatusMessage(request.status)}</TableCell>
                        {request.status === 'pending' && (
                            <TableCell>
                                <button onClick={() => handleApprove(request._id)}>Approve</button><br/><br/>
                              <button  onClick={() => handleDeny(request._id)}>Deny</button>
                            </TableCell>
                        )}
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

export default LeaveRequests;
