//Dasboard.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 
{ BsPeopleFill, BsPersonFillCheck, BsPersonVcard}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import UserSidebar from './UserSidebar';
import Sidebar from '../Sidebar/Sidebar';
import { Stack } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
function Dashboard() {

    const [totalLeave, setTotalLeave] = useState(null);
    const [approvedLeave, setApprovedLeave] = useState(null);
    const [deniedLeave, setDeniedLeave] = useState(null);
    

  
    useEffect(() => {
      // Fetch employee count
      axios.get('http://localhost:4005/leaverequests')
        .then(response => {
        //   const { totalEmployees, activeCount, inactiveCount } = response.data;
          console.log('Leave data response', response);
                   setTotalLeave(response.data.length);
                    const approvedCount = response.data.filter((leaves) => leaves.status === 'approved').length;
                  setApprovedLeave(approvedCount);
                 setDeniedLeave(response.data.length - approvedCount);          
        })
        .catch(error => {
          console.error('Error fetching leave data:', error);
        });
  
      // Fetch training counts
    //   axios.get('http://localhost:4005/trainingview')
    //     .then(response => {
    //     //   const { goodCount, averageCount } = response.data;
    //     console.log('Training data response', response);
    //                setTotalTraining(response.data.length);
    //     const goodCount = response.data.filter((training) => training.remarks === 'good').length;

    //       setGoodTrainingCount(goodCount);
    //       setAverageTrainingCount(response.data.length - goodCount);          

    //     //   setAverageTrainingCount(averageCount);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching training data:', error);
    //     });
    }, []);

    
  return (

    <div className='grid-container'>
    
         <UserSidebar/>  
        
    <div className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>LEAVE MANAGEMENT</h3>
                    
                    
                </div>
                <h2>Total Leaves: {totalLeave}</h2>
                <h2>Leave Approved: {approvedLeave}</h2>
                <h2>Leave Denied: {deniedLeave}</h2>
                <PieChart
  series={[
    {
      data: [
        { id: 0 , value: totalLeave,label:'Total' },
        { id: 1, value: approvedLeave,  label: 'Approved' },
        { id: 2, value: deniedLeave,   label: 'Denied' },
      ],
    },
  ]}
  width={400}
  height={200}
  
/>
                
            </div>
            
            
     {/* <div className='card'>
                <div className='card-inner'>
                    <h3>TRAINING STATUS</h3>
                    
                </div>
                <h2>Total : {totalTraining}</h2>
             <h2>Good : {goodTrainingCount}</h2>
            <h2>Average : {averageTrainingCount}</h2>
            <PieChart
  series={[
    {
      data: [
        { id: 0 , value: totalTraining, label:   'Total' },
        { id: 1, value: goodTrainingCount,  label: 'Good' },
        { id: 2, value: averageTrainingCount,   label: 'Average' },

      ],
    },
  ]}
  width={400}
  height={200}
  
/>
            </div>
             */}
             
        </div>
        </div>
    </div>

        

        
  )
}

export default Dashboard
