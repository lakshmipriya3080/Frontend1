//Login.jsx
import React, { useState } from 'react'
// import './login.css';
import {  Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, TextField, ThemeProvider, createTheme } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';//  import "./NavBarStyles.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const UserLogin = () => {

    const [empid,setempid]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState('');
     const defaultTheme = createTheme();
     const navigate=useNavigate()
     const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:4005/employeelogin', {
          empid:empid,
          password:password,
        });
  
        if (response.data.success) {
          alert('Login successful');
          console.log(response.data);
          navigate('/eprofile');
        } else {
          setError('Invalid EMP ID or Password. Please try again.');
          console.log(response.data);

        }
      } catch (err) {
        setError('Error occurred during login. Please try again.');
      }
    };
  return (


    <div>
        <nav>
        
    <ul id='navbar'>
        <li><a  href='/'>Home</a></li>
        <li><a className='active' href='/adlogin' >Login</a></li>
    </ul>
   
    </nav>
    <div  className='home'>
      <div className='cc'>
    
    <ThemeProvider  theme={defaultTheme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
            
          }}
        />
        <form onSubmit={handleSubmit}>
         <p className='bb'> <PersonPinIcon color='primary' fontSize='large'/></p>
          
          
      <h1 align='center'>EMPLOYEE LOGIN</h1>
       <TextField  margin="normal" required fullWidth id="EMP ID" label="EMP ID" name="empid" 
                autoComplete="id"  autoFocus  value={empid}
                onChange={(e) => setempid(e.target.value)} /><br/>

            


       
      <TextField  margin="normal" required fullWidth name="password" label="Password" type="password" id="password" 
                autoComplete="current-password"  value={password}
                onChange={(e) => setPassword(e.target.value)}  /><br/>

              

     
      <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />          

                
      <Button type="submit" fullWidth variant="contained"  sx={{ mt: 3, mb: 2}} >LOG IN</Button> 
      {/* <p className='r'>{error && '* ID and Password is required'}</p>  */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      </form>
      </Container> 
      </ThemeProvider>
      </div>
     
    </div>
    </div>
  )
}

export default UserLogin