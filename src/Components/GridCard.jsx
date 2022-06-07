import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static" >
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 5,textAlign:"center" }}>
          <Button color="inherit" sx={{paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",margin:"2% 2% 2% 2%"}}>All</Button> 
          <Button color="inherit" sx={{paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",margin:"2% 2% 2% 2%"}}>Graphics</Button> 
          <Button color="inherit" sx={{paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",margin:"2% 2% 2% 2%"}}>UI/Ux</Button> 
          <Button color="inherit" sx={{paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",margin:"2% 2% 2% 2%"}}>Branding</Button> 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}