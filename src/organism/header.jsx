import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Paper, IconButton, InputBase } from '@mui/material';
import { PeopleOutlineOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';

const ICON_STYLES = { color: '#9CA3AF' };

function Header() {

  return (
    <Paper sx={{ bgcolor: '#ffff', py: 1 }}>
      <Grid container sx={{display:'flex', justifyContent:"space-between", alignItems: "center"}} >
        <Grid item>
          <IconButton type='button' sx={{p: "10px"}} aria-label='search'>
            <SearchOutlined sx={ICON_STYLES} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search here"
          />
        </Grid>
        <Grid item >
          <IconButton>
            <PeopleOutlineOutlined sx={ICON_STYLES} />
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlined sx={ICON_STYLES} />
          </IconButton>
          <IconButton>
            <Avatar src="https://hips.hearstapps.com/hmg-prod/images/bugatti-divo-lady-bug-2020-1600-05-1614854784.jpg" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;