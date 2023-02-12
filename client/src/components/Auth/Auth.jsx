import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  useTheme
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import {Input, Copyright} from '../';
import { signIn, signUp } from '../../api/store/auth';


const Auth = () => {
  //SingupModel
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    authType: 'Custom'
  };
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const handleCallbackResponse = (response) => {
    const result = response?.credential;
    var userObject = jwt_decode(result);
    try {
      // Iz nekog razloga ne mogu da napravim da radi setFromData
      const googleFormData = {firstName: userObject.given_name, lastName: userObject.family_name, email: userObject.email, password: userObject.sub,confirmPassword: userObject.sub, authType: 'Google'};
      // Ako ne postoji u signIn se automatski pravi novi korisnik
      dispatch(signIn(googleFormData, navigate));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        '233358604528-tlc3jn2qeeiolru7hkgegn4apv433nrn.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById('googleButton'),
      { size: 'medium', width: 1000 }
    );
  }, []);

  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [isSingup, setIsSingup] = useState(true);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isSingup) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(signIn(formData, navigate));
    }
  };
  //Only changes specific form value
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const switchMode = () => {
    setIsSingup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: theme.spacing(3),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            margin: theme.spacing(2),
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        {isSingup ? (
          <Typography component='h1' variant='h5'>
            Sign In
          </Typography>
        ) : (
          <Typography component='h1' variant='h5'>
            SignUp
          </Typography>
        )}

        <Box component='form' noValidate onSubmit={handleSubmit} mt={3}>
          <Grid container spacing={2}>
            {!isSingup && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  autoFocus
                  type='text'
                  handleChange={handleChange}
                  half
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  type='text'
                  handleChange={handleChange}
                  half
                />
              </>
            )}

            <Input
              name='email'
              label='Email Address'
              type='email'
              handleChange={handleChange}
            />
            <Input
              name='password'
              label='Password'
              type={showPassword ? 'text' : 'password'}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />

            {!isSingup && (
              <Input
                name='confirmPassword'
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}
          >
            {isSingup ? 'Sing In' : 'Sign Up'}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button
                sx={{
                  fontSize: 12,
                  marginTop: theme.spacing(-1),
                  color: theme.palette.secondary.main,
                  '&:hover': {
                    backgroundColor: 'inherit',
                  },
                }}
                onClick={switchMode}
              >
                {!isSingup
                  ? 'Already have an account? Sing In'
                  : "Don't have an account? Sing Up"}
              </Button>
            </Grid>
          </Grid>
          <div id='googleButton' sx={{ marginBottom: theme.spacing(2) }}></div>
        </Box>
      </Box>
      <Copyright mt={5} />
    </Container>
  );
};

export default Auth;
