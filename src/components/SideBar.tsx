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
import { useState } from "react";



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
                  color: disabled ? "#fff" : "#455A64",
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
          
          <SubMenu icon={<HomeOutlinedIcon className={iconClass}/>} rootStyles={submenustyle} label="Finfinancials">
          <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Membership">
                <MenuItem >Change Account Status</MenuItem>
                <MenuItem >Change Membership Type</MenuItem>
                <MenuItem >Membership Withdrawal</MenuItem>
                <MenuItem >Blocked Saving</MenuItem>
                <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Group Management">
                <MenuItem >Group Management Parameters</MenuItem>
                <MenuItem >Group Transfers</MenuItem>

                </SubMenu>
                <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Directory Management">
                <MenuItem >Non-Account Holders Mangement</MenuItem>
                <MenuItem >Account Holder</MenuItem>
                <MenuItem >Biometrics Manager</MenuItem>
                <MenuItem >Account Holder Upload</MenuItem>
              
                </SubMenu>
                <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Vehicle Registration">
                <MenuItem >Vehicle Registration</MenuItem>
                <MenuItem >Authorized Vehicle Registration </MenuItem>
                <MenuItem >Vehicle Transfers</MenuItem>
                <MenuItem >Auhorized Vehcle Tranfers</MenuItem>
                <MenuItem >Vehicle Ticketing</MenuItem>
                </SubMenu>
        
             </SubMenu> 

             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Authorization">
             <MenuItem >Non Transactional Items</MenuItem>
             
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Authorise Teller Transaction">
             <MenuItem >Group Management Transfers</MenuItem>
             <MenuItem >Group Authorization Transfers</MenuItem>
             <MenuItem >Overdraft Authorization</MenuItem>
             <MenuItem >Biometric Authorization</MenuItem>
             <MenuItem >Directory Authorization</MenuItem>
             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Financial Instrument Authorization">
             <MenuItem >Authorize Contract</MenuItem>
             <MenuItem >Authorize Schedule</MenuItem>
             
             </SubMenu>

             <MenuItem >Creditors and Debtors Authorization</MenuItem>
             <MenuItem >Debt Collection setup Authorization</MenuItem>
             <MenuItem >Guarantor Parameterization</MenuItem>
             <MenuItem >Approve Facility Disbursement Options</MenuItem>

             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Atm Cards Management">
              
             <MenuItem >Authorize Cards Request</MenuItem>
             <MenuItem >Authorize Cart Items</MenuItem>


             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Loan Eligibity Authorization">
             <MenuItem > Authorize Eligibility Defination</MenuItem>
             </SubMenu>
             

             </SubMenu>

  

             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Enquiries">
             <MenuItem > Member Enquiries</MenuItem>
             <MenuItem > Batches</MenuItem>
             <MenuItem > Statements </MenuItem>
             <MenuItem > Facility Quote</MenuItem>
             <MenuItem > Accounts lookup</MenuItem>
             <MenuItem > Dashboard</MenuItem>
             </SubMenu>

             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Transactions">
             <MenuItem >Journals </MenuItem>
             <MenuItem >Tellering</MenuItem>
             <MenuItem >Check off </MenuItem>
             <MenuItem >Pay Out </MenuItem>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Term Deposit ">
             <MenuItem > Capture Term Deposit</MenuItem>
             <MenuItem > Approve Term Deposit</MenuItem>
             </SubMenu>
             <MenuItem > Overdraft</MenuItem>

             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Standing Orders">
             <MenuItem >Dividends</MenuItem>
             <MenuItem >Data Extraction </MenuItem>
             <MenuItem >Manual Charges Accrual </MenuItem>
             </SubMenu>

             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Vault Management">
             <MenuItem > Clear Cheques</MenuItem>
             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Allowances Transactions">
             <MenuItem > Utilize allowances </MenuItem>
             <MenuItem > Authorize Transaction</MenuItem>
             </SubMenu>
             <MenuItem>Capture Direct Reciepts</MenuItem>
             <MenuItem>Group Items</MenuItem>
             </SubMenu>

             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Loans">
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Loan Variations">
             <MenuItem > Clear Cheques</MenuItem>
             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Debt Collection">
             <MenuItem > Clear Cheques</MenuItem>
             </SubMenu>
                    
             <MenuItem > Loan View</MenuItem>

             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Collateral Management">
             <MenuItem > Capture collateral</MenuItem>
             <MenuItem > Approve collateral</MenuItem>

             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Group Applications">
             <MenuItem >Application register </MenuItem>
             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Loan WorkFlow Stages">
             <MenuItem > Manage stages </MenuItem>
             <MenuItem > Authorize Stage Operations</MenuItem>
             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Facility WorkFlow Process">
             <MenuItem > Capture Application</MenuItem>
             <MenuItem > Appraise Application</MenuItem>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Application Disbursements">
             <MenuItem > Capture Application</MenuItem>
             <MenuItem > Appraise Application</MenuItem>
    
             </SubMenu>
             </SubMenu>

             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Facility Schedules">
             <MenuItem > Create schedules </MenuItem>
             <MenuItem > Authorize schedules </MenuItem>
      
             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Loan Write off">
             <MenuItem > Capture Write off</MenuItem>
             <MenuItem > Approve Write-off </MenuItem>
             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Guarantor Administration">
             <MenuItem > Guarantor release</MenuItem>
             <MenuItem > Guarantor Authorization</MenuItem>
             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Mass Intrest change">
             <MenuItem > Capture Intrest Change</MenuItem>
             <MenuItem > Authorize Intrest Change</MenuItem>
             
             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Facility Manual Billing">
             <MenuItem > Capture Billing Options </MenuItem>
             <MenuItem > Authorize Billing Options</MenuItem>
             
             </SubMenu>
             <SubMenu  icon={<PeopleOutlinedIcon className={iconClass}  />} label="Default Loan Transfers">
             <MenuItem > Initiate Transfers to Guarantor</MenuItem>
             <MenuItem > Authorize Transfers to Guarantors</MenuItem>
            
    
             </SubMenu>

              
             </SubMenu>



          
          
            </SubMenu>
        <SubMenu icon={<AccountBalanceIcon className={iconClass} />} rootStyles={submenustyle} label="Fixed assests">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Asset Register</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Depreciation</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Fixed Asset Setup</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Revaluation</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Asset disposal</MenuItem>
        </SubMenu>
        <SubMenu icon={<Inventory2Icon className={iconClass} />}  rootStyles={submenustyle} label="Inventory">
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
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass}/>}>Employee Details</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Leave</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Hr Setup</MenuItem>
        </SubMenu>
        <SubMenu icon={<PaymentsIcon className={iconClass} />} rootStyles={submenustyle} label="Payroll">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Payroll Setup</MenuItem>
            
        </SubMenu>
        <SubMenu icon={<PublicIcon className={iconClass} />} rootStyles={submenustyle} label="Global Adminstration">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Global Setup</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Impact Data</MenuItem>
          
        </SubMenu>
        <SubMenu rootStyles={submenustyle} icon={<Tooltip title="Consolidated reports"><BarChartIcon className={iconClass}/></Tooltip>} label="Consolidated reports">
            <MenuItem icon={<PeopleOutlinedIcon className={iconClass} />}>Cosolidated Reports List</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon  className={iconClass}/>}>Maintain Reports Mapping</MenuItem>
          
        </SubMenu>
        </Menu>

        
      </Sidebar>

    </div>
  )
}

export default SideBar
