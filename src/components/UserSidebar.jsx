//Sidebar.jsx
import React from 'react'
import 
{BsPersonGear,BsCalendar2Check ,  BsClipboard2CheckFill, BsCardText, 
    BsPersonVcard }
 from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List } from 'antd';



function UserSidebar({openSidebarToggle, OpenSidebar}) {

    const [open, setOpen] = React.useState(true);
    const [opens, setOpens] = React.useState(true);
   


    const navigate = useNavigate();


    const handleLogout = () => {
      navigate('/userlogin');
      console.log('Logout clicked');
    };

    const handleClick = () => {
        setOpen(!open);
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
                <a href="/dash">
                    <BsPersonVcard className='icon'/> Dasboard
                </a>
            </li>
            
            <li className='sidebar-list-item'>
                <a href="/eprofile">
                    <BsPersonVcard className='icon'/> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
            
            <ListItemButton onClick={handleClick}>

<BsCalendar2Check className='icon' />        

<ListItemText primary="Leave Management" />
{open ? <ExpandLess /> : <ExpandMore />}
</ListItemButton>
<Collapse in={open} timeout="auto" unmountOnExit>
<List component="div" disablePadding>
<ListItemButton sx={{ pl: 4 }}>
<li className='sidebar-list-item'><a href='/leave'>
<ListItemText primary="Apply Leave" /></a></li>
</ListItemButton>
<ListItemButton sx={{ pl: 4 }}>
<li className='sidebar-list-item'><a href='/leaveview'>
<ListItemText primary="Leave Status" /></a></li>          
</ListItemButton>
</List>
</Collapse>

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
