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


export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
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
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
          
        
        />
        Fin-Financials
      </FormGroup>
      <AppBar position="static"  >
        <Toolbar>
          
          
          <Typography fontSize={14}  component="div" >
            Help <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HelpOutlineRoundedIcon />
          </IconButton>
          
          </Typography>
          <Typography fontSize={14} component="div" >
            Contact us
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ConnectWithoutContactRoundedIcon/>
          </IconButton>
          
          </Typography>
          <Typography fontSize={14} component="div" >
            About <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <InfoRoundedIcon />
          </IconButton>
          
          </Typography>
          <Typography  fontSize ={14} component="div" >
            Change Password
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ManageAccountsRoundedIcon />
          </IconButton>
          
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
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>

       
      </AppBar>
      <div>
        <TextField
          label="Current User"
          id="outlined-size-small"
          defaultValue="jane"
          size="small"
        />
        <TextField
          label="Date"
          id="outlined-size-small"
          defaultValue="2/10/2023"
        
          size="small"
        />
        <TextField
          label="Institution"
          id="outlined-size-small"
          defaultValue="Fintech"
          size="small"
        />
        <TextField
          label="Branch details"
          id="outlined-size-small"
          defaultValue="Town"
          size="small"
        />
        </div>

    </Box>
  );
}
