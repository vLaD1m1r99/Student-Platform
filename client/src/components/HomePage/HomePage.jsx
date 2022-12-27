import React from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
const HomePage = () => {
  return (
    <div
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        justifyContent='center'
        // alignItems='center'
      >
        <Grid item xs={12}>


          <div></div>
          <AppBar
            sx={{
              backgroundColor: 'transparent',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: '',
              alignItems: 'center',
            }}
          >
            <Toolbar>
              <Box
                component='img'
                src={require('../../Images/homePage.png')}
                height='5vh'
              />
              <Button component={Link} to='/auth' variant='contained' >
                Sign in
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={4}>
          <Typography>Jajajajjaja</Typography>
          <Typography>Jajajajjaja</Typography>
          <Typography>Jajajajjaja</Typography>
          <Button>Jajajajjaja</Button>
        </Grid>
        <Grid item xs={4}>
          <Box
            ml='2rem'
            component='img'
            src={require('../../Images/homePage.png')}
            height='60vh'
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
