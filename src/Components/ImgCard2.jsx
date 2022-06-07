import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style.css'
export default function SimplePaper2() {

  return (
      <div>
          <Box
      sx={{
        display: 'flex',
        flexWrap:"wrap",
        '& > :not(style)': {
          m: 2.5,
          width: 350,
          height: 300,
        },
      }}
      md={350}
      minWidth={350}
      m={10}
    >
        <div className="img_card9">
            <Paper elevation={10}  />
    <div  style={{ marginLeft:"5%",marginTop:"60%"}}>
        <h1>Social media</h1>Similique, iure ullam
    </div>
        </div>
        <div className="img_card10">
            <Paper elevation={10}  />
    <div  style={{ marginLeft:"5%",marginTop:"60%"}}>
        <h1>Web marketing</h1>Similique, iure ullam
    </div>
        </div>
        <div className="img_card11">
            <Paper elevation={10}  />
    <div  style={{ marginLeft:"5%",marginTop:"60%"}}>
        <h1>R & D</h1> Similique, iure ullam
    </div>
        </div>
      
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexWrap:"wrap",
        '& > :not(style)': {
          m: 2.5,
          width: 350,
          height: 300,

        },
      }}
    m={10}
    md={350}
    minWidth={300}
    >
        <div className="img_card12">
            <Paper elevation={10}  />
    <div  style={{ marginLeft:"5%", marginTop:"60%"}}>
        <h1>Public Relation</h1> Similique, iure ullam
    </div>
        </div>
        <div className="img_card13">
            <Paper elevation={10}  />
    <div  style={{ marginLeft:"5%",marginTop:"60%"}}>
        <h1>Branding</h1> Similique, iure ullam
    </div>
        </div>
        <div className="img_card14">
            <Paper elevation={10 }  />
    <div  style={{ marginLeft:"5%",marginTop:"60%"}}>
        <h1>Creative Design</h1> Similique, iure ullam
    </div>
        </div>
      
    </Box>
      </div>
    
  );
}
