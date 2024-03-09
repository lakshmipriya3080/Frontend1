//App.js

import { Route,  Routes, BrowserRouter } from "react-router-dom";
import Myprofile from "./components/Myprofile";
import Employeedetails from "./components/Employeedetails";
import Training from "./components/Training";
import LoginCard from "./Login/LoginCard";
import Login from "./Login/Login";
import UserLogin from "./Login/UserLogin";

import Header from "./components/Header";
import Sidebar from "./Sidebar/Sidebar";
import { useEffect, useState } from "react";

import './App.css';
import Dashboard from "./components/Dasboard";
import Navbar from "./Login/Navbar";
import Home from "./components/Home";
import Employeeview from "./components/Employeeview";
import EmployeeEdit from "./components/EmployeeEdit";
import Viewtraining from "./components/Viewtraining";
import Trainingedit from "./components/Trainingedit";
import Rulesr from "./Employeeside/Rules/Rulesr";
import Grievances from "./Employeeside/Grivances/Grivances";
import Profile from "./Employeeside/Profile/Profile";
import Homee from "./Employeeside/Homee";
import UserSidebar from "./components/UserSidebar";
import Userdashboard from "./components/Userdashboard";
import Grievancesview from "./components/Grievancesview";
import LeaveRequestForm from "./Employeeside/Leave/LeaveRequestForm";
import LeaveRequests from "./components/LeaveRequests";
import LeaveView from "./Employeeside/Leave/LeaveView";





function App() {
  
  
 

   
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/login" element={<LoginCard/>}></Route>
      <Route path='/adlogin'element={<Login method="get"/>}></Route>
      <Route path='/userlogin'element={<UserLogin method="post"/>}></Route>
      


      <Route path="userdashboard" element={<Userdashboard />}></Route>
      <Route path="Myprofile" element={<Myprofile/>}></Route>
      <Route path="grievanceview" element={<Grievancesview/>}></Route>
      <Route path="leavereq" element={<LeaveRequests/>}></Route>
      <Route path="Employeedetails" element={<Employeedetails/>}></Route>
      <Route path="Employeeview" element={<Employeeview/>}></Route>
      <Route path="Employeeedit" element={<EmployeeEdit/>}></Route>
      <Route path="Training" element={<Training/>}></Route>
      <Route path="Viewtraining" element={<Viewtraining/>}></Route>
      <Route path="Trainingedit" element={<Trainingedit/>}></Route>
      
      <Route path="dash" element={<Dashboard/>}></Route>
      <Route path="eprofile" element={<Profile/>}></Route>
      <Route path="leave" element={<LeaveRequestForm/>}></Route>
      <Route path="leaveview" element={<LeaveView/>}></Route>
      <Route path="grievances" element={<Grievances/>}></Route>
      <Route path="rules" element={<Rulesr/>}></Route>
      
      </Routes>
     
     

      
     </BrowserRouter>
     
   
  );
}

export default App;