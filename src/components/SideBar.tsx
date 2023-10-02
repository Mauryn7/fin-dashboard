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
          background: "#0b7c9c !important",
          opacity:5
        }}
        
       className="h-screen  font-bold"  breakPoint="sm" transitionDuration={800}>
       <div className="flex items-center justify-between p-6">
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
          
          <SubMenu icon={<HomeOutlinedIcon className={iconClass}/>} label="Home">
          <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Membership">
                <MenuItem >Authorization</MenuItem>
                <MenuItem >Enquiries</MenuItem>
             </SubMenu>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Enquiries</MenuItem>
            </SubMenu>
        <SubMenu icon={<AccountBalanceIcon className={iconClass} />} label="Fixed assests">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Membership</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Enquiries</MenuItem>
        </SubMenu>
        <SubMenu icon={<Inventory2Icon className={iconClass} />} label="Inventory">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Membership</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Enquiries</MenuItem>
        </SubMenu>
        <SubMenu icon={<DescriptionIcon className={iconClass} />} label="File tracker">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Membership</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>Enquiries</MenuItem>
        </SubMenu>
        <SubMenu icon={<PeopleIcon className={iconClass} />} label="Human resource">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass}/>}>Membership</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Enquiries</MenuItem>
        </SubMenu>
        <SubMenu icon={<PaymentsIcon className={iconClass} />} label="Payroll">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Membership</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass}/>}>Enquiries</MenuItem>
        </SubMenu>
        <SubMenu icon={<PublicIcon className={iconClass} />} label="Global Adminstration">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Membership</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Enquiries</MenuItem>
        </SubMenu>
        <SubMenu icon={<Tooltip title="Consolidated reports"><BarChartIcon className={iconClass}/></Tooltip>} label="Consolidated reports">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Membership</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Authorization</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Enquiries</MenuItem>
        </SubMenu>
        </Menu>

        
      </Sidebar>

    </div>
  )
}

export default SideBar
