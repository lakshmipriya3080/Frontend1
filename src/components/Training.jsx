import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Training.css'
import Sidebar from '../Sidebar/Sidebar';




const Training = () => {

  var [training,settraining]=useState({"idd":'',"ename":'',"age":'',"completed":'true',"remarks":''})

  const navigate = useNavigate();
  const inputhandler =(event)=> {
      const {name,value}=event.target
      settraining((training)=>({...training,[name]:value}))
      console.log(training)
  }
  
  const savedata =(event) =>{
    event.preventDefault();
    axios.post("http://localhost:4005/new/",training)
    .then((response) =>{
    alert("Record Saved")
    })
    .catch(err=>console.log(err))
    }
  return (
    <div className='grid-container'>
    
         <Sidebar/>  
        
    <div align="center">
      
      
      
    <div className="profile-box">
      <h1>Training</h1>
      <TextField  label="ID" variant="filled" name="idd" value={training.idd} onChange={inputhandler}/><br/><br/>
      <TextField  label="name" variant="filled" name="ename" value={training.name}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="age" value={training.age}  onChange={inputhandler} /><br/><br/>
      {/* <TextField  type="checkbox" label="completed" variant="filled" name="completed" value={inputs.completed}  onChange={inputhandler} /><br/><br/> */}
      <TextField  label="remarks" variant="filled" name="remarks" value={training.remarks}  onChange={inputhandler} /><br/><br/>
      <br/><br/>
      <Button variant="contained" onClick={savedata}>SUBMIT</Button>
    </div>
    </div>
    </div>
    
  )
}

export default Training