import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    
    color: theme.palette.text.secondary,
  }));


const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
            <Grid item xs={3}>
            <Item>
                <div className='flex justify-between items-center p-4'>
                    <h3 style={{color:"#6985FF"}} className=' text-gray-200 p-4 font-bold'> Total Users</h3>
                    <div className='flex items-center justify-center'>
                            <p className="text-blue-300">100</p>
                    </div>
                    
                </div>
                 
            </Item>
        </Grid>
        <Grid item xs={3}>
            <Item>
                <div className='flex justify-between items-center p-4'>
                    <h3 style={{color:"#6985FF"}} className=' text-gray-200 p-4 font-bold'> Total Users</h3>
                    <div className='flex items-center justify-center'>
                            <p className="text-blue-300">100</p>
                    </div>
                    
                </div>
                 
            </Item>
        </Grid>
        <Grid item xs={3}>
        <Item>
                <div className='flex justify-between items-center p-4'>
                    <h3 style={{color:"#6985FF"}} className=' text-gray-200 p-4 font-bold'> Total Users</h3>
                    <div className='flex items-center justify-center'>
                            <p className="text-blue-300">100</p>
                    </div>
                    
                </div>
                 
            </Item>
        </Grid>
        <Grid item xs={3}>
        <Item>
                <div className='flex justify-between items-center p-4'>
                    <h3 style={{color:"#6985FF"}} className=' text-gray-200 p-4 font-bold'> Total Users</h3>
                    <div className='flex items-center justify-center'>
                            <p className="text-blue-300">100</p>
                    </div>
                    
                </div>
                 
            </Item>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default Dashboard
