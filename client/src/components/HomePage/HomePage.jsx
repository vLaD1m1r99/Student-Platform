import React from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, Button, Typography } from '@mui/material';
const HomePage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
          <AppBar
            sx={{
              height:'7vh',
              backgroundColor: 'transparent',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
              <Box
                component='img'
                src={require('../../Images/homePage.png')}
                height='5vh'
                ml={4}
              />
              <Button sx={{marginRight:'2rem'}} component={Link} to='/auth' variant='contained' >
                Sign in
              </Button>
          </AppBar>
          <Box sx={{display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',}}>
          <Box
            ml='2rem'
            component='img'
            src={require('../../Images/homePage.png')}
            height='55vh'
            alt='Logo'
          />
          <Box mr={2}>
            <Typography variant='h4' mb={2}>O Nama</Typography>
            <Typography variant='body' paragraph>Ovo je projekat jednog studenta sa željom da pomogne drugim studentima i srednjoškolcima. Platforma je zamišljena kao portal gde bi studenti mogli međusobno deliti materijal, skripte, savete, ali Najbitnije držati međusobno privatne časove iz onih predmeta iz kojih su najbolji. Na taj način bi neki studenti dobili potrebno znanje a drugi bi svoje znanje mogli da unovče nekom simboličnom cenom.</Typography>
            <Typography variant='body'>Ideja je proizašla iz toga što postoji puno Profesora, kao i studenata koji drže privatne časove, a ovde bi mogli svi da se enkapsuliraju i ovo bi bilo mesto u kome bi se našla pomoć i odgovor na bilo koje pitanje</Typography>
          </Box>
          </Box>
    </Box>
  );
};

export default HomePage;
