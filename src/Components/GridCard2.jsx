import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { textAlign } from '@mui/system';
export default function ButtonAppBar2() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
  return (
    <Box>
      <AppBar position="static" >
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 5, }}>
              <div style={{display:"flex",flexWrap:"wrap",textAlign:"center"}}>
                <div><Button color="inherit" sx={{paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",margin:"4% 2% 4% 2%",}}><Inventory2Icon sx={{fontSize:"900%"}}/> </Button></div> 
               <div  style={{textAlign:"center",marginLeft:"8%"}}><h1>Gread Transformation succusfull</h1><h5>Lorem, ipsum dolor.</h5> </div> 
               <div style={{textAlign:"center",marginLeft:"10%",marginTop:"5%"}}>
                <Stack direction="row" spacing={1}>
                <Chip label="Wiev Our Work" onClick={handleClick} sx={{width:"200px",height:"40px",color:"white"}} />
                </Stack>
               </div>
              </div>
          
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}