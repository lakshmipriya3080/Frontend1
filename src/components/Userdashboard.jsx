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
function Userdashboard() {

    const [totalEmployees, setTotalEmployees] = useState(null);
    const [activeEmployees, setActiveEmployees] = useState(null);
    const [inactiveEmployees, setInactiveEmployees] = useState(null);
    const [goodTrainingCount, setGoodTrainingCount] = useState(null);
    const [averageTrainingCount, setAverageTrainingCount] = useState(null);
    const [totalTraining, setTotalTraining] = useState(null);


  
    useEffect(() => {
      // Fetch employee count
      axios.get('http://localhost:4005/employeeview')
        .then(response => {
        //   const { totalEmployees, activeCount, inactiveCount } = response.data;
          console.log('Employee data response', response);
                   setTotalEmployees(response.data.length);
                    const activeCount = response.data.filter((employees) => employees.status === 'ACTIVE').length;
                  setActiveEmployees(activeCount);
                 setInactiveEmployees(response.data.length - activeCount);          
        })
        .catch(error => {
          console.error('Error fetching employee data:', error);
        });
  
      // Fetch training counts
      axios.get('http://localhost:4005/trainingview')
        .then(response => {
        //   const { goodCount, averageCount } = response.data;
        console.log('Training data response', response);
                   setTotalTraining(response.data.length);
        const goodCount = response.data.filter((training) => training.remarks === 'good').length;

          setGoodTrainingCount(goodCount);
          setAverageTrainingCount(response.data.length - goodCount);          

        //   setAverageTrainingCount(averageCount);
        })
        .catch(error => {
          console.error('Error fetching training data:', error);
        });
    }, []);

    
  return (

    <div className='grid-container'>
    
         <Sidebar/>  
        
    <div className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>EMPLOYEES</h3>
                    
                    
                </div>
                <h2>Total Employees: {totalEmployees}</h2>
                <h2>Active Employees: {activeEmployees}</h2>
                <h2>Inactive Employees: {inactiveEmployees}</h2>
                <PieChart
  series={[
    {
      data: [
        { id: 0 , value: totalEmployees,label:'Total' },
        { id: 1, value: activeEmployees,  label: 'Active' },
        { id: 2, value: inactiveEmployees,   label: 'Inactive' },
      ],
    },
  ]}
  width={400}
  height={200}
  
/>
                
            </div>
            
            
            <div className='card'>
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
            
            
        </div>
        </div>
    </div>

        

        
  )
}

export default Userdashboard
