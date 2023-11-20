import React from 'react';

import  Grid  from '@mui/material/Unstable_Grid2';
import  { Box, CssBaseline }  from '@mui/material';

function Layout({children}) {
const [header, Menu] = children;

  return (
    <Box style={{display: "flex", height: "100vh"}}>
      <CssBaseline />
      <Grid container sx={{flexGrow: 1}}>
        <Grid item flexBasis={220}>
          {Menu}
        </Grid>
        <Grid item flex={1}> 
          <Grid xs={12}>{header}</Grid>
          <Grid container spacing={3}>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>Container 1</Grid>
            <Grid item>Container 2</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;