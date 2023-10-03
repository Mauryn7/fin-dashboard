'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import {useProSidebar } from "react-pro-sidebar"
import DeleteIcon from '@mui/icons-material/Delete';

import Tooltip from '@mui/material/Tooltip';

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const {toggleSidebar, collapseSidebar, toggled, broken } = useProSidebar();
  const toggle = ()=>{
    toggleSidebar();
    toggled ? collapseSidebar() : collapseSidebar()

}
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" style={{backgroundColor: "#335B8C" }}>
    
        <Toolbar>
          
        <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=> toggle()}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
             
          
          <Typography fontSize={14}  component="div" >
          <Tooltip title="Help" arrow className='text-blue'>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >         
            <HelpOutlineRoundedIcon />
            
          </IconButton>
          
          </Tooltip>
        
          </Typography>
          <Typography fontSize={14} component="div" >
            <Tooltip title= "Contact us" arrow className= "text-blue">
      
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ConnectWithoutContactRoundedIcon/>
          </IconButton>
          </Tooltip>
          
          </Typography>
          <Typography fontSize={14} component="div" >
            <Tooltip title= "About" arrow className= "text-blue">

            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <InfoRoundedIcon />
          </IconButton>
          </Tooltip>
          
          </Typography>
          <Typography  fontSize ={14} component="div" >
            <Tooltip title= "Change password" arrow className= "text-blue">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ManageAccountsRoundedIcon />
          </IconButton>
          </Tooltip>
          
          </Typography>
          
          
          {auth && (
            <div className="absolute right-0 top-0 h-16 w-16">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>

      </AppBar>

    </Box>
  );
}
