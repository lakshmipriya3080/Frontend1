//Sidebar.jsx
import React from 'react'
import 
{BsPersonGear,BsCalendar2Check ,  BsClipboard2CheckFill, BsCardText, 
    BsPersonVcard }
 from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



function UserSidebar({openSidebarToggle, OpenSidebar}) {


    const navigate = useNavigate();


    const handleLogout = () => {
      navigate('/userlogin');
      console.log('Logout clicked');
    };
  
  
    const fontSizeStyle = { fontSize: '1rem' }; 
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
               <BsPersonGear/>  TalentHRM
                            </div>
            <span className='icon close_icon' onClick={OpenSidebar}></span>
        </div>

        <ul className='sidebar-list'>
            
            <li className='sidebar-list-item'>
                <a href="/eprofile">
                    <BsPersonVcard className='icon'/> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/leave">
                    <BsCalendar2Check  className='icon'/> Leave Calender
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/grievances">
                    <BsCardText className='icon'/> Grievances
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/rules">
                    <BsClipboard2CheckFill className='icon'/> Rules & Regulations
                </a>
            </li>
            <li >
            <button onClick={handleLogout} style={fontSizeStyle} className='button' >
                  <PowerSettingsNewIcon fontSize="small" /> Logout
                </button>
              
            </li>
        </ul>
    </aside>
  )
}

export default UserSidebar
