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
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StreamIcon from '@mui/icons-material/Stream';
import { useState } from "react";
import Link from "next/link";



const SideBar = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } = useProSidebar();
  const [value, setValue] = useState(0);
  const iconClass = "text-black"
  const submenustyle = {

    color: '#1F5780',
    '&:hover': {
      backgroundColor: '#1F5780',
    },

    // ['.' + menuClasses.subMenuContent]: {
    //   backgroundColor: '#fbedff',
    // },
  }
  const [submenuActiveStates, setSubmenuActiveStates] = useState([false, false, false]); // Initialize with as many false values as you have submenus

  const handleSubmenuClick = (index) => {
    // Set the active state for the clicked submenu
    const updatedActiveStates = [...submenuActiveStates];
    updatedActiveStates[index] = true;
    setSubmenuActiveStates(updatedActiveStates);
  };
  return (
    
        <Sidebar
          rootStyles={{
    
            background:"white",
    
          }}
 transitionDuration={300}>
         
          <Menu menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: active ? "white" : "black",
                  backgroundColor: active ? "#5a5a5a" : undefined,
                  "&:hover": {
                    backgroundColor: "#gray !important",
                    color: "black !important",
                    // borderRadius: "8px !important",
                    fontWeight: "bold !important"
                  },
                };
              }
            },
          }}>
          
          <SubMenu active={true} icon={<HomeOutlinedIcon className={iconClass}/>} rootStyles={submenustyle} label="Finfinancials">
          <SubMenu
          active={submenuActiveStates[0]} // Use the state variable for this submenu
          onClick={() => handleSubmenuClick(0)}
          icon={<PeopleOutlinedIcon className={iconClass}   />} label="Membership">
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
            <SubMenu icon={<AccountBalanceIcon className={iconClass} />} rootStyles={submenustyle} label="Fixed assests">
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>
                <Link href="/Dashboard/Assets">
                Asset Register
                </Link>
                
                </MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Depreciation</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Fixed Asset Setup</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Revaluation</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Asset disposal</MenuItem>
            </SubMenu>
            <SubMenu icon={<Inventory2Icon className={iconClass} />} rootStyles={submenustyle} label="Inventory">
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Stock Request</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Stores</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Purchases</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Stock Items</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Authorization</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Inventory Setup</MenuItem>
            </SubMenu>
            <SubMenu icon={<DescriptionIcon className={iconClass} />} rootStyles={submenustyle} label="File tracker">
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Managment</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Movement</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Authorization</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Tracker Reports</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>File Tracker Setup</MenuItem>


            </SubMenu>
            <SubMenu icon={<PeopleIcon className={iconClass} />} rootStyles={submenustyle} label="Human resource">
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Employee Details</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Leave</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Hr Setup</MenuItem>
            </SubMenu>
            <SubMenu icon={<PaymentsIcon className={iconClass} />} rootStyles={submenustyle} label="Payroll">
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Payroll Setup</MenuItem>

            </SubMenu>
            <SubMenu icon={<PublicIcon className={iconClass} />} rootStyles={submenustyle} label="Global Adminstration">
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Global Setup</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Impact Data</MenuItem>

            </SubMenu>
            <SubMenu rootStyles={submenustyle} icon={<Tooltip title="Consolidated reports"><BarChartIcon className={iconClass} /></Tooltip>} label="Consolidated reports">
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Cosolidated Reports List</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Maintain Reports Mapping</MenuItem>

            </SubMenu>


          </Menu>


        </Sidebar>
      
  )
}

export default SideBar
