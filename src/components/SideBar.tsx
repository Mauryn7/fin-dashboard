"use client"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Tooltip from '@mui/material/Tooltip';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DescriptionIcon from '@mui/icons-material/Description'
import PeopleIcon from '@mui/icons-material/People'
import PaymentsIcon from '@mui/icons-material/Payments'
import PublicIcon from '@mui/icons-material/Public'
import BarChartIcon from '@mui/icons-material/BarChart'

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";



const SideBar = () => {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } = useProSidebar();
    const [value, setValue] = useState(0);
    const iconClass = "text-black"
  return (
    <div >
      <Sidebar 
        rootStyles={{
          background: "bg-blue-200 ",
          opacity:5
        }}
        
       className="h-screen  font-bold"  breakPoint="sm" transitionDuration={800}>
       <div className="flex items-center justify-between p-6">
       <h2>Fin-Financials</h2>
        
       {/* <h2>Fin</h2>
       <MenuOutlinedIcon 
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center"}}
            
          /> */}
          
       </div>
           
        <Menu  menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: disabled ? "#eee" : "#455A64",
                  backgroundColor: active ? "#fff" : undefined,
                  "&:hover": {
                     backgroundColor: "#335B8C !important",
                     color: "white !important",
                     borderRadius: "8px !important",
                     fontWeight: "bold !important"
                   },
                };
              }
            },
          }}>
          
          <SubMenu icon={<HomeOutlinedIcon className={iconClass}/>} label="Finfinancials">
          <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Membership">
                <MenuItem >Authorization</MenuItem>
                <MenuItem >Enquiries</MenuItem>
             
                
             </SubMenu>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Enquiries</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Transaction</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Loans</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Accounts</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Reports</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>End of period</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Tools/Maintenance</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Setup</MenuItem>
            </SubMenu>
        <SubMenu icon={<AccountBalanceIcon className={iconClass} />} label="Fixed assests">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Asset Register</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Depreciation</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Fixed Asset Setup</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Revaluation</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Asset disposal</MenuItem>
        </SubMenu>
        <SubMenu icon={<Inventory2Icon className={iconClass} />} label="Inventory">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Stock Request</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Stores</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Purchases</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Stock Items</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Inventory Setup</MenuItem>
        </SubMenu>
        <SubMenu icon={<DescriptionIcon className={iconClass} />} label="File tracker">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Managment</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Movement</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Tracker Reports</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Tracker Setup</MenuItem>
            
    
        </SubMenu>
        <SubMenu icon={<PeopleIcon className={iconClass} />} label="Human resource">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass}/>}>Employee Details</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Leave</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Hr Setup</MenuItem>
        </SubMenu>
        <SubMenu icon={<PaymentsIcon className={iconClass} />} label="Payroll">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Payroll Setup</MenuItem>
            
        </SubMenu>
        <SubMenu icon={<PublicIcon className={iconClass} />} label="Global Adminstration">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Global Setup</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Impact Data</MenuItem>
          
        </SubMenu>
        <SubMenu icon={<Tooltip title="Consolidated reports"><BarChartIcon className={iconClass}/></Tooltip>} label="Consolidated reports">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Cosolidated Reports List</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Maintain Reports Mapping</MenuItem>
          
        </SubMenu>
        </Menu>

        
      </Sidebar>

    </div>
  )
}

export default SideBar
