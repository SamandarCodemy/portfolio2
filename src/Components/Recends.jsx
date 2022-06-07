import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500,textAlign:"center",margin:"5% 0% 5% 30% "}}>
      <Typography variant="h1" component="div" sx={{textAlign:"center"}}>
        Heading
      </Typography>
    </Box>
  );
}
