import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function SimplePaper() {
    const handleClick = () => {
        console.info('You clicked the Chip.');}
  return (
      <div>
          <Box
      sx={{
        display: 'flex',
        flexWrap:"wrap",
        '& > :not(style)': {
          m: 3.3,
          width: 280,
          height: 250,

        },
      }}
    >
        <div className="img_card1">
            <Paper elevation={10}  />
            <Stack direction="row" spacing={1} sx={{marginTop:"50%",marginLeft:"5%"}}>
      <Chip label="UI/UX Design" onClick={handleClick} sx={{width:"80%",height:40}}/>
    </Stack>
    <div  style={{ marginLeft:"5%",marginTop:"5%"}}>
        Lorem ipsum dolor sit amet<br />Similique, iure ullam
    </div>
        </div>
        <div className="img_card2">
            <Paper elevation={10}  />
            <Stack direction="row" spacing={1} sx={{marginTop:"50%",marginLeft:"5%"}}>
      <Chip label="Social Media" onClick={handleClick} sx={{width:"80%",height:40}}/>
    </Stack>
    <div  style={{ marginLeft:"5%",marginTop:"5%"}}>
        Lorem ipsum dolor sit amet<br />Similique, iure ullam
    </div>
        </div>
        <div className="img_card3">
            <Paper elevation={10}  />
            <Stack direction="row" spacing={1} sx={{marginTop:"50%",marginLeft:"5%"}}>
      <Chip label="Marketing" variant="outlined" onClick={handleClick} sx={{width:"80%",height:40,color:"white"}}/>
    </Stack>
    <div  style={{ marginLeft:"5%",marginTop:"5%"}}>
        Lorem ipsum dolor sit amet<br />Similique, iure ullam
    </div>
        </div>
        <div className="img_card4">
            <Paper elevation={10}  />
            <Stack direction="row" spacing={1} sx={{marginTop:"50%",marginLeft:"5%"}}>
      <Chip label="Graphic" onClick={handleClick} sx={{width:"80%",height:40}}/>
    </Stack>
    <div  style={{ marginLeft:"5%",marginTop:"5%"}}>
        Lorem ipsum dolor sit amet<br />Similique, iure ullam
    </div>
        </div>
      
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexWrap:"wrap",
        '& > :not(style)': {
          m: 3.3,
          width: 280,
          height: 250,

        },
      }}
    >
        <div className="img_card5">
            <Paper elevation={10}  />
            <Stack direction="row" spacing={1} sx={{marginTop:"50%",marginLeft:"5%"}}>
      <Chip label="Digtal Marketing" variant="outlined" onClick={handleClick} sx={{width:"80%",height:40,color:"white"}}/>
    </Stack>
    <div  style={{ marginLeft:"5%",marginTop:"5%"}}>
        Lorem ipsum dolor sit amet<br />Similique, iure ullam
    </div>
        </div>
        <div className="img_card6">
            <Paper elevation={10}  />
            <Stack direction="row" spacing={1} sx={{marginTop:"50%",marginLeft:"5%"}}>
      <Chip label="Market Research" variant="outlined" onClick={handleClick} sx={{width:"80%",height:40,color:"white"}}/>
    </Stack>
    <div  style={{ marginLeft:"5%",marginTop:"5%"}}>
        Lorem ipsum dolor sit amet<br />Similique, iure ullam
    </div>
        </div>
        <div className="img_card7">
            <Paper elevation={10}  />
            <Stack direction="row" spacing={1} sx={{marginTop:"50%",marginLeft:"5%"}}>
      <Chip label="Busines" variant="outlined" onClick={handleClick} sx={{width:"80%",height:40,color:"white"}}/>
    </Stack>
    <div  style={{ marginLeft:"5%",marginTop:"5%"}}>
        Lorem ipsum dolor sit amet<br />Similique, iure ullam
    </div>
        </div>
        <div className="img_card8">
            <Paper elevation={10}  />
            <Stack direction="row" spacing={1} sx={{marginTop:"50%",marginLeft:"5%"}}>
      <Chip label="Branding"  onClick={handleClick} sx={{width:"80%",height:40,color:"white"}}/>
    </Stack>
    <div  style={{ marginLeft:"5%",marginTop:"5%"}}>
        Lorem ipsum dolor sit amet<br />Similique, iure ullam
    </div>
        </div>
      
    </Box>
      </div>
    
  );
}
