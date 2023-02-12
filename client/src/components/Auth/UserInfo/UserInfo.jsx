import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
    Box,
    MenuItem,
    Select,
    FormGroup,
    Checkbox,
    Button,
    Container,
    CssBaseline,
    Grid,
    Avatar,
    Typography,
    useTheme
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {Input} from '../../';
import { updateUserInfo } from '../../../api/store/auth';
const UserInfo = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile')).result;
    const initialValues = {
        firstName: user.firstName,
        lastName:  user.lastName,
        phone: user.phone,
        title: user.title,
        about: user.about,

    };
    const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
 
    const [formData, setFormData] = useState(initialValues);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUserInfo(user._id, formData, navigate));
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
          <Typography component='h1' variant='h5'>
            Please Enter Your Informations
          </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} mt={3}>
          <Grid container spacing={2}>
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
            <Input
              name='phone'
              label='Phone Number'
              type='number'
              handleChange={handleChange}
            />
            {/* <Input
              name='title'
              label=''
              type={'text'}
              handleChange={handleChange}
            /> */}
              <Input
                name='about'
                label='About You'
                multiline = {true}
                maxRows={10}
                handleChange={handleChange}
                type='text'
              />
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}
          >
            Finish
          </Button>
        </Box>
      </Box>
    </Container>
  
  )
}

export default UserInfo